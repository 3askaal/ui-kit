import React from 'react'
import { styled } from '../../../utils'

export const SCol = styled.div(({ width }: any) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: width ? 0 : 1,
  flexBasis: width ? `${width}%` : 0,

  ...(width && {
    flexShrink: 0,
  }),
}))

export const Col = (props: any) => {
  return <SCol sRef="Col" {...props} />
}
