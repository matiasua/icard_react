import {useContext} from 'react'
import {AuthContext} from '../context'

// Cuando usemos useAuth, la funcion useContext obtiene el valor de nuestro contexto
export const useAuth = () => useContext(AuthContext);