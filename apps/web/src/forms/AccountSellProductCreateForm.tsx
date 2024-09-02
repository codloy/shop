'use client';

import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useI18n } from '@/lib/i18n/client';
import { SnackbarKey, useSnackbar } from 'notistack';
import { ChangeEvent, Fragment, useRef, useState } from 'react';
import {
  AccountSellProductCreateSchema,
  accountSellProductCreateDefaultSchema,
  accountSellProductCreateSchema,
} from 'schemas';
import { trpc } from '@/lib/trpc/trpc';
import { zodResolver } from '@hookform/resolvers/zod';
import DeleteIcon from '@mui/icons-material/Delete';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { FormatAsCurrency } from '@/components';
import {
  productAvailabilities,
  productConditions,
  productDeliveryOptions,
} from 'common';
import { LoadingButton } from '@mui/lab';
import AddIcon from '@mui/icons-material/Add';
import { convertToMungu } from 'common';
import { AccountSellProductCreateSelectCategory } from './categories-list';
import { AccountSellProductCreateCategoriesBreadcrumb } from './categories-breadcrumb';
import { slug } from '@/lib/slug';
import { useAtom, useAtomValue } from 'jotai';
import { accountSellProductCreateOptionAtom } from './option/atom';
import { AccountSellProductCreateOptionDialog } from './option/dialog';
import { GridItem } from '@/components/GridItem';
import { GridLabel } from '@/components/GridLabel';
import { GridOption } from '@/components/GridOption';
import { GridDivider } from '@/components/GridDivider';
import { GridTitle } from '@/components/GridTitle';
import { ProductFootnoteOption } from '@/components/ProductFootnoteOption';
import { CategoryAttributeDisplay } from './category-attribute-display';
import { accountBuyProductsSelectDialogAtom } from '../../buy/select/atom';
import { AccountBuyProductsSelectDialog } from '../../buy/select/dialog';
import { AccountBuyProductCard } from '../../buy/card';

export type AccountSellProductCreateFormProps = {
  onSuccess(): void;
};

export function AccountSellProductCreateForm(
  props: AccountSellProductCreateFormProps
) {
  const { onSuccess } = props;
  const [categorySlugs, setCategorySlugs] = useState<string[]>([]);
  const t = useI18n();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [snackbarId, setSnackbarId] = useState<SnackbarKey | null>(null);
  const { handleSubmit, control, reset, watch, setValue } =
    useForm<AccountSellProductCreateSchema>({
      resolver: zodResolver(accountSellProductCreateSchema),
      defaultValues: accountSellProductCreateDefaultSchema,
    });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'productImages',
  });
  const { fields: categoryAttributFields } = useFieldArray({
    control,
    name: 'categoryAttributes',
  });
  const accountSellProductCreate =
    trpc.accountSellProduct.accountSellProductCreate.useMutation({
      onSuccess(data) {
        reset();

        enqueueSnackbar(t('{name} created', { name: data.result.name }), {
          variant: 'success',
        });

        onSuccess();
      },
      onError(err: Error | any) {
        enqueueSnackbar(t(err?.message, {}), { variant: 'error' });
      },
      onSettled() {
        if (snackbarId) {
          setSnackbarId(null);
          closeSnackbar(snackbarId);
        }
      },
    });
  trpc.homeCategoryHasChild.useQuery(
    { categorySlug: categorySlugs[categorySlugs.length - 1] },
    {
      onSuccess(data) {
        if (!data.result.hasChild) {
          setValue('categorySlug', categorySlugs[categorySlugs.length - 1]);
        }

        refetch();
      },
      enabled: categorySlugs.length > 0,
    }
  );
  const profileImageRef = useRef<HTMLInputElement | null>(null);
  const { refetch } = trpc.homeFilterProductCategories.useQuery(
    {
      slugs: categorySlugs,
    },
    {
      onSuccess(data) {
        if (data?.results) {
          setValue(
            'categoryAttributes',
            data.results.map(d => ({
              _id: d.id,
              name: d.name,
              datatype: d.datatype,
              isRequired: d.isRequired,
              options: d.options.map(option => ({
                _id: option.id,
                value: option.value,
                isSelected: false,
              })),
            }))
          );
        }
      },
    }
  );
  const optionDialog = useAtomValue(accountSellProductCreateOptionAtom);
  const [selectDialog, setSelectDialog] = useAtom(
    accountBuyProductsSelectDialogAtom
  );

  function onSubmit(data: AccountSellProductCreateSchema) {
    let canSubmit = true;

    for (const categoryAttribute of data.categoryAttributes) {
      if (!canSubmit) break;

      const { name, datatype, options, isRequired } = categoryAttribute;

      if (isRequired) {
        if (!options.filter(option => option.isSelected === true).length) {
          if (
            datatype === 'Checkbox input' ||
            datatype === 'Radio input' ||
            datatype === 'Select input'
          ) {
            enqueueSnackbar(t('Please fill {name}', { name }), {
              variant: 'error',
            });

            canSubmit = false;
          } else if (
            datatype === 'Number input' ||
            datatype === 'Text input' ||
            datatype === 'Year input'
          ) {
            const value = options[0].value;

            if (!value) {
              enqueueSnackbar(t('Please fill {name}', { name }), {
                variant: 'error',
              });

              canSubmit = false;
            }
          } else if (datatype === 'Location input') {
            const lat = options[0].value;
            const lng = options[1].value;

            if (!lat || !lng) {
              enqueueSnackbar(t('Please fill {name}', { name }), {
                variant: 'error',
              });

              canSubmit = false;
            }
          }
        }
      }

      continue;
    }

    if (!canSubmit) return;

    const snackbarId = enqueueSnackbar(
      t('{name} creating', { name: data.name }),
      {
        variant: 'loading',
      }
    );

    setSnackbarId(snackbarId);

    accountSellProductCreate.mutate({
      ...data,
      price: convertToMungu(data.price),
    });
  }

  function onProfileImageSelect() {
    if (profileImageRef.current) {
      profileImageRef.current.click();
    }
  }

  async function onProfileImage(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (files?.length) {
      const formData = new FormData();

      for (var i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
      }

      try {
        const response = await fetch('/api/upload/product-image', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const data: { imageURLs: string[] } = await response.json();

          for (const imageURL of data.imageURLs) {
            append({
              imageURL,
              isFront: false,
            });
          }
        }
      } catch (error) {}
    }
  }

  function onCategorySlugs(categorySlugs: string[]) {
    setCategorySlugs(categorySlugs);
  }

  function onCategorySlug(categorySlugs: string[]) {
    setCategorySlugs(categorySlugs);
    setValue('categorySlug', '');
  }

  function onChooseProduct() {
    setSelectDialog({
      open: true,
    });
  }

  function onSelectBuyProduct(buyProductId: string) {
    const barterProducts = watch('barterProducts');

    if (barterProducts.includes(buyProductId)) return;

    setValue('barterProducts', [...barterProducts, buyProductId]);
  }

  return (
    <>
      <Grid
        container
        component={'form'}
        spacing={4}
        alignItems={'center'}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid item xs={12}>
          <Typography variant='h6' gutterBottom>
            {t('Create sell product')}
          </Typography>
        </Grid>
        {!watch('categorySlug') ? (
          <Fragment>
            <Grid item xs={12}>
              <Typography variant='button'>
                {t('Select product category')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <AccountSellProductCreateSelectCategory
                categorySlugs={categorySlugs}
                onCategorySlugs={onCategorySlugs}
              />
            </Grid>
          </Fragment>
        ) : (
          <Fragment>
            <GridItem>
              <GridLabel required>{t('Product category')}</GridLabel>
              <GridOption>
                <AccountSellProductCreateCategoriesBreadcrumb
                  categorySlugs={categorySlugs}
                  onCategorySlug={onCategorySlug}
                />
              </GridOption>
            </GridItem>
            <GridDivider />
            <GridTitle>{t('General')}</GridTitle>
            <GridItem>
              <GridLabel required>{t('Name')}</GridLabel>
              <GridOption>
                <Controller
                  control={control}
                  name='name'
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      error={!!fieldState.error?.message}
                      helperText={fieldState.error?.message}
                      onChange={e => {
                        setValue(
                          'slug',
                          slug(e.target.value, { extended: true })
                        );

                        field.onChange(e);
                      }}
                    />
                  )}
                />
              </GridOption>
            </GridItem>
            <GridItem>
              <GridLabel>{t('Description')}</GridLabel>
              <GridOption>
                <Controller
                  control={control}
                  name='description'
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      error={!!fieldState.error?.message}
                      helperText={fieldState.error?.message}
                      multiline
                      rows={5}
                    />
                  )}
                />
              </GridOption>
            </GridItem>
            <GridItem>
              <GridLabel required>{t('Product images')}</GridLabel>
              <GridOption>
                <Stack
                  spacing={{ xs: 1, sm: 2 }}
                  direction='row'
                  useFlexGap
                  flexWrap='wrap'
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  {fields.map((field, index) => (
                    <Badge
                      key={index}
                      overlap='circular'
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      badgeContent={
                        <Fragment>
                          <IconButton onClick={() => remove(index)}>
                            <DeleteIcon color='primary' fontSize='small' />
                          </IconButton>
                        </Fragment>
                      }
                    >
                      <Avatar
                        sx={{
                          width: 177,
                          height: 177,
                          // bgcolor: 'info.main',
                          // filter: 'blur(px)',
                        }}
                        variant='rounded'
                        src={field.imageURL || undefined}
                      />
                    </Badge>
                  ))}
                  <Avatar
                    sx={{
                      width: 177,
                      height: 177,
                      cursor: 'pointer',
                    }}
                    variant='rounded'
                    onClick={onProfileImageSelect}
                  >
                    <input
                      ref={profileImageRef}
                      type='file'
                      accept='image/*'
                      onChange={onProfileImage}
                      hidden
                      multiple
                    />
                    <AddAPhotoIcon fontSize='large' />
                  </Avatar>
                </Stack>
                <Controller
                  control={control}
                  name='productImages'
                  render={({ fieldState }) => (
                    <FormHelperText error={!!fieldState.error?.message}>
                      {/** @ts-ignore */}
                      {t(fieldState.error?.message)}
                    </FormHelperText>
                  )}
                />
              </GridOption>
            </GridItem>
            <GridItem>
              <GridLabel required={!watch('isFree')}>{t('Price')}</GridLabel>
              <GridOption spacing={1}>
                {watch('isFree') === false && (
                  <Grid item xs={12}>
                    <Controller
                      control={control}
                      name='price'
                      render={({ field, fieldState }) => (
                        <TextField
                          error={!!fieldState.error?.message}
                          helperText={fieldState.error?.message}
                          InputProps={{
                            inputComponent: FormatAsCurrency as any,
                          }}
                          disabled={watch('isFree')}
                          {...field}
                        />
                      )}
                    />
                  </Grid>
                )}
                <Grid item xs={12}>
                  <FormGroup aria-label='position' row>
                    <Controller
                      control={control}
                      name='isPriceNegotiable'
                      render={({ field }) => (
                        <FormControlLabel
                          value='top'
                          control={
                            <Checkbox
                              {...field}
                              onChange={event => {
                                if (event.target.checked) {
                                  setValue('isFree', false);
                                }

                                field.onChange(event.target.checked);
                              }}
                              checked={field.value}
                            />
                          }
                          label={
                            <Typography variant='body2'>
                              {t('Negotiable')}
                            </Typography>
                          }
                        />
                      )}
                    />
                    <Controller
                      control={control}
                      name='isFree'
                      render={({ field }) => (
                        <FormControlLabel
                          value='top'
                          control={
                            <Checkbox
                              {...field}
                              onChange={event => {
                                if (event.target.checked) {
                                  setValue('isPriceNegotiable', false);
                                  setValue('price', 100);
                                }

                                field.onChange(event.target.checked);
                              }}
                              checked={field.value}
                            />
                          }
                          label={
                            <Typography variant='body2'>{t('Free')}</Typography>
                          }
                        />
                      )}
                    />
                  </FormGroup>
                </Grid>
              </GridOption>
            </GridItem>
            <GridDivider />
            <Controller
              control={control}
              name='availability'
              render={({ field, fieldState }) => (
                <GridItem>
                  <GridLabel required>{t('Product availability')}</GridLabel>
                  <GridOption container spacing={2}>
                    {productAvailabilities.map(option => (
                      <ProductFootnoteOption
                        key={option}
                        selected={field.value === option}
                        onClick={() => field.onChange(option)}
                      >
                        {t(option)}
                      </ProductFootnoteOption>
                    ))}
                    <GridOption xs={12}>
                      <FormHelperText error={!!fieldState.error?.message}>
                        {/** @ts-ignore */}
                        {t(fieldState.error?.message)}
                      </FormHelperText>
                    </GridOption>
                  </GridOption>
                </GridItem>
              )}
            />
            <Controller
              control={control}
              name='condition'
              render={({ field, fieldState }) => (
                <GridItem>
                  <GridLabel required>{t('Product condition')}</GridLabel>
                  <GridOption container spacing={2}>
                    {productConditions.map(option => (
                      <ProductFootnoteOption
                        key={option}
                        selected={field.value === option}
                        onClick={() => field.onChange(option)}
                      >
                        {t(option)}
                      </ProductFootnoteOption>
                    ))}
                    <GridOption xs={12}>
                      <FormHelperText error={!!fieldState.error?.message}>
                        {/** @ts-ignore */}
                        {t(fieldState.error?.message)}
                      </FormHelperText>
                    </GridOption>
                  </GridOption>
                </GridItem>
              )}
            />
            <Controller
              control={control}
              name='deliveryOption'
              render={({ field, fieldState }) => (
                <GridItem>
                  <GridLabel required>{t('Product delivery option')}</GridLabel>
                  <GridOption container spacing={2}>
                    {productDeliveryOptions.map(option => (
                      <ProductFootnoteOption
                        key={option}
                        selected={field.value === option}
                        onClick={() => field.onChange(option)}
                      >
                        {t(option)}
                      </ProductFootnoteOption>
                    ))}
                    <GridOption xs={12}>
                      <FormHelperText error={!!fieldState.error?.message}>
                        {/** @ts-ignore */}
                        {t(fieldState.error?.message)}
                      </FormHelperText>
                    </GridOption>
                  </GridOption>
                </GridItem>
              )}
            />
            <GridDivider />
            <GridItem>
              <GridLabel required>{t('Төлбөрийн нөхцөл')}</GridLabel>
              <GridOption spacing={2}>
                <Stack spacing={2}>
                  <Controller
                    control={control}
                    name='paymentType.cash'
                    render={({ field, fieldState }) => (
                      <TextField
                        label={t('Бэлэн мөнгө')}
                        type='number'
                        {...field}
                        error={!!fieldState.error?.message}
                        helperText={fieldState.error?.message}
                        InputProps={{ startAdornment: '%' }}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name='paymentType.loan'
                    render={({ field, fieldState }) => (
                      <TextField
                        label={t('Зээл')}
                        type='number'
                        {...field}
                        error={!!fieldState.error?.message}
                        helperText={fieldState.error?.message}
                        InputProps={{ startAdornment: '%' }}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name='paymentType.leasing'
                    render={({ field, fieldState }) => (
                      <TextField
                        label={t('Лизенг')}
                        type='number'
                        {...field}
                        error={!!fieldState.error?.message}
                        helperText={fieldState.error?.message}
                        InputProps={{ startAdornment: '%' }}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name='paymentType.barter'
                    render={({ field, fieldState }) => (
                      <TextField
                        label={t('Бартер')}
                        type='number'
                        {...field}
                        error={!!fieldState.error?.message}
                        helperText={fieldState.error?.message}
                        InputProps={{ startAdornment: '%' }}
                      />
                    )}
                  />

                  {watch('paymentType.barter') > 0 && (
                    <Button onClick={onChooseProduct}>
                      {t('Бараа сонгох')}
                    </Button>
                  )}

                  <Grid container spacing={2}>
                    {watch('barterProducts').map(product => (
                      <Grid item xs={6} key={product}>
                        <AccountBuyProductCard id={product} />
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              </GridOption>
            </GridItem>

            <GridDivider />
            {categoryAttributFields.map((field, index) => {
              const { name, isRequired } = field;

              return (
                <GridItem key={field.id}>
                  <GridLabel required={isRequired}>{name}</GridLabel>
                  <GridOption container spacing={2}>
                    <CategoryAttributeDisplay
                      control={control}
                      nestIndex={index}
                      attributeField={field}
                      setValue={setValue}
                    />
                  </GridOption>
                </GridItem>
              );
            })}
            <Grid item xs={12} sx={{ mb: 20 }}>
              <LoadingButton
                type='submit'
                loading={accountSellProductCreate.isLoading}
                startIcon={<AddIcon />}
                color='primary'
              >
                {t('Create product')}
              </LoadingButton>
            </Grid>
          </Fragment>
        )}
      </Grid>

      {optionDialog && <AccountSellProductCreateOptionDialog />}
      {selectDialog.open && (
        <AccountBuyProductsSelectDialog onSelect={onSelectBuyProduct} />
      )}
    </>
  );
}
