'use client';

import {
  Avatar,
  Box,
  Button,
  Grid,
  MobileStepper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useI18n } from '@/lib/i18n/client';
import { trpc } from '@/lib/trpc/trpc';
import { ResourceLoading } from '@/lib/resource/components/ResourceLoading';
import { ResourceError } from '@/lib/resource/components/ResourceError';
import { ResourceEmpty } from '@/lib/resource/components/ResourceEmpty';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useState } from 'react';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { formatAsCurrency, convertToTugrug } from 'common';
import { HomeFrame } from '@/frames';
import { HomeSellProductBreadcrumb } from '@/breadcrumbs';
// import { HomeBuyProductCard } from '../../buy/card';
import {
  AccountSellProductSaveButton,
  AccountSellProductCommentButton,
} from '@/buttons';

export type HomeSellProductScreenProps = {
  productSlug: string;
};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export function HomeSellProductScreen(props: HomeSellProductScreenProps) {
  const theme = useTheme();
  const { productSlug } = props;
  const t = useI18n();
  const { isLoading, isError, error, data } =
    trpc.homeSellProductQuery.useQuery({
      slug: productSlug,
    });
  const [activeStep, setActiveStep] = useState(0);
  // const comments = trpc.home.sell.product.comment.comments.useQuery({
  //   sellProductSlug: productSlug,
  // });

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <HomeFrame>
      <Box sx={{ p: 2 }}>
        <HomeSellProductBreadcrumb productSlug={productSlug} />
      </Box>
      <Box sx={{ p: 2 }}>
        {isLoading ? (
          <ResourceLoading />
        ) : isError ? (
          <ResourceError error={error} />
        ) : !data || !data.result ? (
          <ResourceEmpty />
        ) : (
          <Box>
            <Grid container>
              <Grid item xs={12} md={6}>
                <AutoPlaySwipeableViews
                  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
                >
                  {data.images.map((image, index) => (
                    <div key={image.id}>
                      {Math.abs(activeStep - index) <= 2 ? (
                        <Avatar
                          variant='rounded'
                          sx={{ width: '100%', height: 450 }}
                          src={image.imageURL}
                        />
                      ) : null}
                    </div>
                  ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                  steps={data.images.length}
                  position='static'
                  activeStep={activeStep}
                  sx={{ border: 'none' }}
                  nextButton={
                    <Button
                      variant='text'
                      size='small'
                      onClick={handleNext}
                      disabled={activeStep === data.images.length - 1}
                    >
                      {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Button>
                  }
                  backButton={
                    <Button
                      variant='text'
                      size='small'
                      onClick={handleBack}
                      disabled={activeStep === 0}
                    >
                      {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                    </Button>
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack sx={{ p: 4 }} spacing={2}>
                  <Typography variant='h5' fontWeight={600}>
                    {data.result.name}
                  </Typography>
                  <Typography variant='button' fontSize={20} fontWeight={600}>
                    {formatAsCurrency(convertToTugrug(data.result.price))}
                  </Typography>
                  {data.result.isFree && <Typography>{t('Free')}</Typography>}
                </Stack>
                <Stack sx={{ px: 4 }} spacing={2}>
                  <Typography variant='body1'>Төлбөрийн нөхцөл</Typography>
                  {Number(data.result.cash) > 0 && (
                    <Typography variant='subtitle2' fontSize={20}>
                      {`Бэлэн мөнгө: ${data.result.cash}%`}
                    </Typography>
                  )}
                  {Number(data.result.loan) > 0 && (
                    <Typography variant='subtitle2' fontSize={20}>
                      {`Зээл: ${data.result.loan}%`}
                    </Typography>
                  )}
                  {Number(data.result.barter) > 0 && (
                    <Typography variant='subtitle2' fontSize={20}>
                      {`Бартер: ${data.result.barter}%`}
                    </Typography>
                  )}
                </Stack>
                <Stack sx={{ p: 4 }} direction={'row'} spacing={2}>
                  <AccountSellProductCommentButton
                    sellProductId={data.result.id}
                  />
                  <AccountSellProductSaveButton
                    sellProductId={data.result.id}
                  />
                </Stack>
              </Grid>
              {/* {data.barterProducts.length > 0 && (
                <Grid item xs={12} container spacing={2} sx={{ pt: 2 }}>
                  <Grid xs={12} item>
                    <Typography variant='button' fontWeight={600}>
                      {t('Бартер хийх боломжтой бараанууд')}
                    </Typography>
                  </Grid>
                  {data.barterProducts.map(barterProduct => {
                    if (!barterProduct.buyProduct) return <>bhgu</>;

                    return (
                      <Grid item xs={3} key={barterProduct.id}>
                        <HomeBuyProductCard
                          product={barterProduct.buyProduct}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              )} */}
              <Grid item xs={12} container spacing={2}>
                <Grid item xs={12}>
                  {/* {comments.data?.map((comment) => (
  <Box key={comment.}></Box>
))} */}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </HomeFrame>
  );
}
