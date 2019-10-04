import React from 'react'
import { Menu, Container, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import { useSession } from './firebase'

export const Topbar: React.FC = () => {
  const { user } = useSession()

  return (
    <Menu inverted stackable>
      <Container>
        <Menu.Item header as={Link} to="/">
          Mino React
        </Menu.Item>
        {!user && (
          <Menu.Item as={Link} position="right" to="/signup">
            Login
          </Menu.Item>
        )}
        {user && (
          <Menu.Menu position="right">
            <Dropdown icon="user" item>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} text="Profile" to="/profile" />
                <Dropdown.Item
                  text="Logout"
                  onClick={() => firebase.auth().signOut()}
                />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        )}
      </Container>
    </Menu>
  )
}
