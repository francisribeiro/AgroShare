import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'

import FooterMenu_2 from '../../screens/switchProfile/common/footerMenu_2' //Toolbar
import Explorar from '../../screens/switchProfile/explorar/explorar' // Explorar
import Perfil_2 from '../../screens/switchProfile/perfil/perfil_2' // Explorar
import Locacoes_2 from '../../screens/switchProfile/locacoes/locacoes_2' // Explorar


// TabRoutes path
const _TabRoutes_2 = TabNavigator(
    {
        Explorar: { screen: Explorar },
        Perfil_2: { screen: Perfil_2 },
        Locacoes_2: { screen: Locacoes_2 },

    }, {
        tabBarComponent: FooterMenu_2,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
)

export default _TabRoutes_2