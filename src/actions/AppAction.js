import { firebase } from '../config/firebase'
import b64 from 'base-64'

export const getUserData = () => {
    return dispatch => {
        let userId = b64.encode('teste@teste.com')

        firebase.db.ref('users/' + userId).on('value', (snapshot) => {
            dispatch({ type: 'dados_usuario_logado', payload: snapshot.val() })
        })
    }

    // return firebase.db.ref('/users/' + userId).once('value').then(function (snapshot) {
    //     let nome = (snapshot.val() && snapshot.val().nome) || 'Anonymous'
    //     alert(nome)
    // })
}