import React, {useState, useEffect, createContext} from "react";


export const AuthContext = createContext({
    auth: undefined,
    // la funcion login debe actualizar el auth:
    login: () => null,
    // esta funcion de lograr deslogear al usuario auth
    logout: () => null,
});


export function AuthProvider(props) {
  const {children} = props;

  const valueContext = {
    auth: null,
    login: () => console.log('Realizando Login'),
    logout: () => console.log('Cerrando Sesion')
  };

  return(
    <AuthContext.Provider value={valueContext}>
      {children}
    </AuthContext.Provider>
  )
}