import { zodResolver } from '@hookform/resolvers/zod';
import {
  DefaultValues,
  FieldValues,
  UseFormProps,
  useForm,
} from 'react-hook-form';

export type UseZodForm<T extends FieldValues> = UseFormProps<T> & {
  schema: any;
  defaultValues: DefaultValues<T>;
};

export function useZodForm<T extends FieldValues>(props: UseZodForm<T>) {
  const { schema, defaultValues, ...rest } = props;

  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
    ...rest,
  });

  return form;
}
