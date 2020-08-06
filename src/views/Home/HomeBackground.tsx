import React, { useEffect, useState, createRef, useLayoutEffect } from 'react'
import { Row, Col, Box, rgba } from '@core'
import { random, sample, times, debounce } from 'lodash'
import { SHomeBackground } from './Home.styled'
import { keyGen } from '../../core'

function useWindowSize() {
  const [size, setSize] = useState([0, 0])

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight])
    }

    updateSize()
    window.addEventListener('resize', debounce(updateSize, 200))

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return size
}

export const HomeBackground = () => {
  const [cols, setCols] = useState<any>({})
  const [windowWidth] = useWindowSize()
  const colHeight = 4.6

  function genCol(minColWidth: number, maxColWidth: number) {
    const key: string = keyGen()
    const width: any = random(minColWidth, maxColWidth)
    const color: any = sample(['#dfe2fe', '#b1cbfa', '#8e98f5', '#7874f2']) //
    return { [key]: { width, color, key, ref: createRef() } }
  }

  function genCols(minColWidth: number, maxColWidth: number) {
    let generatedCols: any = {}
    const amountCols =
      Math.round(100 / colHeight) * Math.round(windowWidth / minColWidth)

    times(amountCols, () => {
      generatedCols = { ...generatedCols, ...genCol(minColWidth, maxColWidth) }
    })

    setCols(generatedCols)
  }

  useEffect(() => {
    if (windowWidth > 768) {
      genCols(Math.round(windowWidth / 40), Math.round(windowWidth / 4))
    } else {
      genCols(Math.round(windowWidth / 12), Math.round(windowWidth / 4))
    }
  }, [windowWidth])

  return (
    <SHomeBackground>
      <Row gutter="xxs" s={{ flexWrap: 'wrap' }}>
        {Object.keys(cols).map((key: string) => {
          const col = cols[key]
          return (
            <Col s={{ minWidth: col.width }}>
              <Box
                s={{
                  paddingY: 's',
                  paddingX: 'xs',
                  minHeight: '4.6vh',
                  bg: rgba(col.color, 0.12),
                }}
              />
            </Col>
          )
        })}
      </Row>
    </SHomeBackground>
  )
}
