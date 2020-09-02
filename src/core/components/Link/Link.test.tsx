import React from 'react'
import { render } from '@tests'
import { Link } from '@core'

describe('Link', () => {
  test('renders', () => {
    render(<Link href="/" />)
  })
})
