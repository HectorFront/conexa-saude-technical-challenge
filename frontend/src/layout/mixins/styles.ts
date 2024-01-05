/**
 * @author Hector Rodrigues da Silva
 */

/** @name Styles */
import {keyframes} from "styled-components";
/** @name External */
import Colors from "layout/vars/colors";

type flexProps = {
    wrap: string,
    direction: string,
    alignY: string,
    alignX: string
}

/**
 *
 * @param wrap
 * @param direction
 * @param alignY
 * @param alignX
 */
export const flex: Function = ({wrap = 'no-wrap', direction = 'row', alignY = 'start', alignX = 'start'}: flexProps): string => `
  display: flex;
  position: relative;
  flex-wrap: ${wrap};
  align-items: ${alignY};
  flex-direction: ${direction};
  justify-content: ${alignX};
`;

/**
 *
 */
export const rotate = () => keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

/**
 *
 */
export const textEllipsis = () => `
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

/**
 *
 * @param breakpoint
 */
export const hideDisplay = (breakpoint) => `
  @media(max-width: ${breakpoint}px) {
    display: none;
  }
`;

/**
 *
 * @param isSecondary
 */
export const toggleColors = isSecondary =>
    isSecondary ? Colors.SECONDARY : Colors.DEFAULT;