const INITIAL_STATE = {
    email: '',
    senha: '',
    erroLogin: ''
}

export default (state = INITIAL_STATE, action) => {
    if (action.type == 'modifica_email')
        return { ...state, email: action.payload }

    if (action.type == 'modifica_senha')
        return { ...state, senha: action.payload }

    if (action.type == 'erro_login')
        return { ...state, erroLogin: action.payload }

    return state
}