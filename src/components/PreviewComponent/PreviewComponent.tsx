import React, { FC, ReactElement, useState } from 'react'
import { Code } from '@components'
import {
  SPreviewComponent,
  SPreviewComponentContent,
} from './PreviewComponent.styled'

export interface PreviewComponentProps {
  children?: any
}

export const PreviewComponent: FC<PreviewComponentProps> = ({
  children,
}: PreviewComponentProps): ReactElement => {
  const [dataBinding, setDataBinding] = useState<string | boolean>('')

  function handleOnChange(child: any) {
    const newChild: any = {
      ...child,
      props: {
        ...child.props,
        onChange: (newValue: any) => {
          if (typeof newValue === 'string' || typeof newValue === 'boolean') {
            setDataBinding(newValue)
          }

          if (newValue.target) {
            if (newValue.target.value) {
              setDataBinding(newValue.target.value)
            }

            if (newValue.target.checked) {
              setDataBinding(newValue.target.checked)
            }
          }
        },
      },
    }

    return newChild
  }

  return (
    <SPreviewComponent>
      <SPreviewComponentContent>
        {handleOnChange(children)}
      </SPreviewComponentContent>
      <Code>{children}</Code>
      {dataBinding !== null ? (
        <Code content={`onChange => ${JSON.stringify(dataBinding)}`} />
      ) : null}
    </SPreviewComponent>
  )
}
