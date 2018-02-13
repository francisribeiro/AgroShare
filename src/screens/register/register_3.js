import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'

import globalStyles from '../common/globalStyles' // Global Styles

export default class Register_3 extends Component {

    // StackNavigator Header configurations
    static navigationOptions = { title: 'Register_3', header: null }

    // Register_3 screen
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
                    <View style={{ paddingLeft: 15, paddingBottom: 32 }}>
                        <Text style={globalStyles.pagTitulo}>Crie uma senha</Text>
                    </View>

                    <Text style={globalStyles.txtDescription}>
                        Sua senha tem que ter 8 caracteres ou mais. Não use senhas comuns, repetições ou sequências.
                         Tente fazê-la mais longa ou adicionar símbolos como !, #, % ou $.
                    </Text>

                    <Form>
                        <View style={{ paddingRight: 15 }}>
                            <Item stackedLabel>
                                <Label style={globalStyles.inputLabel}>SENHA</Label>
                                <Input secureTextEntry returnKeyType='next' selectionColor='#fff' style={globalStyles.input} />
                            </Item>
                        </View>
                    </Form>
                </Content>

                <TouchableOpacity style={globalStyles.floatingButton} onPress={() => { navigate('Register_4'); Keyboard.dismiss() }}>
                    <Icon style={globalStyles.floatingButtonIcon} name='ios-arrow-forward' />
                </TouchableOpacity>
            </Container>
        )
    }
}