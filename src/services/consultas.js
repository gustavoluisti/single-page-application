import { URL_API } from './base'

export function consultarBase() {
    return fetch(`${URL_API}/consultas`).then(res => res.json())
}