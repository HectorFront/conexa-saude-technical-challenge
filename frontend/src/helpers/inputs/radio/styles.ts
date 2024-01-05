/** @name Styled */
import styled from 'styled-components';
/** @name External */
import {toggleColors} from "layout/mixins/styles";

import * as Interface from "./styles.interfaces";

export const Radio = styled.input<Interface.RadioProps>`
  cursor: pointer;
  &:checked {
    border-color: ${props => toggleColors(props.secondary)};
    background-color: ${props => toggleColors(props.secondary)};
  }
  &:focus {
    box-shadow: none;
  }
`;