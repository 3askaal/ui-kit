import React from 'react'
import { styled } from '../../../utils'

export const SSpacer = styled.div(
  ({ theme, size = 'm', s: { flexDirection = 'column' } = {} }: any) => ({
    display: 'flex',
    width: '100%',
    flexDirection,

    '> * + *': {
      ...(flexDirection === 'column' && {
        marginTop: theme.space[size],
      }),

      ...(flexDirection === 'row' && {
        marginLeft: theme.space[size],
      }),
    },
  }),
)

export const Spacer = (props: any) => {
  return <SSpacer sRef="Spacer" {...props} />
}
