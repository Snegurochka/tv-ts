import React, { InputHTMLAttributes } from 'react';
import { FormInputLabel, InputWrapper, Group } from './Input.styles';

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & { value: string, label: string  };

const Input: React.FC<FormInputProps> = ({ label, name, value, type = 'text', ...otherParams }) => {
    return (
        <Group>
            <InputWrapper
                type={type}
                value={value}
                name={name}
                {...otherParams}
            />
            {label && (
                    <FormInputLabel shrink={Boolean(value.length)}>
                    {label}
                  </FormInputLabel>
            )}

        </Group>
    )
}

export default Input