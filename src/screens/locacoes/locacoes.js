import React, { Component } from 'react'
import { Container, Header, Title, Button, Icon, Tabs, Tab, Right, Body, Text, TabHeading } from 'native-base'
import { View } from 'react-native'

import globalStyles from '../common/globalStyles' // Global Styles
import EmAndamento from './emAndamento' // Em Andamento Component
import Aguardando from './aguardando' // Aguardando Component

export default class Locacoes extends Component {
    // StackNavigator Header configurations
    static navigationOptions = { title: 'Locacoes', header: null }

    // Locações screen
    render() {
        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header hasTabs androidStatusBarColor='#018163' style={{ backgroundColor: globalStyles.bg, height: 60 }}>
                    <Body style={{ paddingLeft: 13, paddingTop: 10 }}>
                        <Title style={{ fontSize: 20 }}>Minhas locações</Title>
                    </Body>

                    <Right>
                        <Button transparent style={{ paddingTop: 15 }}>
                            <Icon name='md-more' style={{ fontSize: 28 }} />
                        </Button>
                    </Right>
                </Header>

                <Tabs tabBarUnderlineStyle={{ backgroundColor: '#fff', borderBottomColor: '#eaeaea', borderBottomWidth: 0.9 }}>
                    <Tab
                        heading='EM ANDAMENTO'
                        tabStyle={{ backgroundColor: globalStyles.bg }}
                        textStyle={{ color: 'rgba(255, 255, 255, 0.6)', fontWeight: 'bold', fontSize: 14 }}
                        activeTabStyle={{ backgroundColor: globalStyles.bg }}
                        activeTextStyle={{ fontSize: 14 }}>
                        <EmAndamento />
                    </Tab>

                    <Tab
                        heading={
                            <TabHeading style={{ backgroundColor: globalStyles.bg }}>
                                <Text style={{ fontSize: 14 }}>AGUARDANDO</Text>
                                <View style={globalStyles.tabBadgeWhite}>
                                    <Text style={{ fontSize: 14, color: '#018163', fontWeight: 'bold' }}>1</Text>
                                </View>
                            </TabHeading>}>
                        <Aguardando />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}