const INITIAL_STATE = {
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    idade: '',
    erroCadastro: '',
    loading: false,
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
        case 'cadastrar_usuario':
            return { ...state, loading: true, erroCadastro: '' }
        case 'erro_cadastro':
            return { ...state, erroCadastro: action.payload, loading: false }
        case 'sucesso_cadastro':
            return { ...state, ...INITIAL_STATE }
        default:
            return state
    }
}