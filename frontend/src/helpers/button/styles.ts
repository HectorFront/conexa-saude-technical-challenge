/** @name Styled */
import styled from 'styled-components';
/** @name Mixins */
import {flex, toggleColors} from "layout/mixins/styles";

import { ButtonCustomProps } from "./styles.interfaces";

export const ButtonCustom = styled.button<ButtonCustomProps>`
  height: 50px;
  padding: 0 40px;
  font-size: 15px;
  border-radius: 8px;
  ${flex({ wrap: 'no-wrap', direction: 'row', alignY: 'center', alignX: 'space-around' })}
  ${props => props.outline
      ? `
         color: ${toggleColors(props.secondary)};
         border: 3px solid ${toggleColors(props.secondary)};
        ` 
      : 'border: 0;'
  };
  background-color: ${props => props.outline 
      ? 'white' 
      : toggleColors(props.secondary)
  };
`;