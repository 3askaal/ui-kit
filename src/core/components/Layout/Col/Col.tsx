import React from 'react'
import { styled } from '../../../utils'

export const SCol = styled.div(({ width }: any) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',

  ...(width && {
    flexGrow: 0,
    flexBasis: `${width}%`,
    flexShrink: 0,
  }),
}))

export const Col = (props: any) => {
  return <SCol sRef="Col" {...props} />
}
