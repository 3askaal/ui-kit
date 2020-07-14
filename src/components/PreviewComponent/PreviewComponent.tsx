import React, { FC, ReactElement, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import renderJsx from 'react-element-to-jsx-string'
import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import {
  SPreviewComponent,
  SPreviewComponentContent,
  SPreviewComponentSource,
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
      <SPreviewComponentSource>
        <SyntaxHighlighter language="javascript" style={duotoneDark}>
          {renderJsx(children)}
        </SyntaxHighlighter>
        {dataBinding !== null ? (
          <SyntaxHighlighter language="javascript" style={duotoneDark}>
            <>onChange &#61;&#62; {JSON.stringify(dataBinding)}</>
          </SyntaxHighlighter>
        ) : null}
      </SPreviewComponentSource>
    </SPreviewComponent>
  )
}
