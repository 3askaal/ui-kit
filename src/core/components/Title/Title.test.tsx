import React from 'react'
import { render } from '@tests'
import { Title } from '@core'

describe('Title', () => {
  test('renders', () => {
    render(<Title />)
  })

  test('renders with title font in theme', () => {
    render(<Title />, {
      theme: {
        fonts: {
          title: 'test',
        },
      },
    })
  })
})
