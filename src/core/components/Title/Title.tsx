import React from 'react'
import { styled } from '../../utils'

const TitleSizes: { [key: string]: string } = {
  1: '3em',
  2: '2.5em',
  3: '2em',
  4: '1.5em',
  5: '1.25em',
  6: '1.125em',
}

const STitle = styled.h1(({ theme, level }: any) => ({
  fontFamily: theme.fonts.title || 'inherit',
  fontWeight: 'bold',
  fontSize: TitleSizes[level],
  lineHeight: 1.4,
}))

export const Title = ({ level = 3, ...props }: any) => {
  return <STitle sRef="Title" as={`h${level}`} level={level} {...props} />
}
