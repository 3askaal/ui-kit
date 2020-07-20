import React, { ReactElement, FC } from 'react'
import { styled } from '../../utils'

export const SProgress = styled.div({
  display: 'flex',
  height: '8px',
  flexGrow: 1,
  border: 'main',
  borderColor: 'primary',
})

export const SProgressActive = styled.div(({ amount }: any) => ({
  display: 'inline-flex',
  height: '100%',
  width: amount && `${amount}%`,
  backgroundColor: 'primary',
}))

export const Progress: FC<any> = ({ amount, ...props }: any): ReactElement => {
  return (
    <SProgress sRef="Progress" {...props}>
      <SProgressActive sRef="Progress_Active" amount={amount} />
    </SProgress>
  )
}
