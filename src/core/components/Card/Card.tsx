import React, { ReactElement, FC } from 'react'
import { Stylish } from '../../utils'

export const SCard = Stylish('div', {
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  border: 'main',
  borderColor: 'primary',
  color: 'primary',
  borderRadius: 'm',
})

export const SCardHeader = Stylish('div', {
  fontWeight: 'bold',
  padding: 's',
  borderBottom: 'main',
  borderColor: 'primary',
  backgroundColor: 'primary',
  color: 'white',
})

export const SCardContent = Stylish('div', {
  padding: 'm',
})

export const Card: FC<any> = ({
  header,
  children,
  style = {},
  ...props
}: any): ReactElement => {
  return (
    <SCard sRef="Card" {...style} {...props}>
      {header && (
        <SCardHeader sRef="Card_Header" {...style._header}>
          {header}
        </SCardHeader>
      )}
      <SCardContent sRef="Card_Content" {...style._content}>
        {children}
      </SCardContent>
    </SCard>
  )
}
