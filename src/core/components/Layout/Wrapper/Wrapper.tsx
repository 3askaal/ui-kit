import React from 'react'
import { Stylish } from '../../../utils'

export const SWrapper = Stylish('div', {
  display: 'flex',
  width: '100%',
  height: '100%',
  flexDirection: 'row',
  justifyContent: 'center',
})

export const Wrapper = (props: any) => {
  return <SWrapper sRef="Wrapper" {...props} />
}
