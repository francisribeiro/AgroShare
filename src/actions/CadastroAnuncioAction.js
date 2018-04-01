import { firebase } from '../config/firebase'
import { NavigationActions } from 'react-navigation'
import b64 from 'base-64'
import { Keyboard } from 'react-native'
import { addHistorico } from './AppAction'

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
        dispatch({ type: 'cadastrar_anuncio' })

        let userId = b64.encode(firebase.auth.currentUser.email)

        firebase.db.ref(`/Anuncios/${userId}/`)
            .push({ tipo, marca, modelo, ano, cidade, estado, descricao, titulo, preco })
            .then(value => cadastraAnuncioSuccesso(dispatch, tipo, marca, userId))
            .catch(erro => cadastraAnuncioErro(dispatch, erro))
    }
}

const cadastraAnuncioSuccesso = (dispatch, tipo, marca, userId) => {
    Keyboard.dismiss()
    addHistorico(`Você criou um novo anúncio para o ${tipo} - ${marca}.`, 'ios-train-outline', userId, '#9933CC')
    dispatch({ type: 'sucesso_cadastro' })
    dispatch(NavigationActions.reset({
        index: 0, key: null, actions: [NavigationActions.navigate({ routeName: 'TabRoutes' })]
    }))
    // dispatch(NavigationActions.navigate({ routeName: 'Anuncios' }))
}

const cadastraAnuncioErro = (dispatch, erro) => {
    dispatch({ type: 'erro_cadastro', payload: erro.message })
}


export const anuncioFetch = (id) => {
    let userId = b64.encode(firebase.auth.currentUser.email)

    return dispatch => {
        firebase.db.ref(`Anuncios/${userId}/${id}`).once('value', (snapshot) => {
            dispatch({ type: 'editar_anuncio', payload: snapshot.val() })
        })
    }
}

export const editarAnuncio = ({ id, tipo, marca, modelo, ano, cidade, estado, descricao, titulo, preco }) => {
    let userId = b64.encode(firebase.auth.currentUser.email)

    return dispatch => {
        console.log(`Anuncios/${userId}/${id}`)
        firebase.db.ref(`Anuncios/${userId}/${id}`)
            .update({ tipo, marca, modelo, ano, cidade, estado, descricao, titulo, preco })
            .then(value => editarAnuncioSuccesso(dispatch, tipo, marca, userId))
            .catch(erro => cadastraAnuncioErro(dispatch, erro))
    }
}

const editarAnuncioSuccesso = (dispatch, tipo, marca, userId) => {
    Keyboard.dismiss()
    addHistorico(`Você alterou seu anúncio para o ${tipo} - ${marca}.`, 'ios-train-outline', userId, '#2BBBAD')
    dispatch({ type: 'sucesso_cadastro' })
    dispatch(NavigationActions.reset({
        index: 0, key: null, actions: [NavigationActions.navigate({ routeName: 'TabRoutes' })]
    }))
    // dispatch(NavigationActions.navigate({ routeName: 'Anuncios' }))
}