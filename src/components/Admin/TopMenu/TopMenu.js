import React from 'react'
import {Icon, Menu} from 'semantic-ui-react'
import "./TopMenu.scss"

export  function TopMenu() {
  return (
    <Menu fixed='top' className='top-menu-admin'>
      <Menu.Item className='top-menu-admin__logo'>
        <p>ICARD ADMIN</p>
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item>Hola, usuario...</Menu.Item>
        <Menu.Item>
          <Icon name='sign out' />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}
