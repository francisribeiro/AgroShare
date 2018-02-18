import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'

import globalStyles from '../common/globalStyles' // Global Styles

export default class Register_2 extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    // Register_2 screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation

        return (
            <Container style={{ backgroundColor: globalStyles.bg }}>

                <Header noShadow androidStatusBarColor='#00695c' style={{ backgroundColor: 'transparent' }}>
                    <Left>
                        <Button transparent onPress={() => goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>

                    <Right />
                </Header>

                <Content style={{ padding: 10 }}>
                    <View style={{ paddingLeft: 15, paddingBottom: 32 }}>
                        <Text style={globalStyles.pagTitulo}>E o seu email?</Text>
                    </View>

                    <Form>
                        <View style={{ paddingRight: 15 }}>
                            <Item stackedLabel>
                                <Label style={globalStyles.inputLabel}>ENDEREÇO DE EMAIL</Label>
                                <Input keyboardType='email-address' returnKeyType='next' selectionColor='#fff' style={globalStyles.input} />
                            </Item>
                        </View>
                    </Form>
                </Content>

                <TouchableOpacity activeOpacity={0.7} style={globalStyles.floatingButton} onPress={() => { navigate('Register_3'); Keyboard.dismiss() }}>
                    <Icon style={globalStyles.floatingButtonIcon} name='ios-arrow-forward' />
                </TouchableOpacity>
            </Container>
        )
    }
}