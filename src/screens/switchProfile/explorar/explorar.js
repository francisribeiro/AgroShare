import React, { Component } from 'react'
import { Container, Content, Header, Button, Text, Body, Icon, Input, Item } from 'native-base'
import { View, TouchableOpacity, ListView } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

import globalStyles from '../../common/globalStyles' // Global Styles


export default class Explorar extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    // Anúncios screen
    render() {
        // StackNavigator props
        const { navigate } = this.props.navigation

        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header searchBar rounded androidStatusBarColor='#00695c' style={{ backgroundColor: globalStyles.bg, height: 70 }}>
                    <Item style={{ height: 46 }}>
                        <Icon active name="" />
                        <Input placeholder="Encontre uma máquina..." placeholderTextColor='rgba(88,88,88,0.8)' />
                        <Icon active name="ios-search-outline" />
                    </Item>
                </Header>

                <Content>
                    <View style={{ paddingHorizontal: 10, paddingTop: 16 }}>

                    </View>
                </Content>
            </Container>
        )
    }
}
