import styled from "styled-components";
import {hideDisplay} from "layout/mixins/styles";

const BREAKPOINT_TABLET = 800;

export const ContainerHelp = styled.div`
  ${hideDisplay(BREAKPOINT_TABLET)}
`;