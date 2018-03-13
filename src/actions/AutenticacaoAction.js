import { auth } from '../config/firebase'
import b64 from 'base-64'
import { NavigationActions } from 'react-navigation'
import { Keyboard } from 'react-native'

export const modificaEmail = (texto) => {
    return { type: 'modifica_email', payload: texto }
}

export const modificaSenha = (texto) => {
    return { type: 'modifica_senha', payload: texto }
}

export const autenticarUsuario = ({ email, senha }) => {
    return dispatch => {
        dispatch({ type: 'login_user' })
        auth.doSignInWithEmailAndPassword(email, senha)
            .then(value => loginUsuarioSuccesso(dispatch))
            .catch(erro => loginUsuarioErro(dispatch, erro))
    }
}

const loginUsuarioSuccesso = (dispatch) => {
    Keyboard.dismiss()
    dispatch({ type: 'sucesso_login' })
    dispatch(NavigationActions.navigate({ routeName: 'Anuncios' }))
}

const loginUsuarioErro = (dispatch, erro) => {
    switch (erro.code) {
        case 'auth/invalid-email':
            erro.message = 'ERRO: Email inválido!'
            break
        case 'auth/user-disabled':
            erro.message = 'ERRO: Usuário desativado!'
            break
        case 'auth/user-not-found':
            erro.message = 'ERRO: Usuário inexistente!'
            break
        case 'auth/wrong-password':
            erro.message = 'ERRO: Senha inválida!'
            break
        default:
            erro.message = ''
            break
    }

    dispatch({ type: 'erro_login', payload: erro.message })
}