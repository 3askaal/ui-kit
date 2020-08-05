import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import renderJsx from 'react-element-to-jsx-string'
import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { SCode } from './Code.styled'

export const Code = ({ children, content, lang = 'tsx', ...props }: any) => {
  return (
    <SCode {...props}>
      <SyntaxHighlighter language={lang} style={duotoneDark}>
        {children
          ? renderJsx(children, { maxInlineAttributesLineLength: 200 })
          : content || ''}
      </SyntaxHighlighter>
    </SCode>
  )
}
