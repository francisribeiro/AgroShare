import React, { Component } from "react"
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, Fab, IconNB } from "native-base"
import { StatusBar, View, Keyboard } from 'react-native'
import { StackNavigator } from 'react-navigation'

export default class Login extends Component {
  static navigationOptions = { title: 'Login', header: null }

  render() {
    const { navigate } = this.props.navigation

    return (
      <Container style={{ backgroundColor: '#237C4E' }}>

        <StatusBar backgroundColor='#237C4E' />

        <Header style={{ backgroundColor: '#237C4E' }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
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
            <Text style={{ fontSize: 32, color: '#fff', fontWeight: 'bold' }}>Entrar</Text>
          </View>

          <Form>
            <View style={{ paddingRight: 15 }}>
              <Item stackedLabel>
                <Label style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>ENDEREÇO DE EMAIL</Label>
                <Input keyboardType='email-address' returnKeyType='next' selectionColor='#fff' style={{ color: '#fff', fontSize: 25 }} />
              </Item>

              <Item style={{ paddingTop: 20 }} stackedLabel>
                <Label style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>SENHA</Label>
                <Input selectionColor='#fff' style={{ color: '#fff', fontSize: 25 }} secureTextEntry />
              </Item>
            </View>
          </Form>
        </Content>

        <View>
          <Fab active={false} style={{ backgroundColor: '#fff' }} position='bottomRight'
            onPress={() => {
              Keyboard.dismiss()
              navigate('Home')
            }}>
            <IconNB style={{ color: '#237C4E', fontSize: 30 }} name="ios-arrow-forward" />
          </Fab>
        </View>
      </Container >
    )
  }
}