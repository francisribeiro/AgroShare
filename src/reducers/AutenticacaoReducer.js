const INITIAL_STATE = {
    email: 'prikondo@hotmail.com',
    senha: '123456',
    erroLogin: '',
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'modifica_email':
            return { ...state, email: action.payload }
        case 'modifica_senha':
            return { ...state, senha: action.payload }
        case 'login_user':
            return { ...state, loading: true, erroLogin: '' }
        case 'erro_login':
            return { ...state, erroLogin: action.payload, loading: false }
        case 'sucesso_login':
            return { ...state, ...INITIAL_STATE }
        default:
            return state
    }
}