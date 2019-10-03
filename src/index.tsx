import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './components/firebase/firebaseApp'
import { AuthWrapper } from './components/firebase'
import Layout from './components/Layout'
import { Auth, Home, Profile } from './pages'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <AuthWrapper>
    <Router>
      <Layout>
        <Route path='/' component={Home} exact />
        <Route path='/profile' component={Profile} />
        <Route path='/signedIn' component={Home} />
        <Route path='/signup' component={Auth} />
      </Layout>
    </Router>
  </AuthWrapper>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
