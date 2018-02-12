import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon } from 'native-base'
import { View } from 'react-native'

// Search
import Search from '../common/search'

// List Component
import ListMaquinas from './listMaquinas'

// Global Styles
import globalStyles from '../common/globalStyles'

export default class Maquinas extends Component {

    // StackNavigator Header configurations
    static navigationOptions = { title: 'Maquinas', header: null }

    // Maquinas screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation

        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header noShadow androidStatusBarColor='#018163' style={{ backgroundColor: globalStyles.bg, height: 85 }}>
                    <Body>
                        <Button iconRight full large onPress={() => navigate('PasswordRecovery')} style={globalStyles.fullButtonHeader}>
                            <Icon name='ios-add-circle-outline' style={{ fontSize: 30, textAlign: 'left' }} />
                            <View><Text style={{
                                fontSize: 17,
                                color: '#fff',
                                paddingBottom: 10
                            }}>Alugue sua máquina . Comece já..</Text></View>
                        </Button>
                    </Body>
                </Header>

                <Content>
                    <Search placeholder='Encontrar uma máquina' />
                    <ListMaquinas />
                </Content>
            </Container>
        )
    }
}