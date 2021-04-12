import React, { FC, ReactElement, useContext, useState } from 'react'
import { Menu, X } from 'react-feather'
import {
  SSidebar,
  SSidebarContent,
  SSidebarToggle,
  SSidebarCloser,
} from './Sidebar.styled'
import { Nav } from '../Nav/Nav'
import { NavContext } from '../../context/NavContext'

export const Sidebar: FC<any> = (props: any): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  const { guides, components }: any = useContext(NavContext)

  return (
    <>
      <SSidebar {...props} isOpen={isOpen} data-testid="sidebar">
        <SSidebarToggle
          onClick={() => setIsOpen(!isOpen)}
          data-testid="sidebar-toggle"
        >
          {isOpen ? <X size="1.4rem" /> : <Menu size="1.4rem" />}
        </SSidebarToggle>
        <SSidebarContent
          onClick={() => isOpen && setIsOpen(false)}
          data-testid="sidebar-content"
        >
          <Nav to="/">Home</Nav>
          <Nav
            to="/guides"
            items={guides}
          >
            Guides
          </Nav>
          <Nav
            to="/components"
            items={components}
          >
            Components
          </Nav>
        </SSidebarContent>
      </SSidebar>
      {isOpen ? (
        <SSidebarCloser
          onClick={() => setIsOpen(!isOpen)}
          data-testid="sidebar-closer"
        />
      ) : null}
    </>
  )
}
