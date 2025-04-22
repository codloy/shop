'use client';

import { useAtom } from 'jotai';
import { Button, Dialog, DialogContent, TextField } from '@mui/material';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { accountSellProductCreateOptionAddAtom } from 'atoms';
import { AccountSellProductCreateOptionAddDialog } from './add/dialog';
import { FormatAsCurrency } from '@/lib/numberFormat/components/FormatAsCurrency';
import { useI18n } from '@/lib/i18n/client';
import { accountSellProductCreateOptionAtom } from 'atoms';
import { AccountSellProductCreateOptionSchema } from 'schemas';

export function AccountSellProductCreateOptionDialog() {
  const t = useI18n();
  const [dialog, setDialog] = useAtom(accountSellProductCreateOptionAtom);
  const { control } = useForm<AccountSellProductCreateOptionSchema>({
    defaultValues: {
      options: [],
    },
  });
  const { append, fields } = useFieldArray({
    control,
    name: 'options',
  });
  const [addDialog, setAddDialog] = useAtom(
    accountSellProductCreateOptionAddAtom
  );

  function onClose() {
    setDialog(false);
  }

  function onAdd() {
    setAddDialog(true);
  }

  return (
    <Dialog open={dialog} onClose={onClose}>
      <DialogContent>
        {fields.map((field, index) => {
          if (field.type === 'Cash') {
            return (
              <Controller
                key={field.id}
                control={control}
                name={`options.${index}.value`}
                render={({ field, fieldState }) => (
                  <TextField
                    placeholder={t('Money')}
                    error={!!fieldState.error?.message}
                    helperText={fieldState.error?.message}
                    InputProps={{
                      inputComponent: FormatAsCurrency as any,
                    }}
                    {...field}
                  />
                )}
              />
            );
          }
          return <div key={field.id}>asd</div>;
        })}

        <Button onClick={onAdd}>Add</Button>
      </DialogContent>

      {addDialog && (
        <AccountSellProductCreateOptionAddDialog
          onOption={option =>
            append({
              type: option,
              productId: '',
              value: '',
            })
          }
        />
      )}
    </Dialog>
  );
}
