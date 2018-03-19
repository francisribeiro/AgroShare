import { firebase } from '../config/firebase'
import { NavigationActions } from 'react-navigation'
import b64 from 'base-64'
import { Keyboard } from 'react-native'

export const modificaDataInicial = (texto) => { return { type: 'modifica_dataInicial', payload: texto } }
export const modificaDataFinal = (texto) => { return { type: 'modifica_dataFinal', payload: texto } }
export const modificaFormaPagamento = (texto) => { return { type: 'modifica_formaPagamento', payload: texto } }
export const modificaLocador = (texto) => { return { type: 'modifica_locador', payload: texto } }
export const modificaMaquina = (texto) => { return { type: 'modifica_maquina', payload: texto } }
export const modificaAtivo = (texto) => { return { type: 'modifica_ativo', payload: texto } }
export const modificaLocatario = (texto) => { return { type: 'modifica_locatario', payload: texto } }

export const cadastrarAluguel = ({ dataInicial, dataFinal, formaPagamento, locador, maquina, ativo, locatario }) => {
    return dispatch => {
        // alert(dataInicial + ', ' + dataFinal + ', ' + formaPagamento + ', ' + locador + ', ' + maquina + ', ' + ativo + ', ' + locatario)
        dispatch({ type: 'cadastrar_aluguel' })

        let userId = b64.encode(firebase.auth.currentUser.email)

        firebase.db.ref(`/Alugueis/${userId}/`)
            .push({ dataInicial, dataFinal, formaPagamento, locador, maquina, ativo, locatario })
            .then(value => cadastraAluguelSuccesso(dispatch))
            .catch(erro => cadastraAluguelErro(dispatch, erro))
    }
}

const cadastraAluguelSuccesso = (dispatch) => {
    Keyboard.dismiss()
    dispatch({ type: 'sucesso_cadastro' })
    dispatch(NavigationActions.reset({
        index: 0, key: null, actions: [NavigationActions.navigate({ routeName: 'TabRoutes_2' })]
    }))
}

const cadastraAluguelErro = (dispatch, erro) => {
    dispatch({ type: 'erro_cadastro', payload: erro.message })
}