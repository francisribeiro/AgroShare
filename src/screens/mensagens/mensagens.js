import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon, Title } from 'native-base'
import { View } from 'react-native'
import IconBadge from 'react-native-icon-badge'

// Search
import Search from '../../screens/common/search'

// List Component
import ListMensagens from './listMensagens'

// Global Styles
import globalStyles from '../common/globalStyles'

export default class Mensagens extends Component {

    // StackNavigator Header configurations
    static navigationOptions = { title: 'Mensagens', header: null }

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
                        <Button transparent>
                            <IconBadge
                                MainElement={<Icon name='ios-notifications-outline' style={{ fontSize: 35, paddingRight: 5 }} />}
                                BadgeElement={<Text style={{ color: '#FFFFFF', fontSize: 12 }}>2</Text>}
                                IconBadgeStyle={{ marginRight: 0, backgroundColor: '#ef1629' }}
                                Hidden={false}
                            />
                        </Button>

                    </Right>
                </Header>

                <Content >
                    <Search placeholder='Encontrar mensagens' />
                    <ListMensagens />
                </Content>
            </Container >
        )
    }
}