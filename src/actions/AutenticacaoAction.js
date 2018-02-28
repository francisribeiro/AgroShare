import firebase from 'firebase'
import b64 from 'base-64'
import { NavigationActions } from 'react-navigation'

export const modificaEmail = (texto) => {
    return {
        type: 'modifica_email',
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    return {
        type: 'modifica_senha',
        payload: texto
    }
}

export const modificaNome = (texto) => {
    return {
        type: 'modifica_nome',
        payload: texto
    }
}

export const cadastraUsuario = ({ nome, email, senha }) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => {
                let emailB64 = b64.encode(email)
                firebase.database().ref(`/contatos/${emailB64}`)
                    .push({ nome })
                    .then(value => cadastraUsuarioSuccesso(dispatch))
            })
            .catch(erro => cadastraUsuarioErro(dispatch, erro))
    }
}

const cadastraUsuarioSuccesso = (dispatch) => {
    dispatch({ type: 'sucesso_cadastro' })
    // Actions.BoasVindas()
}

const cadastraUsuarioErro = (dispatch, erro) => {
    dispatch({
        type: 'erro_cadastro',
        payload: erro.message
    })
}

export const autenticarUsuario = ({ email, senha }) => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(value => loginUsuarioSuccesso(dispatch))
            .catch(erro => loginUsuarioErro(dispatch, erro))
    }
}

const loginUsuarioSuccesso = (dispatch) => {
    dispatch({ type: 'sucesso_login' })
    dispatch(NavigationActions.navigate({ routeName: 'Anuncios' }))
}

const loginUsuarioErro = (dispatch, erro) => {
    dispatch({
        type: 'erro_login',
        payload: erro.message
    })
    dispatch(NavigationActions.navigate({ routeName: 'Anuncios' }))
}