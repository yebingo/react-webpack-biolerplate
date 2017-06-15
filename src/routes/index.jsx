import React from 'react'
import {
  Switch,
  Route,
  Redirect,
  HashRouter as Router,
} from 'react-router-dom'

import HomePage from 'containers/Home'
import SortPage from 'containers/Sort'
import ShopCart from 'containers/ShopCart'
// import PersonCenterPage from 'containers/PersonCenter'
import NotMatch from 'containers/NotMatch'
import Login from 'containers/Login'
import Detail from 'containers/Detail'
import SearchPage from 'containers/Search'

// import App from 'containers/App'

const supportsHistory = 'pushState' in window.history

const AppRouter = () => (
  <Router
    basename="/"
    forceRefresh={!supportsHistory}
  >
    <Route render={() => (
      <Switch>
        <Route exact path="/" render={() => (< Redirect to="/home" />)} />
        <Route path="/home" component={HomePage} />
        <Route path="/sort" component={SortPage} />
        <Route path="/shopcart" component={ShopCart} />
        <Route path="/personcenter" component={Login} />
        <Route path="/detail" component={Detail} />
        <Route path="/search" component={SearchPage} />
        <Route component={NotMatch} />
      </Switch>
    )}
    />
  </Router>
)


export default AppRouter