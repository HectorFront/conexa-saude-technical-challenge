/** @name Styled */
import styled from "styled-components";
/** @name Mixins */
import {flex} from "layout/mixins/styles";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  ${flex({ direction: 'row', alignY: 'center', alignX: 'center' })}
`;