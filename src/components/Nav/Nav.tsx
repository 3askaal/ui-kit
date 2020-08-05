import React, { useState } from 'react'
import { ChevronDown } from 'react-feather'
import { useLocation } from 'react-router-dom'
import { List, ListItem, Box, Link } from '../../core'

export const Nav = ({ to, children, items }: any) => {
  const [isOpen, setIsOpen] = useState(true)
  const { pathname: activeLink, hash: activeHash }: any = useLocation()

  return (
    <List s={{ border: 0, marginBottom: 'xs' }}>
      <ListItem s={{ padding: 0, border: 0 }}>
        <Link
          to={to}
          s={{
            display: 'flex',
            padding: 's',
            flexGrow: 1,
            fontWeight: 'bold',
            color: activeLink === to ? 'primary' : 'inherit',
          }}
        >
          {children}
        </Link>
        {items ? (
          <Box
            onClick={() => setIsOpen(!isOpen)}
            s={{
              py: 's',
              px: 'm',
              display: 'inline-flex',
              cursor: 'pointer',
            }}
          >
            <Box
              s={{
                color: isOpen && 'primary',
                transform: isOpen ? 'rotate(0deg)' : 'rotate(90deg)',
              }}
            >
              <ChevronDown size={14} />
            </Box>
          </Box>
        ) : null}
      </ListItem>
      {isOpen && items
        ? items.map(({ to: itemTo, content, disabled }: any) => (
            <ListItem s={{ border: 0, marginLeft: 'xs' }} disabled={disabled}>
              {itemTo ? (
                <Link
                  to={to + itemTo}
                  s={{
                    color: activeHash === itemTo ? 'primary' : 'inherit',
                  }}
                >
                  {content}
                </Link>
              ) : (
                content
              )}
            </ListItem>
          ))
        : null}
    </List>
  )
}
