import React from 'react';
import { Divider, Header } from 'semantic-ui-react';

import { useSession } from '../components/firebase';

export const Home: React.FC = () => {
  const { user } = useSession();

  return (
    <div>
      <Header>Home</Header>
      <Divider />
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
    </div>
  );
};
