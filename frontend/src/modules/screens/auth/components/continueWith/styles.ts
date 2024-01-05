/** @name Dependencies */
import styled from 'styled-components';
/** @name Mixins */
import {flex} from 'layout/mixins/styles';
/** @name External */
import Colors from "layout/vars/colors";

import * as Interface from "./styles.interfaces";

export const Button = styled.div<Interface.ContainerProps>`
  cursor: pointer;
  padding: 15px 0;
  border-radius: 9px;
  background-color: ${props => props.isFacebook ? Colors.BG_FACEBOOK : 'white'};
  ${flex({ wrap: 'nowrap', direction: 'row', alignY: 'center', alignX: 'center' })}
  &:hover {
    opacity: .8;
    transition: all .1s;
  }
`;

export const Text = styled.span<Interface.TextProps>`
  margin: 0 30px;
  color: ${props => props.isFacebook ? 'white' : '#4e4e4e'}
`;