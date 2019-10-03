import React from 'react'

import { FirebaseAuthUI, useSession } from '../components/firebase'
import { Divider, Header } from 'semantic-ui-react'
import { Redirect } from 'react-router'

export const Auth: React.FC = () => {
  const user = useSession()

  if (user) {
    return (
      <Redirect
        to={{
          pathname: '/'
        }}
      />
    )
  }

  return (
    <div>
      <Header>Signup</Header>
      <Divider />
      <FirebaseAuthUI />
    </div>
  )
}
