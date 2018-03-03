import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, IconNB, Toast } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { modificaEmail, modificaSenha, autenticarUsuario } from '../../actions/AutenticacaoAction'

import globalStyles from '../common/globalStyles' // Global Styles

class Login extends Component {
  // Hide the header
  static navigationOptions = { header: null }

  _autenticarUsuario() {
    const { email, senha } = this.props
    this.props.autenticarUsuario({ email, senha })
  }

  _aviso(msg) {
    if (msg != '')
      Toast.show({ text: msg, position: 'bottom', buttonText: 'Okay', type: 'danger', duration: 2000 })
  }

  // Login screen
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

          <Right>
            <Button transparent onPress={() => navigate('PasswordRecovery')}>
              <Text style={{ fontSize: 12 }}>Esqueceu a senha?</Text>
            </Button>
          </Right>
        </Header>

        <Content style={{ padding: 10 }}>
          <View style={{ paddingLeft: 15, paddingBottom: 32 }}>
            <Text style={globalStyles.pagTitulo}>Entrar</Text>
          </View>

          <Form>
            <View style={{ paddingRight: 15 }}>
              <Item stackedLabel>
                <Label style={globalStyles.inputLabel}>ENDEREÇO DE EMAIL</Label>
                <Input autoCapitalize='none' keyboardType='email-address' returnKeyType='next' selectionColor='#fff' style={globalStyles.input} onChangeText={texto => this.props.modificaEmail(texto)} />
              </Item>

              <Item style={{ paddingTop: 20 }} stackedLabel>
                <Label style={globalStyles.inputLabel}>SENHA</Label>
                <Input autoCapitalize='none' selectionColor='#fff' style={globalStyles.input} onChangeText={texto => this.props.modificaSenha(texto)} secureTextEntry />
              </Item>
            </View>
          </Form>

        </Content>
        <TouchableOpacity activeOpacity={0.7} style={globalStyles.floatingButton} onPress={() => { this._autenticarUsuario(); Keyboard.dismiss(); this._aviso(this.props.erroLogin) }}>
          <IconNB style={globalStyles.floatingButtonIcon} name='ios-arrow-forward' />
        </TouchableOpacity>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
  erroLogin: state.AutenticacaoReducer.erroLogin
})

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(Login)