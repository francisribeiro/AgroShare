import firebase from 'firebase'
import b64 from 'base-64'
import { NavigationActions } from 'react-navigation'

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
    console.log({ nome, sobrenome, email, senha, idade })
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => {
                let emailB64 = b64.encode(email)
                firebase.database().ref(`/contatos/${emailB64}`)
                    .push({ nome, sobrenome, email, idade })
                    .then(value => cadastraUsuarioSuccesso(dispatch))
            })
            .catch(erro => cadastraUsuarioErro(dispatch, erro))
    }
}

const cadastraUsuarioSuccesso = (dispatch) => {
    dispatch({ type: 'sucesso_cadastro' })
    dispatch(NavigationActions.navigate({ routeName: 'Login' }))
}

const cadastraUsuarioErro = (dispatch, erro) => {
    dispatch({ type: 'erro_cadastro', payload: erro.message })
}