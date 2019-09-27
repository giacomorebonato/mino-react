import React from 'react'

import { useAuth } from './useAuth'
import { UserContext } from './UserContext'

const AuthWrapper: React.FC = ({ children }) => {
  const { user } = useAuth()

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  )
}

export { AuthWrapper }
