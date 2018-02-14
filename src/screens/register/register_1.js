import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'

import globalStyles from '../common/globalStyles' // Global Styles

export default class Register_1 extends Component {

    // StackNavigator Header configurations
    static navigationOptions = { title: 'Register_1', header: null }

    // Register_1 screen
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
                        <Text style={globalStyles.pagTitulo}>Qual o seu nome?</Text>
                    </View>

                    <Form>
                        <View style={{ paddingRight: 15 }}>
                            <Item stackedLabel>
                                <Label style={globalStyles.inputLabel}>NOME</Label>
                                <Input returnKeyType='next' selectionColor='#fff' style={globalStyles.input} />
                            </Item>

                            <Item style={{ paddingTop: 20 }} stackedLabel>
                                <Label style={globalStyles.inputLabel}>SOBRENOME</Label>
                                <Input selectionColor='#fff' style={globalStyles.input} secureTextEntry />
                            </Item>
                        </View>
                    </Form>
                </Content>

                <TouchableOpacity activeOpacity={0.7} style={globalStyles.floatingButton} onPress={() => { navigate('Register_2'); Keyboard.dismiss() }}>
                    <Icon style={globalStyles.floatingButtonIcon} name='ios-arrow-forward' />
                </TouchableOpacity>
            </Container>
        )
    }
}