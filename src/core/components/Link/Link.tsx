import React, { ReactElement, FC } from 'react'
import { styled } from '../../utils'

export const SLink = styled.a({
  textDecoration: 'underline',
  color: 'primary',

  '@media (hover: hover)': {
    ':hover': {
      color: 'primaryDark',
    },
  },
})

export const Link: FC<any> = ({ to, ...props }: any): ReactElement => {
  return <SLink sRef="Link" href={to || '#'} {...props} />
}
