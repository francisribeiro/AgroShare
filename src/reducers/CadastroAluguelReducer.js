const INITIAL_STATE = {
    dataInicial: '22/05/2018',
    dataFinal: '03/06/2018',
    formaPagamento: 'Dinheiro',
    locador: '',
    locatario: '',
    maquina: '',
    ativo: false,
    erroCadastro: '',
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
        case 'modifica_locador':
            return { ...state, locador: action.payload }
        case 'modifica_locatario':
            return { ...state, locatario: action.payload }
        case 'modifica_maquina':
            return { ...state, maquina: action.payload }
        case 'modifica_ativo':
            return { ...state, ativo: action.payload }
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

