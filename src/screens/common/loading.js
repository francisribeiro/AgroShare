import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon, Title, Thumbnail, Spinner } from 'native-base'
import { View, TouchableOpacity } from 'react-native'
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
            <Container style={{ backgroundColor: '#fff' }}>
                <Content style={{ paddingTop: 200 }}>
                    <Spinner color={globalStyles.bg} />
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: '#585858' }}>Aguarde um momento...</Text>
                    </View>
                </Content>
            </Container >
        )
    }
}
