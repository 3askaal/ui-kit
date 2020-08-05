import React from 'react'
import { styled } from '@core'
import { useLocation } from 'react-router-dom'
import { Sidebar } from '..'
import { Wrapper } from '../../core'

const SSiteWrapper = styled.div({
  display: 'flex',
  width: '100%',
})

export const SiteWrapper = ({ children }: any) => {
  const { pathname } = useLocation()
  const atHome = pathname === '/'

  return (
    <SSiteWrapper>
      {atHome ? null : <Sidebar />}
      {atHome ? (
        children
      ) : (
        <Wrapper
          s={{
            px: 'l',
            overflow: 'hidden',
            maxWidth: !atHome && '800px',
            marginLeft: [0, null, null, null, '260px'],
          }}
        >
          {children}
        </Wrapper>
      )}
    </SSiteWrapper>
  )
}
