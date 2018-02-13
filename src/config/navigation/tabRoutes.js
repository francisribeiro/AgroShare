import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'

import FooterMenu from '../../screens/common/footerMenu' //Toolbar
import Anuncios from '../../screens/anuncio/anuncios'// Anúncios
import Mensagens from '../../screens/mensagens/mensagens'// Mensagens
import Locacoes from '../../screens/locacoes/locacoes'// Locações
import Atividades from '../../screens/atividades/atividade' // Atividades

// TabRoutes path
const _TabRoutes = TabNavigator(
    {
        Anuncios: { screen: Anuncios },
        Mensagens: { screen: Mensagens },
        Locacoes: { screen: Locacoes },
        Atividades: { screen: Atividades }
    }, {
        tabBarComponent: FooterMenu,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
)

export default _TabRoutes