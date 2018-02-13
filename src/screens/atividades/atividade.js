import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon, Title } from 'native-base'
import { View } from 'react-native'
import IconBadge from 'react-native-icon-badge'

// Global Styles
import globalStyles from '../common/globalStyles'

export default class Mensagens extends Component {

    // StackNavigator Header configurations
    static navigationOptions = { title: 'Atividades', header: null }

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