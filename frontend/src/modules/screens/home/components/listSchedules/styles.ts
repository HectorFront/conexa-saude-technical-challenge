/** @name Styled */
import styled from "styled-components";
/** @name External */
import {flex} from "layout/mixins/styles";

export const ContainerNewConsult = styled.div`
  width: 100%;
  padding-right: 50px;
  ${flex({ wrap: 'nowrap', direction: 'row', alignY: 'center', alignX: 'space-between' })}
`;