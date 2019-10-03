import firebase from 'firebase/app';
import 'firebase/auth';

import firebaseConfig from './firebaseConfig';

Object.keys(firebaseConfig).forEach(key => {
  const value = firebaseConfig[key];

  if (value === undefined || value === null) {
    // eslint-disable-next-line no-console
    console.log(`Specify ${key} in your firebaseConfig.ts`);
  }
});

export default firebase.initializeApp(firebaseConfig);
