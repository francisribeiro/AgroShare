import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, Toast } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { modificaSenha } from '../../actions/CadastroUsuarioAction'
import globalStyles from '../common/globalStyles' // Global Styles

class Register_3 extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    _regexTest(senha) {
        let regexSenha = null

        if (senha.length < 6) {
            this._aviso('ERRO: A senha precisa ter ao menos 6 caracteres!')
            return false
        }

        // regexSenha = /[0-9]/
        // if (!regexSenha.test(senha)) {
        //     this._aviso('ERRO: A senha precisa ter ao menos 1 número (0-9)!')
        //     return false
        // }

        // regexSenha = /[a-z]/
        // if (!regexSenha.test(senha)) {
        //     this._aviso('ERRO: A senha precisa ter ao menos uma letra minúscula (a-z)!')
        //     return false
        // }

        // regexSenha = /[A-Z]/
        // if (!regexSenha.test(senha)) {
        //     this._aviso('ERRO: A senha precisa ter ao menos uma letra maiúscula (A-Z)!')
        //     return false
        // }

        // regexSenha = /[!@#\$%\^&]/
        // if (!regexSenha.test(senha)) {
        //     this._aviso('Erro: A senha precisa ter ao menos um caracter especial (!, @, #, %, $, &)!')
        //     return false
        // }

        return true
    }

    _validarSenha() {
        const { senha } = this.props

        if (this._regexTest(senha)) {
            Keyboard.dismiss()
            this.props.navigation.navigate('Register_4')
        }
    }

    _aviso(msg) {
        if (msg != '')
            Toast.show({ text: msg, position: 'bottom', buttonText: 'Okay', type: 'danger', duration: 3000 })
    }
    
    // Register_3 screen
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
                        <Text style={globalStyles.pagTitulo}>Crie uma senha</Text>
                    </View>

                    <Text style={globalStyles.txtDescription}>
                        Sua senha tem que ter 6 caracteres ou mais. Não use senhas comuns, repetições ou sequências.
                         Tente fazê-la mais longa ou adicionar símbolos como !, @, #, % ou $.
                    </Text>

                    <Form>
                        <View style={{ paddingRight: 15 }}>
                            <Item stackedLabel>
                                <Label style={globalStyles.inputLabel}>SENHA</Label>
                                <Input autoCapitalize='none' secureTextEntry returnKeyType='next' selectionColor='#fff' style={globalStyles.input} onChangeText={texto => this.props.modificaSenha(texto)} />
                            </Item>
                        </View>
                    </Form>
                </Content>

                <TouchableOpacity activeOpacity={0.7} style={globalStyles.floatingButton} onPress={() => { this._validarSenha() }}>
                    <Icon style={globalStyles.floatingButtonIcon} name='ios-arrow-forward' />
                </TouchableOpacity>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    senha: state.CadastroUsuarioReducer.senha,
})

export default connect(mapStateToProps, { modificaSenha })(Register_3)