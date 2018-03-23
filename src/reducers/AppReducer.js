const INITIAL_STATE = { nome: '', sobrenome: '' }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'dados_usuario_logado':
            return { ...state, nome: action.payload.nome, sobrenome: action.payload.sobrenome }
        default:
            return state
    }
}