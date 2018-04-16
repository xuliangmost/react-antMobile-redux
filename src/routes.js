import * as React from 'react'

import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom'
import * as tools from './tools/tool'
import {connect} from 'react-redux'
// import HomePage from './component/homePage/App'
import './component/common/common.less'
import asyncComponent from './component/common/asyncComponent'

const HomePage = asyncComponent(() => import('./component/homePage/App'));

const HomePageS = () => (
  <Switch>
    <MyRouter path='/homePage' component={HomePage}/>
    <MyRouter path='/homePage/home' component={HomePage}/>
  </Switch>
);

// const Customer = () => (
//   <Switch>
//
//   </Switch>
// );
//
// const Study = () => (
//   <Switch>
//
//   </Switch>
// );
//
// const Mine = () => (
//   <Switch>
//
//   </Switch>
// );

class Pages extends React.Component {
  componentWillMount () {
    tools.setFontSize();
  }

  render () {
    return (
      <div className='box_container'>
        <BrowserRouter>
          <Route path='/homePage' component={HomePageS}/>
        </BrowserRouter>
      </div>
    )
  }
}

class MyRouter extends React.Component {
  componentDidMount () {

  }

  componentWillReceiveProps (nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {

    }
  }

  render () {
    return <Route {...this.props}/>
  }
}

function mapState () {
  return {}
}

export default withRouter(connect(mapState)(Pages))