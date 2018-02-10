import React, { Component } from "react"
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, Fab, IconNB } from "native-base"
import { View, Keyboard, StyleSheet, TouchableOpacity } from 'react-native'

// Tava bebado quando escrevi isso daqui, REVER isso depois
export default class PasswordRecovery extends Component {

    // StackNavigator Header configurations
    static navigationOptions = { title: 'PasswordRecovery', header: null }

    // PasswordRecovery screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation

        return (
            <Container style={{ backgroundColor: '#018163' }}>

                <Header noShadow androidStatusBarColor='#018163' style={{ backgroundColor: 'transparent' }}>
                    <Left>
                        <Button transparent onPress={() => goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Right />
                </Header>

                <Content style={{ padding: 10 }}>
                    <View style={{ paddingLeft: 15, paddingBottom: 20 }}>
                        <Text style={{ fontSize: 32, color: '#fff', fontWeight: 'bold' }}>Esqueceu a sua senha?</Text>
                    </View>

                    <Text style={{ paddingLeft: 15, paddingBottom: 25, color: '#fff', fontSize: 19 }}>
                        Insira seu email para encontra a sua conta.
                    </Text>

                    <Form>
                        <View style={{ paddingRight: 15 }}>
                            <Item stackedLabel>
                                <Label style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>ENDEREÇO DE EMAIL</Label>
                                <Input keyboardType='email-address' returnKeyType='next' selectionColor='#fff' style={{ color: '#fff', fontSize: 28, padding: 7, marginTop: 5 }} />
                            </Item>
                        </View>
                    </Form>
                </Content>

                <TouchableOpacity style={styles.floatingButton} onPress={() => { navigate('Login'); Keyboard.dismiss() }}>
                    <IconNB style={{ color: '#018163', fontSize: 30 }} name="ios-arrow-forward" />
                </TouchableOpacity>
            </Container >
        )
    }
}

// Screen styles
const styles = StyleSheet.create({
    floatingButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ffff',
        position: 'absolute',
        bottom: 30,
        right: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})