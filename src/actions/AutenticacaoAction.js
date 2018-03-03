import firebase from 'firebase'
import b64 from 'base-64'
import { NavigationActions } from 'react-navigation'

export const modificaEmail = (texto) => {
    return { type: 'modifica_email', payload: texto }
}

export const modificaSenha = (texto) => {
    return { type: 'modifica_senha', payload: texto }
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
    switch (erro.code) {
        case 'auth/invalid-email':
            erro.message = 'Email inválido!'
            break
        case 'auth/user-disabled':
            erro.message = 'Usuário desativado!'
            break
        case 'auth/user-not-found':
            erro.message = 'Usuário inexistente!'
            break
        case 'auth/wrong-password':
            erro.message = 'Senha inválida!'
            break
        default:
            erro.message = ''
            break
    }

    dispatch({ type: 'erro_login', payload: erro.message })
}