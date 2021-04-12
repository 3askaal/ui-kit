import { createGlobalStyle } from 'styled-components'

export const GlobalStyle: any = createGlobalStyle<any>(({ theme }) => {
  const rootFontSizeStyling: any = {
    fontSize: theme.rootFontSizes[0],
  }

  theme.breakpoints.forEach((bp: any, index: number) => {
    rootFontSizeStyling[`@media (min-width: ${bp})`] = {
      fontSize: theme.rootFontSizes[index + 1],
    }
  })

  return {
    '*': {
      boxSizing: 'border-box',
    },

    html: {
      display: 'flex',
      width: '100%',
      minHeight: '100%',
      ...rootFontSizeStyling,
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      'scroll-behavior': 'smooth'
    },

    body: {
      display: 'flex',
      width: '100%',
    },

    'body > div': {
      display: 'flex',
      width: '100%',
    },

    a: {
      color: 'inherit',
    },

    svg: {
      display: 'block'
    }
  }
})
