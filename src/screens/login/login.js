import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, IconNB } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'

import globalStyles from '../common/globalStyles' // Global Styles

export default class Login extends Component {

  // StackNavigator Header configurations
  static navigationOptions = { title: 'Login', header: null }

  // Login screen
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
                <Input keyboardType='email-address' returnKeyType='next' selectionColor='#fff' style={globalStyles.input} />
              </Item>

              <Item style={{ paddingTop: 20 }} stackedLabel>
                <Label style={globalStyles.inputLabel}>SENHA</Label>
                <Input selectionColor='#fff' style={globalStyles.input} secureTextEntry />
              </Item>
            </View>
          </Form>
        </Content>

        <TouchableOpacity activeOpacity={0.7} style={globalStyles.floatingButton} onPress={() => { Keyboard.dismiss(); navigate('Anuncios') }}>
          <IconNB style={globalStyles.floatingButtonIcon} name='ios-arrow-forward' />
        </TouchableOpacity>
      </Container>
    )
  }
}
