import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, Toast } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { modificaEmail } from '../../actions/CadastroUsuarioAction'
import globalStyles from '../common/globalStyles' // Global Styles

class Register_2 extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    _validarEmail() {
        const { email } = this.props
        let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (regexEmail.test(String(email).toLowerCase())) {
            Keyboard.dismiss()
            this.props.navigation.navigate('Register_3')
        } else
            this._aviso('ERRO: Insira um email válido!')

    }

    _aviso(msg) {
        if (msg != '')
            Toast.show({ text: msg, position: 'bottom', buttonText: 'Okay', type: 'danger', duration: 2000 })
    }

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
                                <Input autoCapitalize='none' keyboardType='email-address' returnKeyType='next' selectionColor='#fff' style={globalStyles.input} onChangeText={texto => this.props.modificaEmail(texto)} />
                            </Item>
                        </View>
                    </Form>
                </Content>

                <TouchableOpacity activeOpacity={0.7} style={globalStyles.floatingButton} onPress={() => { this._validarEmail() }}>
                    <Icon style={globalStyles.floatingButtonIcon} name='ios-arrow-forward' />
                </TouchableOpacity>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    email: state.CadastroUsuarioReducer.email,
})

export default connect(mapStateToProps, { modificaEmail })(Register_2)