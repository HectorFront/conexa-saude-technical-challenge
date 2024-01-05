/** @name Styled */
import styled from 'styled-components';
/** @name External */
import Colors from 'layout/vars/colors';

export const VisibilityPassword = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.DARK};
  border: 1px solid ${Colors.DEFAULT};
  border-left: 0;
  &:hover {
    opacity: .7;
    color: ${Colors.DEFAULT};
  }
  &:focus {
    border-color: ${Colors.DARK};
    box-shadow:  0 0 5px 0 ${Colors.DEFAULT};
  }
`;