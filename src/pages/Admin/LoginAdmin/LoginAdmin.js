import React from 'react'
import {LoginForm} from '../../../components/Admin'
import './LoginAdmin.scss'

export function LoginAdmin() {
  return (
    <div class='login-admin-container'>
      <div className="login-admin__content">
        <h1>Ingresar al Panel</h1>
        <LoginForm />
      </div>
    </div>
  )
}
