import React, { FC, ReactElement, useState } from 'react'
import { Link, List } from '@core'
import { Menu, X } from 'react-feather'
import { SSidebar, SSidebarToggle } from './Sidebar.styled'
import { ExpandListItem } from '../ExpandList/ExpandList'

export const Sidebar: FC<any> = (props: any): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <SSidebar {...props} isOpen={isOpen}>
      <SSidebarToggle onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </SSidebarToggle>
      <List>
        <ExpandListItem to="/getting-started">
          <Link to="getting-started">Getting started</Link>
        </ExpandListItem>
        <ExpandListItem
          to="/components"
          items={[{ to: '#Grid', content: 'Grid' }]}
        >
          <Link to="components">Components</Link>
        </ExpandListItem>
        <ExpandListItem to="/utils">
          <Link to="utils">Utils</Link>
        </ExpandListItem>
        <ExpandListItem to="/theming">
          <Link to="theming">Theming</Link>
        </ExpandListItem>
      </List>
    </SSidebar>
  )
}
