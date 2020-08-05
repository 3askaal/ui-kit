import React from 'react'
import { styled, Body, Title } from '@core'
import { kebabCase } from 'lodash'

export const SSection = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const Section = ({ children, title, ...props }: any) => {
  return (
    <SSection {...props}>
      {title && (
        <Title s={{ mb: 'l' }} id={kebabCase(title)}>
          {title}
        </Title>
      )}
      <Body>{children}</Body>
    </SSection>
  )
}
