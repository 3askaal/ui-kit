import React from 'react'
import { Stylish } from '../../utils'

export const SLabel = Stylish(
  'div',
  {
    display: 'flex',
    paddingY: 'xxs',
    paddingX: 'xs',
    color: 'white',
    alignItems: 'center',
    backgroundColor: 'primary',
    border: 'main',
    borderColor: 'primary',
    borderRadius: 'm',
    fontSize: 's',
  },
  {
    isSecondary: {
      backgroundColor: 'secondary',
      borderColor: 'secondary',
    },
    isOutline: {
      color: 'primary',
      backgroundColor: 'transparent',
    },
  },
)

export const Label = ({ style, ...props }: any) => (
  <SLabel {...style} {...props} />
)
