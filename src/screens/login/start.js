import React, { Component } from "react"
import { Container, Header, Title, Content, Button, Left, Right, Body, Text, Icon } from "native-base"
import { StyleSheet, View, BackHandler, Image, StatusBar } from 'react-native'
import { Grid, Row } from 'react-native-easy-grid'
import { StackNavigator } from 'react-navigation'

export default class Start extends Component {
    static navigationOptions = { title: 'Start', header: null }

    // Fechar o App
    exitApp() {
        BackHandler.exitApp()
    }

    render() {
        const { navigate } = this.props.navigation

        return (
            <Container>
                <StatusBar backgroundColor='#237C4E' />

                <Header style={{ backgroundColor: '#237C4E' }}>
                    <Left>
                        <Button transparent onPress={() => this.exitApp()}>
                            <Icon name='close' />
                        </Button>
                    </Left>

                    <Right>
                        <Button transparent onPress={() => navigate('Login')}>
                            <Text>Entrar</Text>
                        </Button>
                    </Right>
                </Header>

                <Grid>
                    <Row size={2} style={{ backgroundColor: "#237C4E", paddingTop: 20, paddingBottom: 40 }}>
                        <Content>
                            <View style={styles.center}>
                                <Image style={styles.img} source={require('../../assets/images/as.png')} />
                            </View>
                        </Content>
                    </Row>

                    <Row size={2} style={{ backgroundColor: "#237C4E", paddingTop: 20 }}>
                        <Content>
                            <View style={styles.buttonPadder}>
                                <Button block rounded light onPress={() => navigate('Register')}>
                                    <Text style={{ fontSize: 20, color: "#237C4E" }}>Criar uma Conta</Text>
                                </Button>
                            </View>
                        </Content>
                    </Row>

                    <Row size={2} style={{ backgroundColor: "#237C4E" }}>
                        <Content>
                            <View style={styles.buttonPadder}>
                                <Text style={{ color: '#fff', fontSize: 16 }}>
                                    Ao clicar em Criar Conta,
                                    eu aceito os <Text style={styles.underline}>Termos de Serviço</Text>
                                    , os <Text style={styles.underline}>Termos de Serviço de Pagamentos</Text>
                                    , a <Text style={styles.underline}>Política de Privacidade</Text> e a
                                     <Text style={styles.underline}>Politica de Não Discriminação</Text> do AgroShare.
                                </Text>
                            </View>
                        </Content>
                    </Row>
                </Grid>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    buttonPadder: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 15
    },
    underline: {
        color: '#fff',
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    img: {
        width: 210,
        height: 154
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})