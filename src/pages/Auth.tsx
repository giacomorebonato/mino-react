import React from 'react';

import { Divider, Header } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { FirebaseAuthUI, useSession } from '../components/firebase';

export const Auth: React.FC = () => {
  const { user } = useSession();

  if (user) {
    return (
      <Redirect
        to={{
          pathname: '/'
        }}
      />
    );
  }

  return (
    <div>
      <Header>Signup</Header>
      <Divider />
      <FirebaseAuthUI />
    </div>
  );
};
