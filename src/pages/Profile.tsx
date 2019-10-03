import React from 'react';
import { Divider, Header, Image } from 'semantic-ui-react';

import { Redirect } from 'react-router-dom';
import { useSession } from '../components/firebase';

export const Profile: React.FC = () => {
  const user = useSession();

  if (!user) return <Redirect to="/signup" />;

  return (
    <div>
      <Header>Profile</Header>
      <Divider />
      <Image src={user.photoURL} size="small" circular />
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
    </div>
  );
};
