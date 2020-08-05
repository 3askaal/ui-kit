import React, { FC, ReactElement, useState } from 'react'
import { Menu, X } from 'react-feather'
import { SSidebar, SSidebarToggle } from './Sidebar.styled'
import { Nav } from '../Nav/Nav'

export const Sidebar: FC<any> = (props: any): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <SSidebar {...props} isOpen={isOpen}>
      <SSidebarToggle onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size="1.4rem" /> : <Menu size="1.4rem" />}
      </SSidebarToggle>
      <Nav to="/">Home</Nav>
      <Nav
        to="/guides"
        items={[
          { to: '#installation', content: 'Installation' },
          { to: '#getting-started', content: 'Getting Started' },
          { to: '#create-components', content: 'Create Components' },
          { to: '#theming', content: 'Theming' },
          { to: '#variants', content: 'Variants' },
          { to: '#overriding-styles', content: 'Overriding Styles' },
        ]}
      >
        Guides
      </Nav>
      <Nav
        to="/components"
        items={[
          { to: '#grid', content: 'Grid' },
          { to: '#title', content: 'Title' },
          { to: '#text', content: 'Text' },
          { to: '#body', content: 'Body' },
          { to: '#button', content: 'Button' },
          { to: '#label', content: 'Label' },
          { to: '#card', content: 'Card' },
          { to: '#input', content: 'Input' },
          { to: '#textarea', content: 'TextArea' },
          { to: '#checkbox', content: 'Checkbox' },
          { to: '#checkboxgroup', content: 'Checkbox Group' },
          { to: '#selectfield', content: 'Select Field' },
          { to: '#progress', content: 'Progress' },
          { to: '#link', content: 'Link' },
          { to: '#list', content: 'List' },
          { to: '#elementgroup', content: 'Element Group' },
        ]}
      >
        Components
      </Nav>
    </SSidebar>
  )
}
