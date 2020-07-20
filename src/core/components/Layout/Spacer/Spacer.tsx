import React from 'react'
import { styled } from '../../../utils'

export const SSpacer = styled.div(
  ({ theme, size = 'm', style: { flexDirection = 'column' } = {} }: any) => ({
    display: 'flex',
    width: '100%',
    flexDirection,

    '> *': {
      ...(flexDirection === 'column' && {
        marginBottom: theme.space[size],

        ':last-child': {
          marginBottom: 0,
        },
      }),

      ...(flexDirection === 'row' && {
        marginRight: theme.space[size],

        ':last-child': {
          marginRight: 0,
        },
      }),
    },
  }),
)

export const Spacer = (props: any) => {
  return <SSpacer sRef="Spacer" {...props} />
}
