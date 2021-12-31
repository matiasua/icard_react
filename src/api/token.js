import {TOKEN} from '../utils/constants'


// Esta funcion se encarga de guardar el token en el localestorage
export function setToken(token) {
  localStorage.setItem(TOKEN, token);
}


export function getToken() {
  return localStorage.getItem(TOKEN);
}