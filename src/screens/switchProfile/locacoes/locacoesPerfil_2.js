import React, { Component } from 'react'
import { Container, Header, Content, Body, Title, Button, Item, Label, Input, Left, Right, Icon, Form, Text, Toast, Spinner, } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { connect } from 'react-redux'

import globalStyles from '../../common/globalStyles' // Global Styles


class locacoesPerfil_2 extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    // ProfileMaq screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation

        return (
            <Container style={{ backgroundColor: '#fff' }}>

                <Header noShadow androidStatusBarColor='#00695c' style={{ backgroundColor: globalStyles.bg, height: 70 }}>
                    <Left>
                        <Button transparent onPress={() => goBack(null)}>
                            <Icon name='arrow-back' style={{ color: '#fff' }} />
                        </Button>
                    </Left>

                    <Body>
                        <Title style={{ fontSize: 20, width: 224 }}>tipoasdasasdasd marca</Title>
                    </Body>

                    <Right />
                </Header>

                <Content style={{ padding: 10 }}>
                    <View style={{ paddingLeft: 15, paddingBottom: 32 }}>
                        <Text style={globalStyles.pagTitulo2}>Leia atentamente as informações abaixo:</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(locacoesPerfil_2)