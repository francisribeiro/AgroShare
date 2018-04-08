import { firebase } from '../config/firebase'
import { NavigationActions } from 'react-navigation'
import b64 from 'base-64'
import { Keyboard, Alert } from 'react-native'
import { addHistorico } from './AppAction'

export const modificaDataInicial = (texto) => { return { type: 'modifica_dataInicial', payload: texto } }
export const modificaDataFinal = (texto) => { return { type: 'modifica_dataFinal', payload: texto } }
export const modificaFormaPagamento = (texto) => { return { type: 'modifica_formaPagamento', payload: texto } }
export const modificaLocador = (texto) => { return { type: 'modifica_locador', payload: texto } }
export const modificaMaquina = (texto) => { return { type: 'modifica_maquina', payload: texto } }
export const modificaAtivo = (texto) => { return { type: 'modifica_ativo', payload: texto } }

const callAlert = (titulo, msg) => {
    Alert.alert(
        titulo,
        msg,
        [{ text: 'ENTENDIDO', onPress: () => false }],
        { cancelable: false }
    )
}

export const cadastrarAluguel = ({ dataInicial, dataFinal, formaPagamento, locador, maquina, ativo }) => {
    return dispatch => {
        // alert(dataInicial + ', ' + dataFinal + ', ' + formaPagamento + ', ' + locador + ', ' + maquina + ', ' + ativo)
        dispatch({ type: 'cadastrar_aluguel' })

        let userId = b64.encode(firebase.auth.currentUser.email)

        firebase.db.ref(`/Alugueis/${userId}/`)
            .push({ dataInicial, dataFinal, formaPagamento, locador, maquina, ativo })
            .then(value => cadastraAluguelSuccesso(dispatch, locador, userId))
            .catch(erro => cadastraAluguelErro(dispatch, erro))
    }
}

const cadastraAluguelSuccesso = (dispatch, locador, locatario) => {
    Keyboard.dismiss()
    addHistorico(`Você enviou uma solicitação de aluguel.`, 'ios-information-circle-outline', locatario, '#0099CC')
    addHistorico(`Você recebeu uma nova solicitação de aluguel.`, 'ios-information-circle-outline', locador, '#0099CC')
    dispatch({ type: 'sucesso_cadastro' })
    dispatch(NavigationActions.reset({
        index: 0, key: null, actions: [NavigationActions.navigate({ routeName: 'TabRoutes_2' })]
    }))
    callAlert('Confirmação de Solicitação','Sua solicitação de aluguel foi enviada com sucesso!')
}

const cadastraAluguelErro = (dispatch, erro) => {
    dispatch({ type: 'erro_cadastro', payload: erro.message })
}