import React, { ReactElement, FC } from 'react'
import { SMenu } from './Menu.styled'

export const Menu: FC<any> = ({ children }: any): ReactElement => {
  return <SMenu sRef="Menu">{children}</SMenu>
}
