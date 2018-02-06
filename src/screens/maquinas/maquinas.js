import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body } from "native-base"
import { View } from 'react-native'

export default class Maquinas extends Component {

    // StackNavigator Header configurations
    static navigationOptions = { title: 'Maquinas', header: null }

    // Home screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation

        return (
            <Container>
                <Header noShadow androidStatusBarColor='#237C4E' style={{ backgroundColor: '#237C4E' }}>
                    <Body>
                        <Button transparent onPress={() => navigate('PasswordRecovery')}>
                            <View style={{
                                padding: 10,
                                paddingLeft: 40,
                                paddingRight: 40,
                                borderRadius: 2,
                                borderWidth: 1,
                                borderColor: 'rgba(117, 187, 125, 0.3)',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'rgba(117, 187, 125, 0.3)'
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    color: '#fff',
                                    borderColor: '#fff',
                                    borderStyle: 'solid'
                                }}>Nova Máquina</Text>
                            </View>
                        </Button>
                    </Body>
                </Header>

                <Content>

                </Content>
            </Container>
        )
    }
}