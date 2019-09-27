import firebase from 'firebase/app'
import 'firebase/auth'

import firebaseConfig from './firebaseConfig'

for (let key in firebaseConfig) {
  let value = firebaseConfig[key]

  if (value === undefined || value === null) {
    console.log(`Specify ${key} in your firebaseConfig.ts`)
  }
}

export default firebase.initializeApp(firebaseConfig)
