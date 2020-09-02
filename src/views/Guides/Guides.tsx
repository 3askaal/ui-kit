import React from 'react'
import { Container, Spacer } from '@core'
import Guides from '../../docs/guides/index.mdx'

export const GuidesView = () => {
  return (
    <Container s={{ paddingY: 'xxl' }} data-testid="guides-view">
      <Spacer size="xxl" s={{ alignItems: 'center' }}>
        <Guides />
      </Spacer>
    </Container>
  )
}
