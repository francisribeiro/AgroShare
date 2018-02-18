import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon, Title, Badge } from 'native-base'
import { View, TouchableOpacity } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'

import globalStyles from '../common/globalStyles' // Global Styles

export default class ProfileMaq extends Component {
    // ProfileMaq screen
    render() {
        // StackNavigator props
        const { navigate, goBack } = this.props.navigation

        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header androidStatusBarColor='#00695c' style={{ backgroundColor: globalStyles.bg, height: 70 }}>
                    <Left>
                        <Button transparent onPress={() => goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body style={{ paddingLeft: 0 }}>
                        <Title style={{ fontSize: 20, width: 207 }}>ProfileMaq</Title>
                    </Body>
                </Header>

            </Container>
        )
    }
}