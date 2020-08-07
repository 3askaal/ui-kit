import React, { FC, ReactElement } from 'react'
import { keyGen, Title } from '@core'
import { PreviewComponent } from '@components'
import { SPreview } from './Preview.styled'

export interface PreviewProps {
  title?: string
  id?: string
  description?: string
  children?: any
}

export const Preview: FC<PreviewProps> = ({
  title,
  children,
}: PreviewProps): ReactElement => {
  return (
    <SPreview>
      {title ? (
        <Title level={4} s={{ mb: 'l' }}>
          {title}
        </Title>
      ) : null}
      {children.length ? (
        children.map((child: any) => (
          <PreviewComponent key={keyGen()}>{child}</PreviewComponent>
        ))
      ) : (
        <PreviewComponent>{children}</PreviewComponent>
      )}
    </SPreview>
  )
}
