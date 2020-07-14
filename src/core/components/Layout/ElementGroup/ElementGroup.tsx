import React from 'react'
import { Stylish } from '../../../utils'

export const SElementGroup = Stylish('div', {
  display: 'flex',
  flexDirection: 'row',

  '> *': {
    borderRadius: 0,

    ':first-child': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },

    ':last-child': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },

    ':not(:first-child):not(:last-child)': {
      borderRadius: 0,
    },

    ':not(:last-child)': {
      borderRight: 0,
    },
  },
})

export const ElementGroup = (props: any) => {
  return <SElementGroup sRef="ElementGroup" {...props} />
}
