import React, { ReactElement, FC } from 'react'
import { Stylish } from '../../utils'

export const SLink = Stylish('a', {
  textDecoration: 'underline',
  color: 'primary',

  '@media (hover: hover)': {
    ':hover': {
      color: 'primaryDark',
    },
  },
})

export const Link: FC<any> = ({ to, style, ...props }: any): ReactElement => {
  return <SLink sRef="Link" href={to} {...props} {...style} />
}
