import React from 'react'
import { styled } from '@core'
import { render } from '@tests'

describe('styled', () => {
  // test('with default styles', () => {
  //   const StyledEl = styled.button({
  //     color: 'red',
  //   })

  //   const { queryByTestId } = render(<StyledEl data-testid="styled" />)
  //   const style = getComputedStyle(queryByTestId('styled'))
  //   expect(style.color).toBe('red')
  // })

  // test('with variant styles', () => {
  //   const StyledEl = styled.div(
  //     {
  //       color: 'red',
  //     },
  //     { isBlue: { color: 'blue' } },
  //   )

  //   const { queryByTestId } = render(<StyledEl isBlue data-testid="styled" />)
  //   const style = getComputedStyle(queryByTestId('styled'))
  //   expect(style.color).toBe('blue')
  // })

  // test('overriding styles inline', () => {
  //   const StyledEl = styled.button({
  //     color: 'red',
  //   })

  //   const { queryByTestId } = render(
  //     <StyledEl data-testid="styled" s={{ color: 'green' }} />,
  //   )

  //   const style = getComputedStyle(queryByTestId('styled'))
  //   expect(style.color).toBe('green')
  // })

  // test('overriding default styled from theme', () => {
  //   const StyledEl = styled.button(
  //     {
  //       color: 'red',
  //     },
  //     {},
  //     'Button',
  //   )

  //   const { queryByTestId } = render(<StyledEl data-testid="styled" />, {
  //     theme: {
  //       components: {
  //         Button: {
  //           default: {
  //             color: 'magenta',
  //           },
  //         },
  //       },
  //     },
  //   })

  //   const style = getComputedStyle(queryByTestId('styled'))
  //   expect(style.color).toBe('magenta')
  // })

  // test('adding and applying variants from the theme', () => {
  //   const StyledEl = styled.button(
  //     {
  //       color: 'red',
  //     },
  //     {},
  //     'Button',
  //   )

  //   const { queryByTestId } = render(<StyledEl data-testid="styled" isCyan />, {
  //     theme: {
  //       components: {
  //         Button: {
  //           variants: {
  //             isCyan: {
  //               color: 'cyan',
  //             },
  //           },
  //         },
  //       },
  //     },
  //   })

  //   const style = getComputedStyle(queryByTestId('styled'))
  //   expect(style.color).toBe('cyan')
  // })

  test('overriding styles of children', () => {
    const StyledChild = styled.button({
      color: 'red',
    })

    const StyledParent = styled.div({
      bg: 'blue',
    })

    const { queryByTestId } = render(
      <StyledParent s={{ _child: { color: 'green' } }}>
        <StyledChild sRef="_child" data-testid="styled" />
      </StyledParent>
    )

    const style = getComputedStyle(queryByTestId('styled'))
    expect(style.color).toBe('green')
  })
})
