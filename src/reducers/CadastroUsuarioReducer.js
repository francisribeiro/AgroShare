const INITIAL_STATE = {
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    idade: '',
    erroCadastro: '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'modifica_nome':
            return { ...state, nome: action.payload }
        case 'modifica_sobrenome':
            return { ...state, sobrenome: action.payload }
        case 'modifica_email':
            return { ...state, email: action.payload }
        case 'modifica_senha':
            return { ...state, senha: action.payload }
        case 'modifica_idade':
            return { ...state, idade: action.payload }
        case 'erro_cadastro':
            return { ...state, erroCadastro: action.payload }
        case 'sucesso_cadastro':
            return { ...state, nome: '', sobrenome: '', email: '', senha: '', idade: '' }
        default:
            return state
    }
}