import { overwriteDefaultTheme, withGlobalStyle, getRelative, hideScrollbar } from '.'

const themeProject = {
  colors: {
    black: '#031523',
    background: '#1A1818',
    white: '#FFFFFF',
    yellow: '#C8CE9E',
  },
  fonts: {
    family: `'Graphik', sans-serif`,
  },
  navbar_height: {
    desktop: 100,
    mobile: 60
  },
  easingPrinciple: 'cubic-bezier(.25, .1, .25, 1)'
}

export const theme = overwriteDefaultTheme(themeProject);

const extraGlobalCss = `
  body {
    position: relative;
    ${hideScrollbar()}
  }
`

export const Reset = withGlobalStyle(theme, extraGlobalCss)
