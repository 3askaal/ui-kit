import { styled } from '@core'

export const SSidebar = styled.div(({ isOpen }: any) => ({
  position: 'fixed',
  display: 'flex',
  alignItems: 'flex-start',
  width: '220px',
  left: 0,
  top: 0,
  bottom: 0,
  transform: isOpen ? `translateX(-0%)` : `translateX(-220px)`,
  backgroundColor: 'grey10',
  zIndex: 100,
  transition: 'all .25s ease',
  borderRight: 'main',
  borderColor: 'primary',
}))

export const SSidebarToggle = styled.button({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  left: '100%',
  top: 0,
  width: '40px',
  height: '40px',
  margin: 'm',
  border: 'main',
  borderColor: 'primary',
  cursor: 'pointer',
  borderRadius: 's',
  backgroundColor: 'white',
})
