import React from 'react'
import { styled } from '../../../utils'

export const SBox: any = styled.div()

export const Box = (props: any) => {
  return <SBox sRef="Box" {...props} />
}
