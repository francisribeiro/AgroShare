import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { StackNavigator, TabNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation'
import { Platform, BackHandler } from 'react-native'

import { addListener } from '../../utils/redux'
import { t1, t2, t3 } from './transitions'
// Tabs
import TabRoutes from './tabRoutes'
import TabRoutes_2 from './tabRoutes_2'

// Login
import Start from '../../screens/login/start'
import Login from '../../screens/login/login'
import PasswordRecovery from '../../screens/login/passwordRecovery'

// Register
import Register_1 from '../../screens/register/register_1'
import Register_2 from '../../screens/register/register_2'
import Register_3 from '../../screens/register/register_3'
import Register_4 from '../../screens/register/register_4'

// Anuncios
import ProfileMaq from '../../screens/anuncio/profileMaq'
import ProfileMaq_2 from '../../screens/switchProfile/explorar/profileMaq_2'

//Chat
import Chat from '../../screens/mensagens/chat'

//Cadastro 
import Cadastro_1 from '../../screens/anuncio/novoAnuncio/cadastro_1'
import Cadastro_2 from '../../screens/anuncio/novoAnuncio/cadastro_2'
import Cadastro_3 from '../../screens/anuncio/novoAnuncio/cadastro_3'
import Cadastro_4 from '../../screens/anuncio/novoAnuncio/cadastro_4'
import Cadastro_5 from '../../screens/anuncio/novoAnuncio/cadastro_5'
import Cadastro_6 from '../../screens/anuncio/novoAnuncio/cadastro_6'
import Cadastro_7 from '../../screens/anuncio/novoAnuncio/cadastro_7'
import Cadastro_8 from '../../screens/anuncio/novoAnuncio/cadastro_8'
import Cadastro_9 from '../../screens/anuncio/novoAnuncio/cadastro_9'


//Alugar
import Alugar_1 from '../../screens/switchProfile/explorar/alugar_1'
import Alugar_2 from '../../screens/switchProfile/explorar/alugar_2'
import Alugar_3 from '../../screens/switchProfile/explorar/alugar_3'
import Alugar_4 from '../../screens/switchProfile/explorar/alugar_4'

//Loading
import Loading from '../../screens/common/loading'

//Locações Profile
import SolicitacaoAluguel_2 from '../../screens/switchProfile/locacoes/SolicitacaoAluguel_2'
import SolicitacaoAluguel from '../../screens/locacoes/SolicitacaoAluguel'
import MeusAlugueis_2 from '../../screens/switchProfile/locacoes/MeusAlugueis_2'
import MeusAlugueis from '../../screens/locacoes/MeusAlugueis'


// Routes path
const _Main = StackNavigator(
    {
        // Login routes
        Start: { screen: Start },
        Login: { screen: Login },
        PasswordRecovery: { screen: PasswordRecovery },

        // Register routes
        Register_1: { screen: Register_1 },
        Register_2: { screen: Register_2 },
        Register_3: { screen: Register_3 },
        Register_4: { screen: Register_4 }

    }, {
        headerMode: 'none',
        transitionConfig: t1
    }
)

const _addMaq = StackNavigator(
    {
        Cadastro_1: { screen: Cadastro_1 },
        Cadastro_2: { screen: Cadastro_2 },
        Cadastro_3: { screen: Cadastro_3 },
        Cadastro_4: { screen: Cadastro_4 },
        Cadastro_5: { screen: Cadastro_5 },
        Cadastro_6: { screen: Cadastro_6 },
        Cadastro_7: { screen: Cadastro_7 },
        Cadastro_8: { screen: Cadastro_8 },
        Cadastro_9: { screen: Cadastro_9 },
    }, {
        headerMode: 'none',
        transitionConfig: t3
    }
)

const _alugar = StackNavigator(
    {
        ProfileMaq_2: { screen: ProfileMaq_2 }, // Explorer profile
        Alugar_1: { screen: Alugar_1 },
        Alugar_2: { screen: Alugar_2 },
        Alugar_3: { screen: Alugar_3 },
        Alugar_4: { screen: Alugar_4 }
    }, {
        headerMode: 'none',
        transitionConfig: t3
    }
)

const load = StackNavigator(
    {
        Loading: { screen: Loading }
    }, {
        headerMode: 'none',
        transitionConfig: t2
    }
)

export const _Routes = StackNavigator(
    {
        Main: { screen: _Main },
        TabRoutes: { screen: TabRoutes }, // Tabs
        TabRoutes_2: { screen: TabRoutes_2 }, // Tabs
        ProfileMaq: { screen: ProfileMaq }, // Anuncios profile
        Chat: { screen: Chat }, //Chat
        addMaq: { screen: _addMaq },
        load: { screen: load },
        alugar: { screen: _alugar },
        SolicitacaoAluguel_2: { screen: SolicitacaoAluguel_2 },
        SolicitacaoAluguel: { screen: SolicitacaoAluguel },
        MeusAlugueis_2: { screen: MeusAlugueis_2 },
        MeusAlugueis: { screen: MeusAlugueis },
    }, {
        headerMode: 'float',
        transitionConfig: t2
    }

)

class AppWithNavigationState extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired
    }

    componentWillMount() {
        if (Platform.OS !== 'android') return

        BackHandler.addEventListener('hardwareBackPress', () => {
            const { dispatch, nav } = this.props
            if (nav.routes.length === 1 && (nav.routes[0].routeName === 'Start' || nav.routes[0].routeName === 'Start')) return false
            dispatch({ type: 'Navigation/BACK' })
            return true
        })
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') BackHandler.removeEventListener('hardwareBackPress')
    }

    render() {
        const { dispatch, nav } = this.props
        return (
            <_Routes
                navigation={addNavigationHelpers({
                    dispatch,
                    state: nav
                })}
            />
        )
    }
}

const mapStateToProps = state => ({
    nav: state.nav
})

export default connect(mapStateToProps)(AppWithNavigationState)