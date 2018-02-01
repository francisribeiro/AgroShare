import React, { Component } from 'react'
import { StyleSheet, Image, Dimensions, StatusBar, TouchableOpacity } from 'react-native'
import { Container, Content, Item, Input, Icon, Button, Text, View } from 'native-base'
import { StackNavigator } from 'react-navigation'
import { scale, scaleModerate, scaleVertical } from '../../utils/scale'

export default class Login extends Component {
  static navigationOptions = { title: 'Login', header: null }

  renderImage() {
    let contentHeight = scaleModerate(345, 1);
    let height = Dimensions.get('window').height - contentHeight;
    let width = Dimensions.get('window').width;
    let image = <Image
      style={{ height, width }}
      source={require('../../assets/images/login-screen.png')} />

    return image
  }

  render() {
    let image = this.renderImage()
    const { navigate } = this.props.navigation

    return (
      <Container>

        <StatusBar backgroundColor='#38a226' />

        <Content style={styles.tela}>
          {image}

          <View style={styles.container}>
            <Item rounded style={styles.emailInput}>
              <Icon active name='mail' />
              <Input placeholder='Email' style={{ fontSize: 20 }} />
            </Item>

            <Item rounded style={styles.senhaInput}>
              <Icon active name='lock' />
              <Input placeholder='Senha' style={{ fontSize: 20 }} secureTextEntry={true} />
            </Item>

            <View style={styles.esqueceuSenha}>
              <TouchableOpacity onPress={() => navigate('PasswordRecovery')}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'right' }}>Esqueceu a senha?</Text>
              </TouchableOpacity>
            </View>

            <Button large block rounded success onPress={() => navigate('Home')}>
              <Text style={{ fontSize: 20 }}>Login</Text>
            </Button>

            <View style={styles.cadastro}>
              <TouchableOpacity onPress={() => navigate('Register')}>
                <Text style={{ fontSize: 15 }}>Não tem uma conta?
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}> Cadastre-se agora</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15
  },
  emailInput: {
    paddingLeft: 15,
    marginBottom: 15
  },
  senhaInput: {
    paddingLeft: 15
  },
  cadastro: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  esqueceuSenha: {
    marginTop: 3,
    marginRight: 10,
    marginBottom: 40
  }
}) 