const INITIAL_STATE = {
    tipo: 'Trator', marca: 'Valtra', modelo: 'BH180', ano: '2014', cidade: 'Piranguçu', estado: 'MG', descricao: 'asdasd asda d asda dasd', titulo: 'vcxvzxccx zxcz xczxc', preco: '25'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
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
        case 'modifica_descricao':
            return { ...state, descricao: action.payload }
        case 'modifica_titulo':
            return { ...state, titulo: action.payload }
        case 'modifica_preco':
            return { ...state, preco: action.payload }
        case 'erro_cadastro':
            return { ...state, erroCadastro: action.payload }
        case 'sucesso_cadastro':
            return { ...state, tipo: '', marca: '', modelo: '', ano: '', cidade: '', estado: '', descricao: '', titulo: '', preco: '' }
        default:
            return state
    }
}
