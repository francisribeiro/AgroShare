import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon } from "native-base"
import SingleCard from './singleCard'

export default class Anuncios extends Component {

    // StackNavigator Header configurations
    static navigationOptions = { title: 'Anuncios', header: null }

    // Home screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation

        return (
            <Container>
                <Header noShadow androidStatusBarColor='#237C4E' style={{ backgroundColor: '#237C4E', height: 70 }}>
                    <Body>
                        <Button iconRight full success onPress={() => navigate('PasswordRecovery')}>
                            <Icon name='ios-create' style={{ fontSize: 30 }} />
                            <Text style={{
                                fontSize: 18,
                                color: '#fff',
                                borderColor: '#fff',
                                borderStyle: 'solid',
                                paddingBottom: 2
                            }}>Anunciar uma nova máquina</Text>
                        </Button>
                    </Body>
                </Header>

                <Content style={{ margin: 8 }}>
                    <SingleCard />
                    <SingleCard />
                    <SingleCard />
                    <SingleCard />
                    <SingleCard />
                </Content>
            </Container>
        )
    }
}