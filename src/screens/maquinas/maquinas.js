import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body } from "native-base"

export default class Maquinas extends Component {

    // StackNavigator Header configurations
    static navigationOptions = { title: 'Maquinas', header: null }

    // Home screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation

        return (
            <Container>
                <Header noShadow androidStatusBarColor='#237C4E' style={{ backgroundColor: '#237C4E', height: 70 }}>
                    <Body>
                        
                    </Body>
                </Header>

                <Content>

                </Content>
            </Container>
        )
    }
}