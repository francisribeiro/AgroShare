import React, { Component } from "react"
import { Container, Header, Title, Content, Button, Left, Right, Body, Text } from "native-base"
import { StyleSheet, View, BackHandler } from 'react-native'
import { Grid, Row } from 'react-native-easy-grid'
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Login extends Component {
    static navigationOptions = { title: 'NewLogin', header: null }

    //Fechar o App
    exitApp() {
        BackHandler.exitApp()
    }

    render() {
        const { navigate } = this.props.navigation

        return (
            <Container>
                <Header style={{ backgroundColor: '#38a226' }}>
                    <Left>
                        <Button transparent onPress={() => this.exitApp()}>
                            <Icon name='close' />
                        </Button>
                    </Left>

                    <Right>
                        <Button transparent onPress={() => navigate('Home')}>
                            <Text>Entrar</Text>
                        </Button>
                    </Right>
                </Header>

                <Grid>
                    <Row size={1} style={{ backgroundColor: "#38a226" }} />
                    <Row size={2} style={{ backgroundColor: "#38a226" }}>
                        <View style={styles.padder}>
                            <Text style={styles.txt}>Bem-vindo(a) ao AgroShare.</Text>
                        </View>
                    </Row>
                    <Row size={4} style={{ backgroundColor: "#38a226" }}>
                        <Content>
                            <View style={styles.buttonPadder}>
                                <Button block rounded light onPress={() => navigate('Login')}>
                                    <Icon name='sc-facebook' />
                                    <Text style={{ fontSize: 20, color: '#38a226' }}>Continuar com o Facebook</Text>
                                </Button>
                            </View>
                            <View style={styles.buttonPadder}>
                                <Button block rounded bordered light onPress={() => navigate('Login')}>
                                    <Text style={{ fontSize: 20 }}>Criar uma Conta</Text>
                                </Button>
                            </View>
                        </Content>
                    </Row>
                </Grid>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 30,
        color: '#fff'
    },
    padder: {
        paddingLeft: 20
    },
    buttonPadder: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 15
    }
})