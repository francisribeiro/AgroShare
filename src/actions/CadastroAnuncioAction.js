import { firebase } from '../config/firebase'
import { NavigationActions } from 'react-navigation'
import b64 from 'base-64'

export const modificaTipo = (texto) => { return { type: 'modifica_tipo', payload: texto } }
export const modificaMarca = (texto) => { return { type: 'modifica_marca', payload: texto } }
export const modificaModelo = (texto) => { return { type: 'modifica_modelo', payload: texto } }
export const modificaAno = (texto) => { return { type: 'modifica_ano', payload: texto } }
export const modificaCidade = (texto) => { return { type: 'modifica_cidade', payload: texto } }
export const modificaEstado = (texto) => { return { type: 'modifica_estado', payload: texto } }
export const modificaDescricao = (texto) => { return { type: 'modifica_descricao', payload: texto } }
export const modificaTitulo = (texto) => { return { type: 'modifica_titulo', payload: texto } }
export const modificaPreco = (texto) => { return { type: 'modifica_preco', payload: texto } }


export const cadastrarAnuncio = ({ tipo, marca, modelo, ano, cidade, estado, descricao, titulo, preco }) => {
    return dispatch => {
        let userId = b64.encode(firebase.auth.currentUser.email)

        firebase.db.ref(`/Anuncios/${userId}/`)
            .push({ tipo, marca, modelo, ano, cidade, estado, descricao, titulo, preco })
            .then(value => cadastraAnuncioSuccesso(dispatch))
            .catch(erro => cadastraAnuncioErro(dispatch, erro))
    }
}

const cadastraAnuncioSuccesso = (dispatch) => {
    dispatch({ type: 'sucesso_cadastro' })
    dispatch(NavigationActions.navigate({ routeName: 'Anuncios' }))
}

const cadastraAnuncioErro = (dispatch, erro) => {
    dispatch({ type: 'erro_cadastro', payload: erro.message })
}