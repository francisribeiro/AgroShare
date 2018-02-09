import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon } from 'native-base'
import { View } from 'react-native'
import SingleCard from './singleCard'

export default class Anuncios extends Component {

    // StackNavigator Header configurations
    static navigationOptions = { title: 'Anuncios', header: null }

    // Home screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation

        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header noShadow androidStatusBarColor='#237C4E' style={{ backgroundColor: '#237C4E', height: 70 }}>
                    <Body>
                        <Button iconRight full success onPress={() => navigate('PasswordRecovery')}>
                            <Icon name='ios-add-circle-outline' style={{ fontSize: 30, textAlign: 'left' }} />
                            <View><Text style={{
                                fontSize: 18,
                                color: '#fff',
                                borderColor: '#fff',
                                borderStyle: 'solid',
                                paddingBottom: 5
                            }}>Tem uma máquina? Anuncie aqui.</Text></View>
                        </Button>
                    </Body>
                </Header>

                <Content style={{ marginHorizontal: 14, paddingTop: 14 }}>
                    <SingleCard />
                    <SingleCard />
                    <SingleCard />
                    <SingleCard />
                    <SingleCard />
                </Content>
            </Container>
        )
    }
}