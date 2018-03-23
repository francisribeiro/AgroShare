import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'

import globalStyles from '../../common/globalStyles' // Global Styles

export default class Cadastro_1 extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    // Register_1 screen
    render() {
        // StackNavigator props
        const { navigate, goBack } = this.props.navigation

        return (
            <Container style={{ backgroundColor: "#fff" }}>

                <Header noShadow androidStatusBarColor='#00695c' style={{ backgroundColor: '#fff' }}>
                    <Left>
                        <Button transparent onPress={() => goBack(null)}>
                            <Icon name='arrow-back' style={{ color: globalStyles.bg }} />
                        </Button>
                    </Left>

                    <Right />
                </Header>

                <Content style={{ padding: 10 }}>
                    <View style={{ paddingLeft: 15, paddingBottom: 32 }}>
                        <Text style={globalStyles.pagTitulo2}>Vamos preparar sua máquina para ser alugada.</Text>
                    </View>

                    <Text style={globalStyles.txtDescription2}>
                        Agora passaremos por diversos passos, onde em cada passo serão solicitadas informações referentes
                        a sua máquina, localização, preço, etc...
                    </Text>

                </Content>

                <View style={globalStyles.floatingButton2}>
                    <Button rounded onPress={() => navigate('Cadastro_2')} style={{ paddingLeft: 20, backgroundColor: globalStyles.bg }}>
                        <Text style={{ fontSize: 18, color: '#fff', marginBottom: 3 }}>Continuar</Text>
                        <Icon name='ios-arrow-forward' style={{ fontSize: 25, color: '#fff', paddingTop: 2 }} />
                    </Button>
                </View>
            </Container>
        )
    }
}