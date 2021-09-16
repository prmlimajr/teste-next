import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
}

export function Button({ primary, icon: Icon, children, ...rest }: IButtonProps) {
  return (
    <Container
      style={primary
        ? { backgroundColor: "#26E271" }
        : { backgroundColor: "#3F71F0" }}
      {...rest}
    >
      {Icon && <Icon size={20} />}
      {children}
    </Container>
  );
}

Button.defaultProps = {
  primary: false,
  icon: null
};