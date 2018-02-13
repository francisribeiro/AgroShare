import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, IconNB } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'

import globalStyles from '../common/globalStyles' // Global Styles

// Tava bebado quando escrevi isso daqui, REVER isso depois
export default class PasswordRecovery extends Component {

    // StackNavigator Header configurations
    static navigationOptions = { title: 'PasswordRecovery', header: null }

    // PasswordRecovery screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation

        return (
            <Container style={{ backgroundColor: globalStyles.bg }}>

                <Header noShadow androidStatusBarColor='#018163' style={{ backgroundColor: 'transparent' }}>
                    <Left>
                        <Button transparent onPress={() => goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Right />
                </Header>

                <Content style={{ padding: 10 }}>
                    <View style={{ paddingLeft: 15, paddingBottom: 20 }}>
                        <Text style={globalStyles.pagTitulo}>Esqueceu a sua senha?</Text>
                    </View>

                    <Text style={globalStyles.txtDescription}>
                        Insira seu email para encontra a sua conta.
                    </Text>

                    <Form>
                        <View style={{ paddingRight: 15 }}>
                            <Item stackedLabel>
                                <Label style={globalStyles.inputLabel}>ENDEREÇO DE EMAIL</Label>
                                <Input keyboardType='email-address' returnKeyType='next' selectionColor='#fff' style={globalStyles.input} />
                            </Item>
                        </View>
                    </Form>
                </Content>

                <TouchableOpacity style={globalStyles.floatingButton} onPress={() => { navigate('Login'); Keyboard.dismiss() }}>
                    <IconNB style={globalStyles.floatingButtonIcon} name='ios-arrow-forward' />
                </TouchableOpacity>
            </Container >
        )
    }
}