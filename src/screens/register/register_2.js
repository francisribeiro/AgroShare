import React, { Component } from "react"
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text } from "native-base"
import { View, Keyboard, TouchableOpacity, StyleSheet } from 'react-native'

export default class Register_2 extends Component {

    // StackNavigator Header configurations
    static navigationOptions = { title: 'Register_2', header: null }

    // Register_2 screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation

        return (
            <Container style={{ backgroundColor: '#237C4E' }}>

                <Header noShadow androidStatusBarColor='#237C4E' style={{ backgroundColor: 'transparent' }}>
                    <Left>
                        <Button transparent onPress={() => goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>

                    <Right />
                </Header>

                <Content style={{ padding: 10 }}>
                    <View style={{ paddingLeft: 15, paddingBottom: 32 }}>
                        <Text style={{ fontSize: 32, color: '#fff', fontWeight: 'bold' }}>E o seu email?</Text>
                    </View>

                    <Form>
                        <View style={{ paddingRight: 15 }}>
                            <Item stackedLabel>
                                <Label style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>ENDEREÇO DE EMAIL</Label>
                                <Input keyboardType='email-address' returnKeyType='next' selectionColor='#fff' style={{ color: '#fff', fontSize: 28, padding: 7, marginTop: 5 }} />
                            </Item>
                        </View>
                    </Form>
                </Content>

                <TouchableOpacity style={styles.floatingButton} onPress={() => { navigate('Register_3'); Keyboard.dismiss() }}>
                    <Icon style={{ color: '#237C4E', fontSize: 30 }} name="ios-arrow-forward" />
                </TouchableOpacity>
            </Container>
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