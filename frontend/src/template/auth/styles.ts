/** @name Styled */
import styled from 'styled-components';
/** @name External */
import Colors from 'layout/vars/colors';
/** @name Mixins */
import {hideDisplay} from "layout/mixins/styles";
/** @name Images */
import ImgLogin from 'assets/svg/login.svg';

const BREAKPOINT_HD = 1199;

export const Logo = styled.img`
  top: 50px;
  width: 300px;
  height: auto;
  right: 50px;
  padding: 10px;
  position: absolute;
`;

export const ContainerAuth = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: white;
  background-repeat: no-repeat;
  background-size: 150% 100%;
  background-image: url(${ImgLogin});
  
  @media(max-width: ${BREAKPOINT_HD}px) {
    background-image: none;
  }
`;

export const Border = styled.div`
  left: -10%;
  height: 100%;
  display: block;
  position: absolute;
  width: calc(100% / 2);
  transform: skew(-20deg);
  background-color: ${Colors.DARK};
  ${hideDisplay(BREAKPOINT_HD)}
`;