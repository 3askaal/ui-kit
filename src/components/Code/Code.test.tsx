import React from 'react'
import { render } from '@tests'
import { Code } from './Code'

describe('Code', () => {
  test('with children', () => {
    const { getByText } = render(
      <Code>
        <p>Test</p>
      </Code>,
    )
    expect(getByText(/Test/i)).toBeInTheDocument()
  })

  test('with content', () => {
    const { getByText } = render(<Code content="<p>Test</p>" />)
    expect(getByText(/Test/i)).toBeInTheDocument()
  })

  test('inline', () => {
    const { getByText } = render(<Code inline content="<p>Test</p>" />)
    expect(getByText(/Test/i)).toBeInTheDocument()
  })
})
