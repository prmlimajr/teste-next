import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import {
  Container,
  Span,
  InputContainer,
  TextInput
} from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export function Input({ label, icon: Icon, ...rest }: IInputProps) {
  return (
    <Container>
      <Span>{label}</Span>
      <InputContainer>
        {Icon && <Icon size={20} />}
        <TextInput {...rest} />
      </InputContainer>
    </Container>
  );
}

Input.defaultProps = {
  icon: null
};