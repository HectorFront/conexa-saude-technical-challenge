/** @name Dependencies */
import styled from 'styled-components';
/** @name Mixins */
import {flex} from 'layout/mixins/styles';
/** @name External */
import Colors from 'layout/vars/colors';

const BREAKPOINT_TABLET = 800;

export const Container = styled.div`
  width: 100%;
  padding: 70px 50px;
  transition: all .6s;
  ${flex({ direction: 'column', alignY: 'start', alignX: 'start' })};
  @media(max-width: ${BREAKPOINT_TABLET}px) {
    padding: 50px 10px !important;
  }
`;

export const Title = styled.h1`
  color: ${Colors.DEFAULT};
  font-size: 4rem;
  text-align: start;
`;