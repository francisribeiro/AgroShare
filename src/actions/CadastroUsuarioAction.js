import { auth, firebase } from '../config/firebase'
import b64 from 'base-64'
import { NavigationActions } from 'react-navigation'
import { Keyboard, Alert } from 'react-native'
import { addHistorico } from './AppAction'

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

const callAlert = (titulo, msg) => {
    Alert.alert(
        titulo,
        msg,
        [{ text: 'ENTENDIDO', onPress: () => false }],
        { cancelable: false }
    )
}

const sendMail = () => {

}

export const cadastrarUsuario = ({ nome, sobrenome, email, senha, idade }) => {
    return dispatch => {
        dispatch({ type: 'cadastrar_usuario' })

        auth.doCreateUserWithEmailAndPassword(email, senha)
            .then(user => {
                let emailB64 = b64.encode(email)
                firebase.db.ref(`/Usuarios/${emailB64}/`)
                    .set({ nome, sobrenome, email, idade, foto: 'false' })
                    .then(value => cadastraUsuarioSuccesso(dispatch))
            })
            .catch(erro => cadastraUsuarioErro(dispatch, erro))
    }
}

const cadastraUsuarioSuccesso = (dispatch) => {
    Keyboard.dismiss()
    dispatch({ type: 'sucesso_cadastro' })
    sendMail()
    dispatch(NavigationActions.reset({
        index: 0, key: null, actions: [NavigationActions.navigate({ routeName: 'Main', params: { sucesso: true } })]
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

export const perfilFetch = () => {
    let userId = b64.encode(firebase.auth.currentUser.email)

    return dispatch => {
        firebase.db.ref(`Usuarios/${userId}`).on('value', (snapshot) => {
            dispatch({ type: 'buscar_perfil', payload: snapshot.val() })
        })
    }
}


export const editarPerfil = ({ nome, sobrenome, route }) => {

    let userId = b64.encode(firebase.auth.currentUser.email)

    return dispatch => {
        dispatch({ type: 'editar_perfil' })
        firebase.db.ref(`Usuarios/${userId}`)
            .update({ nome, sobrenome })
            .then(value => editarPerfilSuccesso(dispatch, userId, route))
            .catch(erro => editarPerfilErro(dispatch, erro))
    }
}

const editarPerfilSuccesso = (dispatch, userId, route) => {
    addHistorico(`Você alterou seu perfil.`, 'ios-person-outline', userId, '#2BBBAD')
    dispatch({ type: 'sucesso_editar' })
    dispatch(NavigationActions.reset({
        index: 0, key: null, actions: [NavigationActions.navigate({ routeName: route })]
    }))
    callAlert('Confirmação de Edição', 'Você editou seu perfil com sucesso!')
    // dispatch(NavigationActions.navigate({ routeName: 'Anuncios' }))
}

const editarPerfilErro = (dispatch, erro) => {
    dispatch({ type: 'erro_editar', payload: erro.message })
}

export const passwordRecover = (email) => {
    return dispatch => {
        auth.doPasswordReset(email)
            .then(value => sendResetEmailSucesso(dispatch))
            .catch(erro => sendResetEmailErro(dispatch, erro))
    }
}

const sendResetEmailSucesso = (dispatch) => {
    dispatch(NavigationActions.reset({
        index: 0, key: null, actions: [NavigationActions.navigate({ routeName: 'Main' })]
    }))
    callAlert('Recuperar Senha', 'Enviamos para você um email de recuperação de senha!')
}

const sendResetEmailErro = (dispatch, erro) => {
    switch (erro.code) {
        case 'auth/user-not-found':
            erro.message = 'ERRO: Este usuário não existe!'
            break
    }

    dispatch({ type: 'erro_login', payload: erro.message })
}