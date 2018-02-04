import React, { Component } from "react"
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text } from "native-base"
import { View, Keyboard, TouchableOpacity, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'

export default class Register_1 extends Component {

    // StackNavigator Header configurations
    static navigationOptions = { title: 'Register_1', header: null }

    // Register_1 screen
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
                        <Text style={{ fontSize: 32, color: '#fff', fontWeight: 'bold' }}>Qual o seu nome?</Text>
                    </View>

                    <Form>
                        <View style={{ paddingRight: 15 }}>
                            <Item stackedLabel>
                                <Label style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>NOME</Label>
                                <Input returnKeyType='next' selectionColor='#fff' style={{ color: '#fff', fontSize: 28, padding: 7, marginTop: 5 }} />
                            </Item>

                            <Item style={{ paddingTop: 20 }} stackedLabel>
                                <Label style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>SOBRENOME</Label>
                                <Input selectionColor='#fff' style={{ color: '#fff', fontSize: 28, padding: 7, marginTop: 5 }} secureTextEntry />
                            </Item>
                        </View>
                    </Form>
                </Content>

                <TouchableOpacity style={styles.floatingButton} onPress={() => { navigate('Register_2'); Keyboard.dismiss() }}>
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