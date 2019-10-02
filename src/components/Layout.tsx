import React from 'react'
import { Container, Dropdown, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Footer from './Footer'
import { useSession } from './firebase'
import firebase from 'firebase/app'

const MainContainer = styled(Container)`
  min-height: 600px;
  padding-top: 1.5em;
`

const Layout: React.FC = ({ children }) => {
  const user = useSession()

  return (
    <div>
      <Menu inverted stackable>
        <Container>
          <Menu.Item header as={Link} to='/'>
            Mino React
          </Menu.Item>
          {!user && (
            <Menu.Item as={Link} position='right' to='/signup'>
              Login
            </Menu.Item>
          )}
          {user && (
            <Menu.Menu position='right'>
              <Dropdown icon='user' item pointing>
                <Dropdown.Menu>
                  <Dropdown.Item>Profile</Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      firebase.auth().signOut()
                    }}
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          )}
        </Container>
      </Menu>

      <MainContainer>{children}</MainContainer>

      <Footer />
    </div>
  )
}

export default Layout
