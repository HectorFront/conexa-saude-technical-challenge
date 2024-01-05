/** @name Dependencies */
import styled from 'styled-components';
/** @name Mixins */
import {flex} from 'layout/mixins/styles';
/** @name External */
import Colors from 'layout/vars/colors';

export const Container = styled.div`
  height: 100%;
  transition: all .6s;
  ${flex({ direction: 'row', alignY: 'center', alignX: 'start' })}
`;

export const Form = styled.div`
  width: 100%;
  position: relative;
  padding: 25px 10px 10px 10px;
`;

export const FormTitle = styled.h1`
  color: ${Colors.DEFAULT};
  font-size: 2rem;
  text-align: center;
`;

export const FormFooter = styled.div`
  width: 100%;
  text-align: center;
  ${flex({ direction: 'column', alignY: 'center', alignX: 'center' })}
`;

export const Link = styled.span`
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
  color: ${Colors.DEFAULT};
  &:hover {
    opacity: .7;
    transition: .2s;
  }
`;