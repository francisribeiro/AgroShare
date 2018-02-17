import React, { Component } from 'react'
import { Container, Content, Header, Right, Button, Text, Body, Icon, Title } from 'native-base'
import { View } from 'react-native'
import IconBadge from 'react-native-icon-badge'

import HideableView from '../common/hideableView' // Hideable View
import Search from '../../screens/common/search' // Search
import ListMensagens from './listMensagens' // List Component
import globalStyles from '../common/globalStyles' // Global Styles

export default class Mensagens extends Component {
    // StackNavigator Header configurations
    static navigationOptions = { title: 'Mensagens', header: null }

    constructor(props) {
        super(props)
        this.state = { visible: false }
        this.toggle = this.toggle.bind(this)
    }

    toggle() { this.setState({ visible: !this.state.visible }) }

    show() {
        if (this.state.visible)
            return (<Search placeholder='Encontrar mensagens' />)
        else
            return null
    }

    // Mensagens screen
    render() {
        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header androidStatusBarColor='#00695c' style={{ backgroundColor: globalStyles.bg, height: 70 }}>
                    <Body style={{ paddingLeft: 10 }}>
                        <Title style={{ fontSize: 20, width: 187 }}>Lista de mensagens</Title>
                    </Body>

                    <Right>
                        <Button transparent onPress={this.toggle}>
                            <Icon name='ios-search-outline' style={{ fontSize: 28, color: '#fff' }} />
                        </Button>

                        <Button transparent>
                            <Icon name='md-more' style={{ fontSize: 28 }} />
                        </Button>
                    </Right>
                </Header>

                <Content>
                    <HideableView visible={this.state.visible}>
                        {this.show()}
                    </HideableView>

                    <ListMensagens />
                </Content>
            </Container >
        )
    }
}