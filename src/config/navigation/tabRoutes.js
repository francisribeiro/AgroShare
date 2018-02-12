import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'

import FooterMenu from '../../screens/common/footerMenu'

// Anúncios
import Anuncios from '../../screens/anuncio/anuncios'

// Máquinas
import Maquinas from '../../screens/maquinas/maquinas'

// Mensagens
import Mensagens from '../../screens/mensagens/mensagens'

// TabRoutes path
const _TabRoutes = TabNavigator(
    {
        Anuncios: { screen: Anuncios },
        Maquinas: { screen: Maquinas },
        Mensagens: { screen: Mensagens }
    }, {
        tabBarComponent: FooterMenu,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
)

export default _TabRoutes