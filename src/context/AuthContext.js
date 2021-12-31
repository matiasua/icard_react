// contexto encargado de controlar el sistema de autenticación

import React , {useState, useEffect, createContext} from "react";
import {setToken, getToken} from '../api/token'
import {useUser} from '../hooks'


export const AuthContext = createContext({
    auth: undefined,
    // la funcion login debe actualizar el auth:
    login: () => null,
    // esta funcion de lograr deslogear al usuario auth
    logout: () => null,
});

// funcion encargada de actualizar el estado de auth
export function AuthProvider(props) {
  const {children} = props;
  const [auth, setAuth] = useState(undefined)
  const {getMe} = useUser();

  useEffect(() => {
    (async () => {
      const token = getToken();
      if (token) {
        const user = await getMe(token);
        setAuth({token, user});
      } else {
        setAuth(null);
      }
    })();
  }, [])

  const login = async (token) => {
    setToken(token);
    const user = await getMe(token);
    setAuth({token, user});
  }

  const valueContext = {
      auth,
      login,
      logout: () => console.log('Cerrando Sesion')
  };

  if (auth === undefined) return null;

  return(
      <AuthContext.Provider value={valueContext}>
        {children}
      </AuthContext.Provider>
  );
}