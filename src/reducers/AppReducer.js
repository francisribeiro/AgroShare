const INITIAL_STATE = {
    nome: '',
    sobrenome: '',
    idade: '',
    email: '',
    foto: 'false',
    erroCadastro: '',
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'modifica_nome':
            return { ...state, nome: action.payload }
        case 'modifica_sobrenome':
            return { ...state, sobrenome: action.payload }
        case 'buscar_perfil':
            return { ...action.payload }
        case 'editar_perfil':
            return { ...state, loading: true, erroCadastro: '' }
        case 'sucesso_editar':
            return { ...state, ...INITIAL_STATE }
        case 'erro_editar':
            return { ...state, erroCadastro: action.payload, loading: false }
        case 'dados_usuario_logado':
            return { ...state, nome: action.payload.nome, sobrenome: action.payload.sobrenome, foto: action.payload.foto }
        default:
            return state
    }
}