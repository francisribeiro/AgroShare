import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon, Title } from 'native-base'
import { View, TouchableOpacity } from 'react-native'

// Hideable View
import HideableView from '../common/hideableView'

// Search
import Search from '../../screens/common/search'

// List Component
import ListMaquinas from './listMaquinas'

// Global Styles
import globalStyles from '../common/globalStyles'

export default class Maquinas extends Component {

    // StackNavigator Header configurations
    static navigationOptions = { title: 'Maquinas', header: null }

    constructor(props) {
        super(props)
        this.state = { visible: false }
        this.toggle = this.toggle.bind(this)
    }

    toggle() { this.setState({ visible: !this.state.visible }) }

    show() {
        if (this.state.visible)
            return (
                <Search placeholder='Encontrar mensagens' />
            )
        else
            return null
    }

    // Maquinas screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation

        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header androidStatusBarColor='#018163' style={{ backgroundColor: '#018163', height: 70 }}>
                    <Body style={{ paddingLeft: 5 }}>
                        <Title style={{ fontSize: 20, width: 167 }}> Minhas máquinas</Title>
                    </Body>

                    <Right>
                        <Button transparent onPress={this.toggle}>
                            <Icon name='ios-search-outline' style={{ fontSize: 28, color: '#fff' }} />
                        </Button>

                        <Button transparent>
                            <Icon name='ios-add-circle-outline' onPress={() => { navigate('PasswordRecovery') }} style={{ fontSize: 28, color: '#fff', paddingRight: 5 }} />
                        </Button>
                    </Right>
                </Header>

                <Content>
                    <HideableView visible={this.state.visible}>
                        {this.show()}
                    </HideableView>

                    <ListMaquinas />
                </Content>

                <TouchableOpacity style={globalStyles.floatingButton2} onPress={() => { navigate('PasswordRecovery') }}>
                    <Icon style={globalStyles.floatingButtonIcon2} name='md-add' />
                </TouchableOpacity>
            </Container >
        )
    }
}