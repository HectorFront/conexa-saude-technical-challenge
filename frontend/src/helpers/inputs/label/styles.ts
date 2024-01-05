/** @name Styled */
import styled from 'styled-components';
/** @name Mixins */
import { flex } from 'layout/mixins/styles';

export const Label = styled.label`
  ${flex({ wrap: 'no-wrap', direction: 'row', alignY: 'center', alignX: 'start' })}
`;