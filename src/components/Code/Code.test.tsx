import React from 'react'
import { render } from '@testing-library/react'
import { Code } from './Code'

describe('Code', () => {
  test('renders with children', () => {
    const { getByText } = render(
      <Code>
        <p>Test</p>
      </Code>,
    )
    expect(getByText(/Test/i)).toBeInTheDocument()
  })

  test('renders with content', () => {
    const { getByText } = render(<Code content="<p>Test</p>" />)
    expect(getByText(/Test/i)).toBeInTheDocument()
  })
})
