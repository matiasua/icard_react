import React from 'react'
import {Icon, Menu} from 'semantic-ui-react'
import {useAuth} from '../../../hooks'
import "./TopMenu.scss"

export  function TopMenu() {

  const {auth, logout} = useAuth();

  const renderName = () => {
    if (auth.user?.first_name && auth.user?.last_name) {
      return `${auth.user.first_name} ${auth.user.last_name}`
    }
    return auth.user?.email
    }


  return (
    <Menu fixed='top' className='top-menu-admin'>
      <Menu.Item className='top-menu-admin__logo'>
        <p>ICARD ADMIN</p>
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item>Hola, {renderName()} </Menu.Item>
        <Menu.Item onClick={logout}>
          <Icon name='sign out' />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}
