import React from 'react'

import { useAuth } from './useAuth'
import { UserContext } from './UserContext'

const AuthWrapper: React.FC = ({ children }) => {
  const { initializing, user } = useAuth()

  return (
    <UserContext.Provider value={{ initializing, user }}>
      {children}
    </UserContext.Provider>
  )
}

export { AuthWrapper }
