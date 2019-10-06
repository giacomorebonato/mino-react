import React from 'react'
import { Divider, Grid, Header, Image } from 'semantic-ui-react'

import { Redirect } from 'react-router-dom'
import { useSession } from '../components/firebase'

export const Profile: React.FC = () => {
  const { user } = useSession()

  if (!user) return <Redirect to="/signup" />

  return (
    <div>
      <Header>Profile</Header>
      <Divider />
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Image src={user.photoURL} size="small" circular inline />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
