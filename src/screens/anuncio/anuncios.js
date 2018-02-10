import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon } from 'native-base'
import { View } from 'react-native'
import SingleCard from './singleCard'

// Global Styles
import globalStyles from '../common/globalStyles'

export default class Anuncios extends Component {

    // StackNavigator Header configurations
    static navigationOptions = { title: 'Anuncios', header: null }

    // Home screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation

        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header noShadow androidStatusBarColor='#018163' style={{ backgroundColor: globalStyles.bg, height: 82 }}>
                    <Body>
                        <Button iconRight full large success onPress={() => navigate('PasswordRecovery')}>
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

                <Content>
                    <View style={{ padding: 14 }}>
                        <SingleCard />
                        <SingleCard />
                        <SingleCard />
                        <SingleCard />
                        <SingleCard />
                    </View>
                </Content>
            </Container>
        )
    }
}