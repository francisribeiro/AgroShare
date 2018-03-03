const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
}

export default (state = INITIAL_STATE, action) => {
    if (action.type == 'modifica_email')
        return { ...state, email: action.payload }

    if (action.type == 'modifica_senha')
        return { ...state, senha: action.payload }

    if (action.type == 'modifica_nome')
        return { ...state, nome: action.payload }

    if (action.type == 'erro_cadastro')
        return { ...state, erroCadastro: action.payload }

    if (action.type == 'sucesso_cadastro')
        return { ...state, nome: '', senha: '' }
        
    return state
}