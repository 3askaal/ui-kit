import React from 'react'
import { render } from '@tests'
import { Logo } from '@components'

describe('Logo', () => {
  test('renders', () => {
    render(<Logo />)
  })
})
