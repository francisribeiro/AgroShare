import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, IconNB, Toast } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import globalStyles from '../common/globalStyles' // Global Styles
import { passwordRecover } from '../../actions/CadastroUsuarioAction'

// Tava bebado quando escrevi isso daqui, REVER isso depois
class PasswordRecovery extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    constructor(props) {
        super(props)
        this.state = { email: '' }
    }

    changeEmail(email) {
        this.setState({ email })
    }

    _passwordRecover() {
        let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (regexEmail.test(String(this.state.email).toLowerCase())) {
            this.props.passwordRecover(this.state.email)
        } else {
            this._aviso('ERRO: Insira um email válido!')
        }

        if (this.props.erroLogin != '')
            this._aviso(this.props.erroLogin)

    }

    _aviso(msg) {
        if (msg != '')
            Toast.show({ text: msg, position: 'bottom', buttonText: 'Okay', type: 'danger', duration: 2000 })
    }

    // PasswordRecovery screen
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
                                <Input keyboardType='email-address' returnKeyType='next' selectionColor='#fff' style={globalStyles.input} onChangeText={(txt) => this.changeEmail(txt)} />
                            </Item>
                        </View>
                    </Form>
                </Content>

                <TouchableOpacity activeOpacity={0.7} style={globalStyles.floatingButton} onPress={() => { Keyboard.dismiss(); this._passwordRecover() }}>
                    <IconNB style={globalStyles.floatingButtonIcon} name='ios-arrow-forward' />
                </TouchableOpacity>
            </Container >
        )
    }
}

const mapStateToProps = state => { 
    return {
        erroLogin: state.AutenticacaoReducer.erroLogin
    }
}


export default connect(mapStateToProps, { passwordRecover })(PasswordRecovery)