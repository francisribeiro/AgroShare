const INITIAL_STATE = {
    tipo: '',
    marca: '',
    modelo: '',
    ano: '',
    cidade: '',
    estado: '',
    foto: 'false',
    descricao: '',
    titulo: '',
    preco: '',
    erroCadastro: '',
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'editar_anuncio':
            return { ...action.payload }
        case 'modifica_tipo':
            return { ...state, tipo: action.payload }
        case 'modifica_marca':
            return { ...state, marca: action.payload }
        case 'modifica_modelo':
            return { ...state, modelo: action.payload }
        case 'modifica_ano':
            return { ...state, ano: action.payload }
        case 'modifica_cidade':
            return { ...state, cidade: action.payload }
        case 'modifica_estado':
            return { ...state, estado: action.payload }
        case 'modifica_foto':
            return { ...state, foto: action.payload }
        case 'modifica_descricao':
            return { ...state, descricao: action.payload }
        case 'modifica_titulo':
            return { ...state, titulo: action.payload }
        case 'modifica_preco':
            return { ...state, preco: action.payload }
        case 'cadastrar_anuncio':
            return { ...state, loading: true, erroCadastro: '' }
        case 'erro_cadastro':
            return { ...state, erroCadastro: action.payload, loading: false }
        case 'sucesso_anuncio':
            return { ...state, ...INITIAL_STATE }
        default:
            return state
    }
}

