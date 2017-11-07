// @flow
import React from 'react'
import type {Node} from 'react'
type Props = {
  shouldRender?: boolean,
  children: Node,
}
type State = {bar: string}

class Comp extends React.Component<Props, State> {
  constructor(...args) {
    super(...args)
    this.state = {bar: 'hi'}
  }
  render() {
    if (this.props.shouldRender) {
      return this.props.children
    }
    return this.state.bar
  }
}

export default Comp
