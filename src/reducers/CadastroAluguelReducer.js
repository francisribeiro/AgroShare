const INITIAL_STATE = {
    dataInicial: '22/05/2018',
    dataFinal: '03/06/2018',
    erroCadastro: '',
    formaPagamento: 'Dinheiro',
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'modifica_dataInicial':
            return { ...state, dataInicial: action.payload }
        case 'modifica_dataFinal':
            return { ...state, dataFinal: action.payload }
        case 'modifica_formaPagamento':
            return { ...state, formaPagamento: action.payload }
        case 'cadastrar_aluguel':
            return { ...state, loading: true, erroCadastro: '' }
        case 'erro_cadastro':
            return { ...state, erroCadastro: action.payload, loading: false }
        case 'sucesso_cadastro':
            return { ...state, ...INITIAL_STATE }
        default:
            return state
    }
}

