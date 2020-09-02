import React from 'react'
import { styled } from '@core'
import { render } from '@tests'

describe('styled', () => {
  test('with default styles', () => {
    const Element = styled.button({
      color: 'red',
    })

    const { queryByTestId } = render(<Element data-testid="styled" />)
    const style = getComputedStyle(queryByTestId('styled'))
    expect(style.color).toBe('red')
  })

  test('with variant styles', () => {
    const Element = styled.div(
      {
        color: 'red',
      },
      { isBlue: { color: 'blue' } },
    )

    const { queryByTestId } = render(<Element isBlue data-testid="styled" />)
    const style = getComputedStyle(queryByTestId('styled'))
    expect(style.color).toBe('blue')
  })

  test('overriding styles inline', () => {
    const Element = styled.button({
      color: 'red',
    })

    const { queryByTestId } = render(
      <Element data-testid="styled" s={{ color: 'green' }} />,
    )

    const style = getComputedStyle(queryByTestId('styled'))
    expect(style.color).toBe('green')
  })

  test('overriding default styled from theme', () => {
    const Element = styled.button(
      {
        color: 'red',
      },
      {},
      'Button',
    )

    const { queryByTestId } = render(<Element data-testid="styled" />, {
      theme: {
        components: {
          Button: {
            default: {
              color: 'magenta',
            },
          },
        },
      },
    })

    const style = getComputedStyle(queryByTestId('styled'))
    expect(style.color).toBe('magenta')
  })

  test('adding and applying variants from the theme', () => {
    const Element = styled.button(
      {
        color: 'red',
      },
      {},
      'Button',
    )

    const { queryByTestId } = render(<Element data-testid="styled" isCyan />, {
      theme: {
        components: {
          Button: {
            variants: {
              isCyan: {
                color: 'cyan',
              },
            },
          },
        },
      },
    })

    const style = getComputedStyle(queryByTestId('styled'))
    expect(style.color).toBe('cyan')
  })
})
