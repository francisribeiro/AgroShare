import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'

import FooterMenu from '../../screens/common/footerMenu'

// Anúncios
import Anuncios from '../../screens/anuncio/anuncios'

// Mensagens
import Mensagens from '../../screens/mensagens/mensagens'

// Locações
import Locacoes from '../../screens/locacoes/locacoes'

// TabRoutes path
const _TabRoutes = TabNavigator(
    {
        Anuncios: { screen: Anuncios },
        Mensagens: { screen: Mensagens },
        Locacoes: { screen: Locacoes }
    }, {
        tabBarComponent: FooterMenu,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
)

export default _TabRoutes