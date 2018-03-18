import { firebase } from '../config/firebase'
import b64 from 'base-64'

export const getUserData = () => {
    return dispatch => {
        let userId = b64.encode(firebase.auth.currentUser.email)

        firebase.db.ref(`users/${userId}`).on('value', (snapshot) => {
            dispatch({ type: 'dados_usuario_logado', payload: snapshot.val() })
        })
    }
}

export const anunciosFetch = () => {
    return dispatch => {
        let userId = b64.encode(firebase.auth.currentUser.email)

        firebase.db.ref(`Anuncios/${userId}`).on('value', (snapshot) => {
            dispatch({ type: 'anuncios_usuario_logado', payload: snapshot.val() })
        })
    }
}

export const todosAnunciosFetch = () => {
    return dispatch => {
        firebase.db.ref('Anuncios').on('value', (snapshot) => {
            dispatch({ type: 'todos_anuncios', payload: snapshot.val() })
        })
    }
}

export const AlugueisFetch = () => {
    return dispatch => {
        let userId = b64.encode(firebase.auth.currentUser.email)

        firebase.db.ref(`Alugueis/${userId}`).on('value', (snapshot) => {
            dispatch({ type: 'alugueis_usuario_logado', payload: snapshot.val() })
        })
    }
}