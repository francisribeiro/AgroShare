import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon, Title } from 'native-base'
import { View } from 'react-native'

import globalStyles from '../common/globalStyles' // Global Styles

export default class Perfil extends Component {

    // StackNavigator Header configurations
    static navigationOptions = { title: 'Perfil', header: null }

    // Atividades screen
    render() {
        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header androidStatusBarColor='#018163' style={{ backgroundColor: globalStyles.bg, height: 70 }}>

                </Header>

                <Content>

                </Content>
            </Container >
        )
    }
}