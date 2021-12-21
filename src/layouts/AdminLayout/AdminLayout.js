import React from 'react'
import {LoginAdmin} from '../../pages/Admin'
import './AdminLayout.scss'

export function AdminLayout(props) {
  const { children } = props;
  const auth = null;

// tratamiento cuando el user esta logeado o no.
// Si esta logeado la ruta es homeadmin, si no loginadmin.
  if (!auth) return <LoginAdmin />

  return (
    <div>
      <p>AdminLayout</p>

      {children}
    </div>
  )
}
