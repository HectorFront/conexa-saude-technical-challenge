/** @name Styled */
import styled from 'styled-components';
/** @name Keyframes */
import {rotate} from "layout/mixins/styles";

export const Loading = styled.span`
  animation: ${rotate} 2s linear infinite;
`;