const INITIAL_STATE = {
    quantidadeLocatario: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'quantidade_aguardando_locatario':
            return { ...state, quantidadeLocatario: action.payload }
        default:
            return state
    }
}