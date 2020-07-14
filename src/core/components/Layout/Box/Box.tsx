import React from 'react'
import { Stylish } from '../../../utils'

export const SBox: any = Stylish('div')

export const Box = (props: any) => {
  return <SBox sRef="Box" {...props} />
}
