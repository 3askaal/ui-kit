import React, { useState } from 'react'
import { ChevronDown } from 'react-feather'
import { Link, ListItem, Menu, MenuItem, Box } from '../../core'

export const ExpandListItem = ({ to, children, items }: any) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <ListItem style={{ padding: 0 }}>
        <Link to={to} style={{ display: 'flex', padding: 's', flexGrow: 1 }}>
          {children}
        </Link>
        <Menu>
          <MenuItem onClick={() => setIsOpen(!isOpen)} isActive={isOpen}>
            <Box
              style={{
                display: 'inline-flex',
                transform: isOpen ? 'rotate(0deg)' : 'rotate(90deg)',
              }}
            >
              <ChevronDown size={12} />
            </Box>
          </MenuItem>
        </Menu>
      </ListItem>
      {isOpen && items
        ? items.map(({ to: itemTo, content, disabled }: any) => (
            <ListItem to={itemTo} disabled={disabled}>
              {itemTo ? <Link to={itemTo}>{content}</Link> : content}
            </ListItem>
          ))
        : null}
    </>
  )
}
