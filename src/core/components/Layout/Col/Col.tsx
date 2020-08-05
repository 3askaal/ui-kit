import React from 'react'
import { styled } from '../../../utils'

export const SCol = styled.div(({ width }: any) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  overflow: 'hidden',
  flexShrink: 1,
  flexBasis: width,
}))

export const Col = (props: any) => {
  return <SCol sRef="Col" {...props} />
}
