import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body } from 'native-base'

// Global Styles
import globalStyles from '../common/globalStyles'

export default class Maquinas extends Component {

    // StackNavigator Header configurations
    static navigationOptions = { title: 'Maquinas', header: null }

    // Home screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation

        return (
            <Container>
                <Header noShadow androidStatusBarColor='#018163' style={{ backgroundColor: globalStyles.bg, height: 82 }}>
                    <Body>
                        
                    </Body>
                </Header>

                <Content>

                </Content>
            </Container>
        )
    }
}