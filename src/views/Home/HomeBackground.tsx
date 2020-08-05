import React, { useEffect, useState, createRef } from 'react'
import { Row, Col, Box, rgba } from '@core'
import { random, sample, times } from 'lodash'
import { SHomeBackground } from './Home.styled'
import { keyGen } from '../../core'

export const HomeBackground = () => {
  const [cols, setCols] = useState<any>({})
  const windowWidth = window.innerWidth
  const minColWidth = 80
  const maxColWidth = 200
  const colHeight = 4.6
  const amountCols =
    Math.round(100 / colHeight) * Math.round(windowWidth / minColWidth)

  function genCol() {
    const key: string = keyGen()
    const width: any = random(minColWidth, maxColWidth)
    const color: any = sample(['#dfe2fe', '#b1cbfa', '#8e98f5', '#7874f2'])
    return { [key]: { width, color, key, ref: createRef() } }
  }

  function genCols() {
    let generatedCols: any = {}

    times(amountCols, () => {
      generatedCols = { ...generatedCols, ...genCol() }
    })

    setCols(generatedCols)
  }

  useEffect(() => {
    genCols()
  }, [])

  return (
    <SHomeBackground>
      <Row gutter="xxs" s={{ flexWrap: 'wrap' }}>
        {Object.keys(cols).map((key: string) => {
          const col = cols[key]
          return (
            <Col width={`${col.width}`} s={{ minWidth: col.width }}>
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
