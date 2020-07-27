import React from 'react'
import { styled } from '../../../utils'

export const SWrapper = styled.div({
  display: 'flex',
  width: '100%',
  height: '100%',
  flexDirection: 'row',
  justifyContent: 'center',
  padding: 'm',
})

export const Wrapper = (props: any) => {
  return <SWrapper sRef="Wrapper" {...props} />
}
