import { useContext } from 'react';

import { UserContext } from './UserContext';

export const useSession = () => useContext(UserContext).user;
