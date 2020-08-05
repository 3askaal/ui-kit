import { styled } from '@core'

export const SSidebar = styled.div(({ isOpen }: any) => ({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  width: '260px',
  overflowY: 'scroll',
  flexShrink: 0,
  left: 0,
  top: 0,
  bottom: 0,
  transform: [
    isOpen ? 'translateX(0%)' : 'translateX(-100%)',
    null,
    null,
    null,
    'translateX(0%)',
  ],
  backgroundColor: 'grey10',
  zIndex: 100,
  transition: 'all .25s ease',

  a: {
    textDecoration: 'none',
  },
}))

export const SSidebarToggle = styled.button({
  display: ['flex', null, null, null, 'none'],
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  left: '100%',
  top: 0,
  width: '40px',
  height: '40px',
  margin: 's',
  cursor: 'pointer',
  borderRadius: 's',
  backgroundColor: 'grey10',
})
