import React, { Component } from 'react'
import { StyleSheet, Image, Dimensions, StatusBar } from 'react-native'
import { Container, Content, Item, Input, Icon, Button, Text, View } from 'native-base'
import { scale, scaleModerate, scaleVertical } from '../../utils/scale'

export default class Login extends Component {

  renderImage() {
    let contentHeight = scaleModerate(300, 1);
    let height = Dimensions.get('window').height - contentHeight;
    let width = Dimensions.get('window').width;
    let image = <Image
      style={[styles.image, { height, width }]}
      source={require('../../assets/images/login-screen.jpg')} />

    return image
  }

  render() {
    let image = this.renderImage()

    return (
      <Container>

        <StatusBar backgroundColor='#38a226' />

        <Content>
          {image}

          <View style={styles.container}>
            <Item rounded style={styles.input}>
              <Icon active name='mail' />
              <Input placeholder='Email' style={styles.txt} />
            </Item>

            <Item rounded style={styles.input}>
              <Icon active name='lock' />
              <Input placeholder='Senha' style={styles.txt} secureTextEntry={true} />
            </Item>
          </View>

          <View style={styles.container}>
            <Button large block rounded success>
              <Text style={styles.txt}>Login</Text>
            </Button>

            <View style={styles.link}>
              <Text style={styles.txt2}>Não tem uma conta?
              <Text style={styles.negrito}> Cadastre-se agora</Text>
              </Text>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
  },
  input: {
    padding: 4,
    marginBottom: 15
  },
  txt: {
    fontSize: 20
  },
  link: {
    paddingTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt2: {
    fontSize: 15
  },
  negrito: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  image: {
    resizeMode: 'cover',
  }
}) 