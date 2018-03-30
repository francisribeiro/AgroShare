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

export const CancelarSolicitacao = (locatario, aluguel, rota) => {
    return dispatch => {
        firebase.db.ref(`/Alugueis/${locatario}/${aluguel}`).remove()
            .then(value => AceitarAluguelSuccesso2(dispatch, rota))
    }
}

const AceitarAluguelSuccesso = (dispatch) => {
    dispatch(NavigationActions.reset({
        index: 0, key: null, actions: [NavigationActions.navigate({ routeName: 'TabRoutes' })]
    }))
}

const AceitarAluguelSuccesso2 = (dispatch, rota) => {
    dispatch(NavigationActions.reset({
        index: 0, key: null, actions: [NavigationActions.navigate({ routeName: rota })]
    }))
}

export const adicionaContato = email => {

    return dispatch => {

        firebase.db.ref(`/Usuarios/${email}`)
            .once('value')
            .then(snapshot => {
                if (snapshot.val()) {
                    adicionaContatoSucesso(dispatch, snapshot.val().nome, snapshot.val().sobrenome, email)
                }
            })
    }
}

const adicionaContatoSucesso = (dispatch, nome, sobrenome, email) => {
    dispatch({ type: 'ADICIONA_CONTATO_SUCESSO', payload: true })
    dispatch(NavigationActions.navigate({ routeName: 'Chat_2', params: { nome, sobrenome, email } }))
}

export const contatosUsuarioFetch = () => {
    return (dispatch) => {
        let emailUsuarioB64 = b64.encode(firebase.auth.currentUser.email);

        firebase.db.ref(`/Conversas/${emailUsuarioB64}`)
            .on("value", snapshot => {
                dispatch({ type: 'LISTA_CONTATO_USUARIO', payload: snapshot.val() })
            })
    }
}

export const NotificacaoMsg = () => {
    return dispatch => {
        let userId = b64.encode(firebase.auth.currentUser.email)

        firebase.db.ref(`Conversas/${userId}`).on('value', (snapshot) => {
            let qtd = 0

            if (snapshot.val() != null)
                Object.keys(snapshot.val()).map(function (objectKey, index) {
                    qtd++
                })

            dispatch({ type: 'quantidade_msg', payload: qtd })
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

        var data = new Date()
        var hora = data.getHours()
        var min = data.getMinutes()
        var str_hora = ''

        if (hora >= 12)
            str_hora = hora + ':' + min + ' PM'
        else
            str_hora = hora + ':' + min + ' AM'

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

        firebase.db.ref(`/Conversas/${usuarioEmailB64}/${contatoEmailB64}`)
            .set({ nome: nome, sobrenome: sobrenome, email: email, mensagem: mensagem, hora: str_hora })


        firebase.db.ref(`/Usuarios/${usuarioEmailB64}`)
            .once("value")
            .then(snapshot => {
                firebase.db.ref(`/Conversas/${contatoEmailB64}/${usuarioEmailB64}`)
                    .set({ nome: snapshot.val().nome, sobrenome: snapshot.val().sobrenome, email: usuarioEmailB64, mensagem: mensagem, hora: str_hora })
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
