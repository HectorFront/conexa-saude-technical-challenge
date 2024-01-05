/** @name Dependencies */
import styled from "styled-components";
/** @name Mixins */
import {flex} from "layout/mixins/styles";
/** @name External */
import Colors from "layout/vars/colors";

export const ContainerSchedules = styled.div`
  width: 100%;
  position: relative;
  ${flex({ direction: 'column', alignY: 'center', alignX: 'start' })}
`;

export const CountList = styled.span`
  color: #262626;
  font-size: 1.4rem;
`;

export const NumberCount = styled.strong`
  font-size: 40px;
  color: ${Colors.SECONDARY};
`;

export const ContainerList = styled.div`
  height: 600px;
  border-radius: 7px;
  border: 2px solid #e5e5e5;
`;