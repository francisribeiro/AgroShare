const INITIAL_STATE = {
    email: '',
    senha: '',
    erroLogin: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'modifica_email':
            return { ...state, email: action.payload }
        case 'modifica_senha':
            return { ...state, senha: action.payload }
        case 'erro_login':
            return { ...state, erroLogin: action.payload }
        case 'sucesso_login':
            return { ...state, email: '', senha: '' }
        default:
            return state
    }
}