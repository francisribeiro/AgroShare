import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, IconNB, Toast, Spinner } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import AwesomeAlert from 'react-native-awesome-alerts'

import { modificaEmail, modificaSenha, autenticarUsuario } from '../../actions/AutenticacaoAction'
import globalStyles from '../common/globalStyles' // Global Styles

class Login extends Component {
  // Hide the header
  static navigationOptions = { header: null }

  _autenticarUsuario() {
    const { email, senha } = this.props
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (regexEmail.test(String(email).toLowerCase())) {
      if (senha.length == 0)
        this._aviso('ERRO: Insira uma senha!')
      else if (senha.length < 8)
        this._aviso('ERRO: Insira uma senha válida! ')
      else {
        this.props.autenticarUsuario({ email, senha })
        this._aviso(this.props.erroLogin)
      }
    } else
      this._aviso('ERRO: Insira um email válido!')
  }

  _aviso(msg) {
    if (msg != '')
      Toast.show({ text: msg, position: 'bottom', buttonText: 'Okay', type: 'danger', duration: 2000 })
  }

  renderIcon() {
    if (this.props.loading)
      return (
        <TouchableOpacity activeOpacity={1} style={globalStyles.floatingButton} onPress={() => { false }}>
          <Spinner color={globalStyles.bg} />
        </TouchableOpacity>
      )

    return (
      <TouchableOpacity activeOpacity={0.7} style={globalStyles.floatingButton} onPress={() => { this._autenticarUsuario() }}>
        <IconNB style={globalStyles.floatingButtonIcon} name='ios-arrow-forward' />
      </TouchableOpacity>
    )
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
            {/* <Button transparent onPress={() => navigate('PasswordRecovery')}>
              <Text style={{ fontSize: 12 }}>Esqueceu a senha?</Text>
            </Button> */}
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
        {this.renderIcon()}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
  erroLogin: state.AutenticacaoReducer.erroLogin,
  loading: state.AutenticacaoReducer.loading
})

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(Login)