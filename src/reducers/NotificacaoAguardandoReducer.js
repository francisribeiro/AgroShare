const INITIAL_STATE = {
    quantidadeLocatario: '',
    quantidadeLocador: '',
    qtdMsg: '',
    qtdHistorico: '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'quantidade_aguardando_locatario':
            return { ...state, quantidadeLocatario: action.payload }
        case 'quantidade_aguardando_locador':
            return { ...state, quantidadeLocador: action.payload }
        case 'quantidade_msg':
            return { ...state, qtdMsg: action.payload }
        case 'quantidade_historico':
            return { ...state, qtdHistorico: action.payload }
        default:
            return state
    }
}