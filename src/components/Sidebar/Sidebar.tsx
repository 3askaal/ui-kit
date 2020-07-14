import React, { FC, ReactElement } from 'react'
import { Spacer, List, ListItem, Link } from '@core'
import { SSidebar } from './Sidebar.styled'

export interface SidebarProps {
  title: string
  children?: any
}

export const Sidebar: FC<SidebarProps> = (
  props: SidebarProps,
): ReactElement => {
  return (
    <SSidebar {...props}>
      <Spacer>
        <List>
          <ListItem>
            <Link to="getting-started">Getting started</Link>
          </ListItem>
          <ListItem>
            <Link to="components">Components</Link>
          </ListItem>
          <ListItem>
            <Link to="utils">Utils</Link>
          </ListItem>
          <ListItem>
            <Link to="theming">Theming</Link>
          </ListItem>
        </List>
      </Spacer>
    </SSidebar>
  )
}
