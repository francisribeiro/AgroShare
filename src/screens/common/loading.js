import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon, Title, Thumbnail, Spinner } from 'native-base'
import { View, TouchableOpacity, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'
import globalStyles from './globalStyles'

export default class Loading extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    componentDidMount() {
        const { params } = this.props.navigation.state
        const troca = params ? params.troca : null
        this.switchProfile(troca)
    }

    switchProfile(troca) {
        if (troca == 1)
            this.props.navigation.dispatch(NavigationActions.reset({
                index: 0,
                key: null,
                actions: [NavigationActions.navigate({ routeName: 'TabRoutes_2' })]
            }))
        else
            this.props.navigation.dispatch(NavigationActions.reset({
                index: 0,
                key: null,
                actions: [NavigationActions.navigate({ routeName: 'TabRoutes' })]
            }))
    }

    render() {
        return (
            <Container style={{ backgroundColor: globalStyles.bg }}>
                <Content style={{ paddingTop: 120 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 20 }}>
                        <Image style={{ width: 210, height: 154 }} source={require('../../assets/images/logo.png')} />
                    </View>
                    <Spinner color='#fff' />
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 17, color: '#fff' }}>Aguarde um momento...</Text>
                    </View>
                </Content>
            </Container >
        )
    }
}
