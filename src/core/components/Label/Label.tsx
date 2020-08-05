import React from 'react'
import { styled } from '../../utils'

export const SLabel = styled.div(
  {
    display: 'flex',
    paddingY: 'xxs',
    paddingX: 'xs',
    color: 'white',
    alignItems: 'center',
    backgroundColor: 'primary',
    border: 'main',
    borderColor: 'primary',
    borderRadius: 'm',
    fontSize: 's',
  },
  {
    isSecondary: {
      backgroundColor: 'secondary',
      borderColor: 'secondary',
    },
    isOutline: {
      color: 'primary',
      backgroundColor: 'transparent',
    },
  },
)

export const Label = ({ ...props }: any) => <SLabel {...props} />
