import React, { useEffect } from 'react'
import { HeaderPage }  from '../../components/Admin'
import { useUser } from '../../hooks'

export function UsersAdmin() {
  const {loading, users, getUsers} = useUser();

  useEffect(() => getUsers(), []);

  return (
    <div>
      <HeaderPage title = 'Usuarios'/>
      <h1>Estamos en Users Admin</h1>
    </div>
  )
}
