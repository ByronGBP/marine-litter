import { css } from 'styled-components'
import { mediaQuery, getRelative } from './'
/**
 * Creates an animated underline
 *
 * @remarks
 * Used with styled-component:
 * ```tsx
 * import styled from 'styled-components'
 *
 * const Article = styled.article`
 *  a {
 *    ${createUnderline()}
 *  }
 * `
 * ```
 * @remarks
 * The component must have an <span/> element as a child
 * ```tsx
 * const Card = () => (
 *  <Article>
 *   <a href='https://klk.com'>Go 😎<span/></a>
 *  </Article>
 * )
 * ```
  * @remarks
  * Adding the className "active" triggers the active animation
  * ```tsx
  * const Card = ({ isActive }) => (
  *   <Article>
  *     <a className={isActive ? 'active' : ''} href='https://klk.com'>Go 😎<span/></a>
  *   </Article>
  * )
  * ```
*/
export const createUnderline = ({ height = 1, reverse = false, color = 'black'} = {}) => css`
  position: relative;

  span {
    position: absolute;
    bottom: 0;
    height: ${height}px;
    width: 0;
    background-color: ${({ theme }) => color !== 'black' ? color : theme.colors.black};
    left: unset;
    right: 0;
    transition: width 300ms ease, left 300ms ease, right 300ms ease;
  }

  ${reverse && `
    span {
      left: 0;
      right: unset;
      width: 100%;
    }
  `}

  &:hover,
  &.active {
    ${reverse ? `
      span {
        left: unset;
        right: 0;
        width: 0;
      }` : `
      span {
        left: 0;
        right: unset;
        width: 100%;
      }`
    }
  }
`

export const createTooltip = ({ color = '#F6A300' }) => css`

&:before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 100%;
    width: 0;
    height: 0;
    border: ${getRelative(9, 'mobile')} solid transparent;
    border-bottom-color: ${color};

    ${mediaQuery.greaterThan('tablet')`
      border: ${getRelative(9, 'desktop')} solid transparent;
      border-bottom-color: ${color};
    `}
}

&:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 100%;
    width: 0;
    height: 0;
    border: ${getRelative(4, 'mobile')} solid transparent;
    border-bottom-color: ${color};

    ${mediaQuery.greaterThan('tablet')`
      border: ${getRelative(4, 'desktop')} solid transparent;
      border-bottom-color: ${color};
    `}
}
`

export const hideScrollbar = () => css`
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */

  &::-webkit-scrollbar {
    background-color: rgba(0, 0, 0, 0);
    display: none;
  }
`

export const getTransition = (duration = .3) => ({
  duration,
  type: 'tween',
  ease: [.25, .1, .25, 1]
})

export function hex2Rgba (hex: string, alpha: number) {
  const r = parseInt(hex.substring(1, 3), 16)
  const g = parseInt(hex.substring(3, 5), 16)
  const b = parseInt(hex.substring(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export const getOverlayStyles = () => css`
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  opacity: 0;
  background-color: rgba(0,0,0,0);
  user-select: none;
  pointer-events: none;
  transition: opacity 300ms ${({ theme }) => theme.ease};
  z-index: 1000;

  &.active {
    pointer-events: initial;
    user-select: initial;
  }
`