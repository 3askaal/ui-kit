import React from 'react'
import { Stylish } from '../../../utils'

export const SSpacer = Stylish(
  'div',
  ({ theme, size = 'm', flexDirection = 'column' }: any) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',

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
