import React, { Component } from "react"
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, Fab, IconNB } from "native-base"
import { StatusBar, View, Keyboard } from 'react-native'
import { StackNavigator } from 'react-navigation'

// Tava bebado quando escrevi isso daqui, REVER isso depois
export default class PasswordRecovery extends Component {
    static navigationOptions = { title: 'PasswordRecovery', header: null }

    render() {
        const { navigate } = this.props.navigation

        return (
            <Container style={{ backgroundColor: '#237C4E' }}>

                <StatusBar backgroundColor='#237C4E' />

                <Header style={{ backgroundColor: '#237C4E' }}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Right />
                </Header>

                <Content style={{ padding: 10 }}>
                    <View style={{ paddingLeft: 15, paddingBottom: 20 }}>
                        <Text style={{ fontSize: 32, color: '#fff', fontWeight: 'bold' }}>Esqueceu a sua senha?</Text>
                    </View>

                    <Text style={{ paddingLeft: 15, paddingBottom: 25, color: '#fff', fontSize: 18 }}>
                        Insira seu email para encontra a sua conta.
                    </Text>

                    <Form>
                        <View style={{ paddingRight: 15 }}>
                            <Item stackedLabel>
                                <Label style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>ENDEREÇO DE EMAIL</Label>
                                <Input keyboardType='email-address' returnKeyType='next' selectionColor='#fff' style={{ color: '#fff', fontSize: 25 }} />
                            </Item>
                        </View>
                    </Form>
                </Content>

                <View>
                    <Fab active={false} style={{ backgroundColor: '#fff' }} position='bottomRight'
                        onPress={() => {
                            Keyboard.dismiss()
                            navigate('Login')
                        }}>
                        <IconNB style={{ color: '#237C4E', fontSize: 30 }} name="ios-arrow-forward" />
                    </Fab>
                </View>
            </Container >
        )
    }
}