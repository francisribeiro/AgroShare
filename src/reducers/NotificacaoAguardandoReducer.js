const INITIAL_STATE = {
    quantidadeLocatario: '',
    quantidadeLocador: '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'quantidade_aguardando_locatario':
            return { ...state, quantidadeLocatario: action.payload }
        case 'quantidade_aguardando_locador':
            return { ...state, quantidadeLocador: action.payload }
        default:
            return state
    }
}