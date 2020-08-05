import React, { FC, ReactElement } from 'react'
import { keyGen, Title } from '@core'
import { PreviewComponent } from '@components'
import { SPreview, SPreviewTitle } from './Preview.styled'

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
      <SPreviewTitle>
        {title ? <Title level={4}>{title}</Title> : null}
      </SPreviewTitle>
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
