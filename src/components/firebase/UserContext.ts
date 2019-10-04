import * as firebase from 'firebase'
import { createContext } from 'react'

export const UserContext = createContext<{
  initializing: boolean
  user: firebase.User | null
}>({
  initializing: false,
  user: null
})
