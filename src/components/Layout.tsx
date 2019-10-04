import React from 'react'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'

import Footer from './Footer'
import { Topbar } from './Topbar'
import { PageLoader } from './PageLoader'
import { useAuth } from './firebase'

const MainContainer = styled(Container)`
  min-height: 600px;
  padding-top: 1.5em;
`

const Layout: React.FC = ({ children }) => {
  const { initializing } = useAuth()
  return (
    <div>
      {initializing ? (
        <PageLoader />
      ) : (
        <>
          <Topbar />
          <MainContainer>{children}</MainContainer>
          <Footer />
        </>
      )}
    </div>
  )
}

export default Layout
