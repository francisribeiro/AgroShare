import React, { Component } from 'react'
import { Container, Header, Title, Button, Icon, Right, Body } from 'native-base'
import { View } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'

import globalStyles from '../../common/globalStyles' // Global Styles
import EmAndamento from './emAndamento_2' // Em Andamento Component
import Aguardando from './aguardando_2' // Aguardando Component
import DefaultTabBar from './tabBar/CustomTabBar' //TabBar customizada

export default class Locacoes extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    // Locações screen
    render() {
        const { navigate } = this.props.navigation

        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header hasTabs androidStatusBarColor='#00695c' style={{ backgroundColor: globalStyles.bg, height: 60 }}>
                    <Body style={{ paddingLeft: 13, paddingTop: 10 }}>
                        <Title style={{ fontSize: 20 }}>Minhas locações</Title>
                    </Body>

                    <Right>
                        <Button transparent style={{ paddingTop: 15 }}>
                            <Icon name='md-more' style={{ fontSize: 28 }} />
                        </Button>
                    </Right>
                </Header>
                <ScrollableTabView
                    initialPage={0}
                    prerenderingSiblingsNumber={1}
                    tabBarTextStyle={{ fontWeight: 'bold', fontSize: 14 }}
                    tabBarActiveTextColor='#ffffff'
                    tabBarInactiveTextColor='rgba(255,255,255,0.6)'
                    tabBarUnderlineStyle={{ backgroundColor: '#ffffff' }}
                    tabBarBackgroundColor='#00695c'
                    renderTabBar={() => <DefaultTabBar notifications={1} />}>
                    <EmAndamento tabLabel='EM ANDAMENTO' navigate={navigate} />
                    <Aguardando tabLabel='AGUARDANDO' navigate={navigate} />
                </ScrollableTabView>
            </Container>
        )
    }
}