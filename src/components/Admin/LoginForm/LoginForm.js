import React from 'react'
import {Button, Form} from 'semantic-ui-react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {toast} from 'react-toastify'
import {loginApi} from '../../../api/auth.user'
import './LoginForm.scss'

export function LoginForm() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formValue) => {
      try {
          const response = await loginApi(formValue);
          const {access} = response;
          console.log(access)

      } catch (error) {
          toast.error(error.message)
      }
    },
  });

  return (
    <Form className='login-form-admin' onSubmit={formik.handleSubmit}>
      <Form.Input
        name='email'
        placeholder = 'Correo Electronico'
        value = {formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
        />
      <Form.Input
        name='password'
        type='password'
        placeholder = 'Contraseña'
        value = {formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
        />
        <Button
          type='submit'
          content='Iniciar Sesión' primary fluid/>
    </Form>
  )
}

function initialValues() {
  return {
    email: '',
    password: ''
  }
}

function validationSchema() {
  return {
    email: Yup.string()
      .email('Correo Electronico Invalido')
      .required('Correo Electronico Requerido'),
    password: Yup.string()
      .min(6, 'Contraseña debe tener al menos 6 caracteres')
      .required('Contraseña Requerida')
  }
}
