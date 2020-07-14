import React, { FC, ReactElement } from 'react'
import { Stylish } from '../../utils'

const ButtonReset: any = {
  backgroundColor: 'transparent',
  border: 0,
  cursor: 'pointer',
}

export const SButton: any = Stylish(
  'button',
  {
    ...ButtonReset,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 's',
    paddingX: 'm',
    paddingY: 's',
    color: 'white',
    backgroundColor: 'primary',
    border: 'main',
    borderColor: 'primary',

    ':hover': {
      backgroundColor: 'primaryDark',
      borderColor: 'primaryDark',
    },

    '> * + *': {
      marginLeft: 'xxs',
    },
  },
  {
    isSecondary: {
      backgroundColor: 'secondary',
      borderColor: 'secondary',

      ':hover': {
        backgroundColor: 'secondaryDark',
        borderColor: 'secondaryDark',
      },
    },
    isOutline: {
      backgroundColor: 'transparent',
      border: 'main',
      borderColor: 'primary',
      color: 'primary',

      ':hover': {
        backgroundColor: 'primaryDark',
        borderColor: 'primaryDark',
        color: 'white',
      },
    },
    isDisabled: {
      opacity: 0.6,
      pointerEvents: 'none',
    },
    isBlock: {
      flexGrow: 1,
    },
  },
)

export const Button: FC<any> = ({ style, ...props }: any): ReactElement => {
  return <SButton sRef="Button" {...style} {...props} />
}
