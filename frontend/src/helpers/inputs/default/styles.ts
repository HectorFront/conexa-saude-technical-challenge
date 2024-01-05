/** @name Styled */
import styled from 'styled-components';
/** @name External */
import Colors from 'layout/vars/colors';

export const Default = styled.input`
  color: #5e5e5e;
  border: 1px solid ${Colors.DEFAULT};
  &:focus {
    color: #5e5e5e;
    border-color: ${Colors.DARK};
    box-shadow: 0 0 5px 0 ${Colors.DEFAULT};
  }
  &::placeholder {
    color: #a0a0a0;
    font-size: 16px;
    padding-left: 8px;
  }
`;

export const Invalid = styled.div.attrs(_ => ({
    className: 'invalid-feedback',
}))``;