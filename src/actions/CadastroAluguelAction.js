import { firebase } from '../config/firebase'
import { NavigationActions } from 'react-navigation'
import b64 from 'base-64'
import { Keyboard } from 'react-native'

export const modificaDataInicial = (texto) => { return { type: 'modifica_dataInicial', payload: texto } }
export const modificaDataFinal = (texto) => { return { type: 'modifica_dataFinal', payload: texto } }
export const modificaFormaPagamento = (texto) => { return { type: 'modifica_formaPagamento', payload: texto } }

export const cadastrarAluguel = ({ dataInicial, dataFinal, formaPagamento }) => {
    return dispatch => {
        // dispatch({ type: 'cadastrar_aluguel' })

        // alert(`${dataInicial} até ${dataFinal} pagando com ${formaPagamento}`)

        //         let userId = b64.encode(firebase.auth.currentUser.email)

        //         firebase.db.ref(`/Alugueis/${userId}/`)
        //             .push({ tipo, marca, modelo, ano, cidade, estado, descricao, titulo, preco })
        //             .then(value => cadastraAluguelSuccesso(dispatch))
        //             .catch(erro => cadastraAluguelErro(dispatch, erro))
    }
}

// const cadastraAluguelSuccesso = (dispatch) => {
//     Keyboard.dismiss()
//     dispatch({ type: 'sucesso_cadastro' })
//     dispatch(NavigationActions.reset({
//         index: 0, key: null, actions: [NavigationActions.navigate({ routeName: 'TabRoutes' })]
//     }))
// }

// const cadastraAluguelErro = (dispatch, erro) => {
//     dispatch({ type: 'erro_cadastro', payload: erro.message })
// }