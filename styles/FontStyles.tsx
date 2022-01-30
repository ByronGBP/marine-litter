import { css } from 'styled-components'
import { mediaQuery } from '@/styles'

/***
 * 1rem mobile -> 15px
 * 1rem desktop -> 18px
 */
export const REM_MOBILE = 15
const REM_DESKTOP = 18
export const getRelativeREM = (value: number, factor: number) => `${value / factor}rem`

export const getP120 = () => {
  return css`
    font-size: ${getRelativeREM(60, REM_MOBILE)};
    font-weight: bold;
    line-height: ${getRelativeREM(65, REM_MOBILE)};
    letter-spacing: 0;

    ${mediaQuery.greaterThan('tablet')`
      font-size: ${getRelativeREM(120, REM_DESKTOP)};
      line-height: ${getRelativeREM(120, REM_DESKTOP)};
    `}
  `
}

export const getP120S = () => {
  return css`
    font-size: ${getRelativeREM(40, REM_MOBILE)};
    font-weight: bold;
    line-height: ${getRelativeREM(45, REM_MOBILE)};
    letter-spacing: 0;

    ${mediaQuery.greaterThan('tablet')`
      font-size: ${getRelativeREM(120, REM_DESKTOP)};
      line-height: ${getRelativeREM(120, REM_DESKTOP)};
    `}
  `
}

export const getP45 = () => {
  return css`
    font-size: ${getRelativeREM(11, REM_MOBILE)};
    font-weight: normal;
    line-height: ${getRelativeREM(17, REM_MOBILE)};
    letter-spacing: 0;

    ${mediaQuery.greaterThan('tablet')`
      font-size: ${getRelativeREM(45, REM_DESKTOP)};
      line-height: ${getRelativeREM(50, REM_DESKTOP)};
    `}
  `
}