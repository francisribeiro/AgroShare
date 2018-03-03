import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, Toast } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { modificaNome, modificaSobrenome } from '../../actions/CadastroUsuarioAction'
import globalStyles from '../common/globalStyles' // Global Styles

class Register_1 extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    _validarNomeSobrenome() {
        const { nome, sobrenome } = this.props
        let msg = ''
        if (nome.length < 4)
            msg = 'ERRO: Insira um nome válido!'
        else if (sobrenome.length < 4)
            msg = 'ERRO: Insira um sobrenome válido!'

        if (msg != '')
            this._aviso(msg)
        else {
            Keyboard.dismiss()
            this.props.navigation.navigate('Register_2')
        }
    }

    _aviso(msg) {
        if (msg != '')
            Toast.show({ text: msg, position: 'bottom', buttonText: 'Okay', type: 'danger', duration: 3000 })
    }

    // Register_1 screen
    render() {
        // StackNavigator props
        const { navigate, goBack } = this.props.navigation

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
                        <Text style={globalStyles.pagTitulo}>Qual o seu nome?</Text>
                    </View>

                    <Form>
                        <View style={{ paddingRight: 15 }}>
                            <Item stackedLabel>
                                <Label style={globalStyles.inputLabel}>NOME</Label>
                                <Input returnKeyType='next' selectionColor='#fff' style={globalStyles.input} onChangeText={texto => this.props.modificaNome(texto)} />
                            </Item>

                            <Item style={{ paddingTop: 20 }} stackedLabel>
                                <Label style={globalStyles.inputLabel}>SOBRENOME</Label>
                                <Input selectionColor='#fff' style={globalStyles.input} onChangeText={texto => this.props.modificaSobrenome(texto)} />
                            </Item>
                        </View>
                    </Form>
                </Content>

                <TouchableOpacity activeOpacity={0.7} style={globalStyles.floatingButton} onPress={() => { this._validarNomeSobrenome() }}>
                    <Icon style={globalStyles.floatingButtonIcon} name='ios-arrow-forward' />
                </TouchableOpacity>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    nome: state.CadastroUsuarioReducer.nome,
    sobrenome: state.CadastroUsuarioReducer.sobrenome,
})

export default connect(mapStateToProps, { modificaNome, modificaSobrenome })(Register_1)