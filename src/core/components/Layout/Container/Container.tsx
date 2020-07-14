import React from 'react'
import { Stylish } from '../../../utils'

export const SContainer = Stylish('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  width: '100%',
  maxWidth: '800px',
})

export const Container = (props: any) => {
  return <SContainer sRef="Container" {...props} />
}
