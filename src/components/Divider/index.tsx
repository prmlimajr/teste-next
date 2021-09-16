import React from 'react';

import {
  DividerContainer,
  DividerLine,
  DividerText,
} from './styles';

export function Divider() {
  return (
    <DividerContainer>
      <DividerLine />
      <DividerText>ou entre com o seu nome</DividerText>
      <DividerLine />
    </DividerContainer>
  );
}
