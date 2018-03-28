import { firebase } from '../config/firebase'
import b64 from 'base-64'
import { NavigationActions } from 'react-navigation'

export const getUserData = () => {
    return dispatch => {
        let userId = b64.encode(firebase.auth.currentUser.email)

        firebase.db.ref(`Usuarios/${userId}`).on('value', (snapshot) => {
            dispatch({ type: 'dados_usuario_logado', payload: snapshot.val() })
        })
    }
}

export const anunciosFetch = () => {
    return dispatch => {
        let userId = b64.encode(firebase.auth.currentUser.email)

        firebase.db.ref(`Anuncios/${userId}`).on('value', (snapshot) => {
            dispatch({ type: 'anuncios_usuario_logado', payload: snapshot.val() })
        })
    }
}

export const todosAnunciosFetch = () => {
    return dispatch => {
        firebase.db.ref('Anuncios').on('value', (snapshot) => {
            dispatch({ type: 'todos_anuncios', payload: snapshot.val() })
        })
    }
}

export const AlugueisFetch = () => {
    return dispatch => {
        firebase.db.ref(`Alugueis`).on('value', (snapshot) => {
            dispatch({ type: 'alugueis_usuario_logado', payload: snapshot.val() })
        })
    }
}

export const NotificacaoAguardandoLocatario = () => {
    return dispatch => {
        let userId = b64.encode(firebase.auth.currentUser.email)

        firebase.db.ref(`Alugueis/${userId}`).on('value', (snapshot) => {
            let qtd = 0

            if (snapshot.val() != null)
                Object.keys(snapshot.val()).map(function (objectKey, index) {
                    if (snapshot.val()[objectKey].ativo == false)
                        qtd++
                })

            dispatch({ type: 'quantidade_aguardando_locatario', payload: qtd })
        })
    }
}


export const NotificacaoAguardandoLocador = (locador) => {
    return dispatch => {

        firebase.db.ref(`Alugueis`).on('value', (snapshot) => {
            let qtd = 0

            const alugueis = _.map(snapshot.val(), (val, locatario) => {
                return { ...val, locatario }
            })

            const result2 = alugueis.reduce((b, myObj) => {
                var t = Object.keys(myObj).forEach(e => {
                    if (typeof myObj[e] === 'object') {
                        if (myObj[e].locador == locador) {
                            if (!myObj[e].ativo)
                                qtd++
                        }
                    }
                })

                return null
            }, [])

            dispatch({ type: 'quantidade_aguardando_locador', payload: qtd })
        })
    }
}

export const AceitarAluguel = (locatario, aluguel) => {
    return dispatch => {
        firebase.db.ref(`/Alugueis/${locatario}/${aluguel}`).update({ ativo: true })
            .then(value => AceitarAluguelSuccesso(dispatch))
    }
}

export const SolicitarCancelamento = (locatario, aluguel) => {
    return dispatch => {
        firebase.db.ref(`/Alugueis/${locatario}/${aluguel}`).update({ ativo: false })
            .then(value => AceitarAluguelSuccesso(dispatch))
    }
}

export const CancelarSolicitacao = (locatario, aluguel) => {
    return dispatch => {
        firebase.db.ref(`/Alugueis/${locatario}/${aluguel}`).remove()
            .then(value => AceitarAluguelSuccesso2(dispatch))
    }
}

const AceitarAluguelSuccesso = (dispatch) => {
    dispatch(NavigationActions.reset({
        index: 0, key: null, actions: [NavigationActions.navigate({ routeName: 'TabRoutes' })]
    }))
}

const AceitarAluguelSuccesso2 = (dispatch) => {
    dispatch(NavigationActions.reset({
        index: 0, key: null, actions: [NavigationActions.navigate({ routeName: 'TabRoutes_2' })]
    }))
}

export const adicionaContato = email => {

    return dispatch => {

        firebase.db.ref(`/Usuarios/${email}`)
            .once('value')
            .then(snapshot => {
                if (snapshot.val()) {
                    //email do contato que queremos adicionar
                    //email do usuário autenticado
                    let emailUsuarioB64 = b64.encode(firebase.auth.currentUser.email);

                    firebase.db.ref(`/Contatos/${emailUsuarioB64}`)
                        .push({ email, nome: snapshot.val().nome, sobrenome: snapshot.val().sobrenome })
                        .then(() => adicionaContatoSucesso(dispatch, snapshot.val().nome, snapshot.val().sobrenome, email))
                        .catch(erro => adicionaContatoErro(erro.message, dispatch))

                } else {
                    dispatch(
                        {
                            type: 'ADICIONA_CONTATO_ERRO',
                            payload: 'E-mail informado não corresponde a um usuário válido!'
                        }
                    )
                }
            })
    }
}

const adicionaContatoErro = (erro, dispatch) => (
    dispatch(
        {
            type: 'ADICIONA_CONTATO_ERRO',
            payload: erro
        }
    )
)

const adicionaContatoSucesso = (dispatch, nome, sobrenome, email) => {
    dispatch({ type: 'ADICIONA_CONTATO_SUCESSO', payload: true })
    dispatch(NavigationActions.navigate({ routeName: 'Chat_2', params: { nome, sobrenome, email } }))
}

export const contatosUsuarioFetch = () => {
    return (dispatch) => {
        let emailUsuarioB64 = b64.encode(firebase.auth.currentUser.email);

        firebase.db.ref(`/Contatos/${emailUsuarioB64}`)
            .on("value", snapshot => {
                dispatch({ type: 'LISTA_CONTATO_USUARIO', payload: snapshot.val() })
            })
    }
}

export const modificaMensagem = texto => {
    return ({
        type: 'MODIFICA_MENSAGEM',
        payload: texto
    })
}

export const enviarMensagem = (mensagem, nome, sobrenome, email) => {

    //dados do usuario (email)
    const usuarioEmail = firebase.auth.currentUser.email;

    return dispatch => {

        //conversão para base 64
        const usuarioEmailB64 = b64.encode(usuarioEmail)
        const contatoEmailB64 = email

        firebase.db.ref(`/Mensagens/${usuarioEmailB64}/${contatoEmailB64}`)
            .push({ mensagem, tipo: 'e' })
            .then(() => {
                firebase.db.ref(`/Mensagens/${contatoEmailB64}/${usuarioEmailB64}`)
                    .push({ mensagem, tipo: 'r' })
                    .then(() => dispatch({ type: 'ENVIA_MENSAGEM_SUCESSO' }))
            })
            .then(() => { //armazenar o cabeçalho de conversa do usuário autenticado
                firebase.db.ref(`/Usuario_Conversas/${usuarioEmailB64}/${contatoEmailB64}`)
                    .set({ nome: nome, sobrenome: sobrenome, email: contatoEmail })

            })
            .then(() => { //armazenar o cabeçalho de conversa do contato

                firebase.database().ref(`/Contatos/${usuarioEmailB64}`)
                    .once("value")
                    .then(snapshot => {
                        firebase.db.ref(`/Usuario_Conversas/${contatoEmailB64}/${usuarioEmailB64}`)
                            .set({ nome: snapshot.val().nome, sobrenome: snapshot.val().sobrenome, email: snapshot.val().email })
                    })
            })
    }

}

export const conversaUsuarioFetch = contatoEmail => {

    //compor os emails na base64
    let usuarioEmailB64 = b64.encode(firebase.auth.currentUser.email)
    let contatoEmailB64 = contatoEmail

    return dispatch => {
        firebase.db.ref(`/Mensagens/${usuarioEmailB64}/${contatoEmailB64}`)
            .on("value", snapshot => {
                dispatch({ type: 'LISTA_CONVERSA_USUARIO', payload: snapshot.val() })
            })
    }
}
