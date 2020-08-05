import React, { ReactElement, FC } from 'react'
import { SLogo } from './Logo.styled'

export const Logo: FC<any> = ({ isSmall }: any): ReactElement => {
  return (
    <SLogo s={{ fontSize: '4.2rem' }} isSmall={isSmall}>
      <div>&nbsp;3oilerplate&nbsp;</div>
    </SLogo>
  )
}
