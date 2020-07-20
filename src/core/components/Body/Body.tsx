import React from 'react'
import { styled } from '../../utils'

export const SBody = styled.div({
  'p, li': {
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

  'span + span': {
    marginLeft: 'xxs',
  },
})

export const Body = ({ ...props }: any) => <SBody sRef="Body" {...props} />
