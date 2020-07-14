import React, { ReactElement, FC } from 'react'
import { Stylish } from '../../utils'

export const SListItem = Stylish(
  'div',
  {
    padding: 's',

    '+ *': {
      borderTop: 'main',
      borderColor: 'primary',
    },
  },
  {
    disabled: {
      opacity: 0.8,
      cursor: 'not-allowed',
      pointerEvents: 'not-allowed',

      ':hover': {
        backgroundColor: 'primaryDark',
      },
    },
  },
)

export const ListItem: FC<any> = ({
  href,
  children,
  options,
  ...props
}: any): ReactElement => {
  return (
    <SListItem sRef="ListItem" as={href ? 'a' : 'div'} href={href} {...props}>
      {children}
    </SListItem>
  )
}
