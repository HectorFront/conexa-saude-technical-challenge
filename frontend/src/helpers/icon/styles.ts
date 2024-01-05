/** @name Styled */
import styled from 'styled-components';

import * as Interface from "./styles.interfaces";

export const Icon = styled.span<Interface.IconProps>`
  cursor: ${props => (props.hasHover || props.pointer) ? 'pointer' : 'default' } !important;
  &:hover {
      opacity: ${props => props.hasHover ? '.6' : '1' };
  }
`;