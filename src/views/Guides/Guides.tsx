import React, { useContext } from 'react'
import { Container, Spacer } from '@core'
import { NavContext } from '../../context/NavContext'

export const GuidesView = () => {
  const { guides }: any = useContext(NavContext)

  return (
    <Container s={{ paddingY: 'xxl' }} data-testid="guides-view">
      <Spacer size="xxl" s={{ alignItems: 'center' }}>
        { guides.map(({ section: Guide }: any) => Guide) }
      </Spacer>
    </Container>
  )
}
