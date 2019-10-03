import { useState, useEffect } from 'react';
import firebase from 'firebase/app';

export const useAuth = () => {
  const [state, setState] = useState(() => {
    const user = firebase.auth().currentUser;
    return { initializing: !user, user };
  });

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setState({ initializing: false, user });
    });
    return () => unsubscribe();
  }, []);

  return state;
};
