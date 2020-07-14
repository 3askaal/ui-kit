import { mix } from 'chroma-js'
import { darken, brighten } from '../utils'

interface Colors {
  [variant: string]: string
}

const white: string = darken('white', 0.2)
const black: string = brighten('black', 1)

const primary: string = '#3e64ff'
const primaryDark: string = darken(primary, 0.4)

const secondary: string = '#7c73e6'
const secondaryDark: string = darken(secondary, 0.4)

const greys: any = {
  grey10: darken('white', 1),
  grey20: darken('white', 2),
  grey30: darken('white', 3),
  grey40: darken('white', 4),
  grey50: darken('white', 5),
  grey60: darken('white', 6),
  grey70: darken('white', 7),
  grey80: darken('white', 8),
  grey90: darken('white', 9),
}

export const colors: Colors = {
  white,
  black,
  ...greys,
  primary,
  primaryDark,
  secondary,
  secondaryDark,
  code: '#eee',
  positive: mix('green', primary, 0.1),
  negative: mix('red', primary, 0.1),
}
