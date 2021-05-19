import { includes, isArray, startsWith } from 'lodash'
import { ReactNode, isValidElement, Children, cloneElement } from 'react'

// function passStylePropsToChildren(child: any, style: any) {
//   if (child?.props?.ref && style && style[child?.props?.ref]) {

//     const newChild = {
//       ...child,
//       props: {
//         ...child.props,
//         s: style[child.props.ref],
//       },
//     }

//     return newChild
//   }

//   return child
// }

// export function resolveStylePropOnChildren(children: any, style: any) {
//   let newChildren: any

//   if (isArray(children)) {
//     newChildren = children.map((child: any) => {
//       return passStylePropsToChildren(child, style)
//     })
//   } else {
//     newChildren = passStylePropsToChildren(children, style)
//   }

//   return newChildren
// }

export function resolveChildStyling(child: ReactNode, style: any): ReactNode {
  const childrenStylingKeys = Object.keys(style || {}).filter((key: string) => startsWith(key, '_'))

  if (isValidElement(child)) {
    if (includes(childrenStylingKeys, child.props.sRef)) {
      return cloneElement(child, {
        ...child.props,
        children: child.props.children && style[child.props.sRef] ? resolveChildrenStyling(child.props.children, style[child.props.sRef]) : null, // eslint-disable-line
        s: style[child.props.sRef]
      })
    }
  }

  return child
}

export function resolveChildrenStyling(children: ReactNode | ReactNode[], style: any = {}): any {


  if (isArray(children)) {
    return Children.map(children, (child) => {
      return resolveChildStyling(child, style)
    })
  }

  return resolveChildStyling(children, style)
}
