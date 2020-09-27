import React, { ReactElement, FC } from 'react'
import { SInput } from './Input.styled'

export const Input: FC<any> = ({
  value,
  onChange,
  ...props
}: any): ReactElement => {
  return (
    <SInput
      sRef="Input"
      onChange={onChange ? (e: any) => onChange(e.target.value) : null}
      defaultValue={value}
      {...props}
    />
  )
}

Input.defaultProps = {
  type: 'text',
}
