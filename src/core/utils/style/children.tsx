import { isArray } from 'lodash'

function passStylePropsToChildren(child: any, style: any) {
  if (child && child.sRef && style[child.sRef]) {
    return {
      ...child,
      s: style[child.sRef],
    }
  }

  return child
}

export function resolveStylePropOnChildren(children: any, style: any) {
  let newChildren: any

  if (isArray(children)) {
    newChildren = children.map((child: any) =>
      passStylePropsToChildren(child, style),
    )
  } else {
    newChildren = passStylePropsToChildren(children, style)
  }

  return newChildren
}
