import React from 'react'
import { Stylish } from '../../../utils'
import { SCol } from '..'

export const SRow = Stylish('div', ({ theme, gutter = 'm' }: any) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  width: gutter && `calc(100% + ${theme.space[gutter]})`,
  marginLeft: gutter && `calc(-${theme.space[gutter]} / 2)`,
  marginRight: gutter && `calc(-${theme.space[gutter]} / 2)`,

  [SCol]: {
    paddingLeft: gutter && `calc(${theme.space[gutter]} / 2)`,
    paddingRight: gutter && `calc(${theme.space[gutter]} / 2)`,
    marginBottom: gutter && `calc(${theme.space[gutter]})`,
  },
}))

export const Row = (props: any) => {
  return <SRow sRef="Row" {...props} />
}
