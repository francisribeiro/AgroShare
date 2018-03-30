import { auth, firebase } from '../config/firebase'
import b64 from 'base-64'
import { NavigationActions } from 'react-navigation'
import { Keyboard } from 'react-native'

export const modificaNome = (texto) => {
    return { type: 'modifica_nome', payload: texto }
}

export const modificaSobrenome = (texto) => {
    return { type: 'modifica_sobrenome', payload: texto }
}

export const modificaEmail = (texto) => {
    return { type: 'modifica_email', payload: texto }
}

export const modificaSenha = (texto) => {
    return { type: 'modifica_senha', payload: texto }
}

export const modificaIdade = (texto) => {
    return { type: 'modifica_idade', payload: texto }
}

export const cadastrarUsuario = ({ nome, sobrenome, email, senha, idade }) => {
    return dispatch => {
        dispatch({ type: 'cadastrar_usuario' })

        auth.doCreateUserWithEmailAndPassword(email, senha)
            .then(user => {
                let emailB64 = b64.encode(email)
                firebase.db.ref(`/Usuarios/${emailB64}/`)
                    .set({ nome, sobrenome, email, idade })
                    .then(value => cadastraUsuarioSuccesso(dispatch))
            })
            .catch(erro => cadastraUsuarioErro(dispatch, erro))
    }
}

const cadastraUsuarioSuccesso = (dispatch) => {
    Keyboard.dismiss()
    dispatch({ type: 'sucesso_cadastro' })
    dispatch(NavigationActions.reset({
        index: 0, key: null, actions: [NavigationActions.navigate({ routeName: 'Main' })]
    }))
}

const cadastraUsuarioErro = (dispatch, erro) => {
    switch (erro.code) {
        case 'auth/email-already-in-use':
            erro.message = 'ERRO: Este email já está em uso!'
            break
    }

    dispatch({ type: 'erro_cadastro', payload: erro.message })
}