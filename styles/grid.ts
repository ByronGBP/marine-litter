import { css } from 'styled-components'
import { mediaQuery } from './'

export const defaultGridOptions = {
  mobile: {
    columns: 12,
    columnWidth: 34,
    gutterWidth: 0,
    maxWidth: 414,
  },
  desktop: {
    columns: 12,
    columnWidth: 120,
    gutterWidth: 0,
    maxWidth: 1440
  }
}

const defaultRowOptions = {
  mobile: { rows: 'auto-flow', gutter: 0},
  desktop: { rows: 'auto-flow', gutter: 0},
}

//@ts-ignore
export const createGrid = ({ columns, rows } = {}) => {
  const { mobile, desktop } = columns ? columns : defaultGridOptions
  const _rows = rows ? rows : defaultRowOptions

  return css`
    display: grid;
    width: 100%;
    grid: ${_rows.mobile.rows} / repeat(${mobile.columns}, ${getRelative(mobile.columnWidth, 'mobile', true)});
    column-gap: ${getRelative(mobile.gutterWidth, 'mobile', true)};
    row-gap: ${getRelative(_rows.mobile.gutter, 'mobile', true)};
    justify-content: center;

    ${mediaQuery.greaterThan('tablet')`
      grid: ${_rows.desktop.rows} / repeat(${desktop.columns}, ${getRelative(desktop.columnWidth, 'desktop', true)});
      column-gap:${getRelative(desktop.gutterWidth, 'desktop', true)};
      row-gap:${getRelative(_rows.desktop.gutter, 'desktop', true)};
    `}
  `
}

const getRelativeCreator = (mobileValue: number, desktopValue: number) => {
  const VALUES = {
    'mobile': mobileValue,
    'desktop': desktopValue
  }

  return (from: number, type: 'mobile' | 'desktop', custom = false) => {
  return `${(from / VALUES[type]) * 100}${custom ? '%' : 'vw'}`
}}

export const getRawRelative = (from: number, to: number) => {
  return `${(from / to) * 100}`
}

export const getRelative = getRelativeCreator(defaultGridOptions.mobile.maxWidth, defaultGridOptions.desktop.maxWidth)
