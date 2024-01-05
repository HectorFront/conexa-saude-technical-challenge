/** @name Styled */
import styled from 'styled-components';
/** @name Mixins */
import {flex, hideDisplay} from 'layout/mixins/styles';

const BREAKPOINT_TABLET = 800;

export const Header = styled.header`
  width: 100%;
  height: auto;
  min-height: 90px;
  padding: 15px 30px;
  background-color: white;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.05);
  ${flex({ wrap: 'nowrap', direction: 'row', alignY: 'center', alignX: 'space-between' })}
`;

export const Logo = styled.img`
  width: 200px;
  height: auto;
  @media(max-width: ${BREAKPOINT_TABLET}px) {
    width: 140px;
  }
`;

export const ContainerNav = styled.nav`
  width: auto;
  ${flex({ wrap: 'nowrap', direction: 'row', alignY: 'center', alignX: 'space-between' })}
`;

export const Username = styled.span`
  color: dimgray;
  font-size: 1.5em;
  ${hideDisplay(BREAKPOINT_TABLET)}
`;