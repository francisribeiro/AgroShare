import { firebase } from '../config/firebase'
import b64 from 'base-64'

export const getUserData = () => {
    return dispatch => {
        let userId = b64.encode(firebase.auth.currentUser.email)

        firebase.db.ref('users/' + userId).on('value', (snapshot) => {
            dispatch({ type: 'dados_usuario_logado', payload: snapshot.val() })
        })
    }
}