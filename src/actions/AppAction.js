import { firebase } from '../config/firebase'
import b64 from 'base-64'
import { NavigationActions } from 'react-navigation'

export const getUserData = () => {
    return dispatch => {
        let userId = b64.encode(firebase.auth.currentUser.email)

        firebase.db.ref(`users/${userId}`).on('value', (snapshot) => {
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
    
        firebase.db.ref(`/users/${email}`)
            .once('value')
            .then(snapshot => {
                if(snapshot.val()) 
                console.log(snapshot.val())
                //     //email do contato que queremos adicionar
                //     const dadosUsuario = _.first(_.values(snapshot.val()));
                //     console.log(dadosUsuario);
                    
                //     //email do usuário autenticado
                //     const { currentUser } = firebase.auth();
                //     let emailUsuarioB64 = b64.encode(currentUser.email);

                //     firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
                //         .push({ email, nome: dadosUsuario.nome })
                //         .then(() => adicionaContatoSucesso(dispatch))
                //         .catch(erro => adicionaContatoErro(erro.message, dispatch))

                // } else {
                //     dispatch(
                //         { 
                //             type: ADICIONA_CONTATO_ERRO, 
                //             payload: 'E-mail informado não corresponde a um usuário válido!'
                //         }
                //     )
                // }
            })
    }
}