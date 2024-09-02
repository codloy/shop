import { forwardRef } from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  value: string;
}

export const FormatAsCurrency = forwardRef<NumericFormatProps, CustomProps>(
  function FormatAsCurrency(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        value={other.value ? other.value : ''}
        getInputRef={ref}
        onValueChange={values => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
        prefix='₮ '
        decimalScale={2}
        allowLeadingZeros={false}
        allowNegative={false}
        fixedDecimalScale={true}
      />
    );
  }
);
