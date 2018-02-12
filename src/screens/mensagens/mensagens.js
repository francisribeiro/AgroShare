import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon, Title } from 'native-base'
import { View } from 'react-native'
import IconBadge from 'react-native-icon-badge'

// Hideable View
import HideableView from '../common/hideableView'

// Search
import Search from '../../screens/common/search'

// List Component
import ListMensagens from './listMensagens'

// Global Styles
import globalStyles from '../common/globalStyles'

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
            return (
                <Search placeholder='Encontrar mensagens' />
            )
        else
            return null
    }

    // Mensagens screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation

        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header noShadow androidStatusBarColor='#018163' style={{ backgroundColor: globalStyles.bg }}>
                    <Body>
                        <Title style={{ width: 187, paddingLeft: 10 }}>Lista de Mensagens</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.toggle}>
                            <Icon name='ios-search-outline' style={{ fontSize: 28 }} />
                        </Button>
                        <Button transparent>
                            <IconBadge
                                MainElement={<Icon name='ios-notifications-outline' style={{ fontSize: 32, paddingRight: 5 }} />}
                                BadgeElement={<Text style={{ color: '#FFFFFF', fontSize: 12 }}>2</Text>}
                                IconBadgeStyle={{ marginRight: 0, backgroundColor: '#ef1629', height: 18, width: 18 }}
                                Hidden={false}
                            />
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