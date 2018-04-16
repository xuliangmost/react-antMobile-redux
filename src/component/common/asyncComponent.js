import * as React from 'react'


export default function asyncComponent (importantComponent) {

  class AsyncCom extends React.Component {
    constructor (props) {
      super(props);
      this.state = ({component: null})
    }

    async componentDidMount () {
      const {default: component} = await importantComponent();
      this.setState({component})
    }

    render () {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null
    }
  }

  return AsyncCom
}