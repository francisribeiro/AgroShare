import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'

import FooterMenu from '../../screens/common/footerMenu' //Toolbar
import Anuncios from '../../screens/anuncio/anuncios' // Anúncios
import Mensagens from '../../screens/mensagens/mensagens'// Mensagens
import Locacoes from '../../screens/locacoes/locacoes'// Locações
import Atividade from '../../screens/atividade/atividade' // Atividades
import Perfil from '../../screens/perfil/perfil' // Perfil

// TabRoutes path
const _TabRoutes = TabNavigator(
    {
        Anuncios: { screen: Anuncios },
        Locacoes: { screen: Locacoes },
        Atividade: { screen: Atividade },
        Mensagens: { screen: Mensagens },
        Perfil: { screen: Perfil }
    }, {
        tabBarComponent: FooterMenu,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
)

export default _TabRoutes