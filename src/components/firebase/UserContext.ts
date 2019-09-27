import * as firebase from 'firebase'
import { createContext } from 'react'

export const UserContext = createContext<{ user: firebase.User | null }>({
  user: null
})
