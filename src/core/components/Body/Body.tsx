import React from 'react'
import { styled } from '../../utils'

export const SBody = styled.div({
  display: 'flex',
  flexDirection: 'column',

  '> *': {
    lineHeight: 1.6,
  },

  ul: {
    listStyle: 'disc',
    listStylePosition: 'inside',
  },

  a: {
    color: 'primary',

    '&:hover': {
      color: 'primaryDark',
    },
  },

  '> * + *': {
    marginTop: 'm',
  },
})

export const Body = ({ ...props }: any) => <SBody sRef="Body" {...props} />
