import React, { ReactElement, FC } from 'react'
import { styled } from '../../utils'

export const SList = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  borderTop: 'main',
  borderBottom: 'main',
  borderColor: 'primary',
})

export const SListTitle = styled.div({
  display: 'flex',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  padding: 's',
  backgroundColor: 'primary',
  borderBottom: 'main',
  borderColor: 'primary',
})

export const List: FC<any> = ({
  title,
  children,
  ...props
}: any): ReactElement => {
  return (
    <SList sRef="List" {...props}>
      {title && <SListTitle sRef="List_Title">{title}</SListTitle>}
      {children}
    </SList>
  )
}
