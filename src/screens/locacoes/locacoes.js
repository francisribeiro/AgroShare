import React, { Component } from 'react'
import { Container, Header, Title, Button, Icon, Tabs, Tab, Right, Body, Text, TabHeading } from 'native-base'
import { View } from 'react-native'

import globalStyles from '../common/globalStyles' // Global Styles

export default class Locacoes extends Component {
    // StackNavigator Header configurations
    static navigationOptions = { title: 'Locacoes', header: null }

    // Locações screen
    render() {
        return (
            <Container>
                <Header hasTabs androidStatusBarColor='#018163' style={{ backgroundColor: globalStyles.bg, height: 60 }}>
                    <Body style={{ paddingLeft: 13, paddingTop: 10 }}>
                        <Title style={{ fontSize: 20 }}>Minhas locações</Title>
                    </Body>
                    
                    <Right>
                        <Button transparent style={{ paddingTop: 15 }}>
                            <Icon name='md-more' style={{ fontSize: 28}} />
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
                        <View style={{ padding: 20 }}>
                            <Text style={{ fontSize: 18 }}>Não tem nada aqui, passe para o lado...</Text>
                        </View>
                    </Tab>

                    <Tab
                        heading={
                            <TabHeading style={{ backgroundColor: globalStyles.bg }}>
                                <Text style={{ fontSize: 14 }}>AGUARDANDO</Text>
                                <View style={globalStyles.tabBadgeWhite}>
                                    <Text style={{ fontSize: 14, color: '#018163', fontWeight: 'bold' }}>1</Text>
                                </View>
                            </TabHeading>}>
                        <View style={{ padding: 20 }}>
                            <Text style={{ fontSize: 18 }}>Também não tem nada aqui não!</Text>
                        </View>
                    </Tab>
                </Tabs>
            </Container >
        )
    }
}