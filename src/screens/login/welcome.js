import React, { Component } from 'react'
import { StyleSheet, Image, StatusBar } from 'react-native'
import { Container, Content, Item, Input, Icon, Button, Text, View } from 'native-base'

export default class Welcome extends Component {

    // StackNavigator Header configurations
    static navigationOptions = { title: 'Welcome', header: null }

    // Welcome screen
    render() {
        // StackNavigator props
        const { navigate } = this.props.navigation

        return (
            <Container>

                <StatusBar backgroundColor='#38a226' />

                <Content style={styles.tela}>
                    <View style={styles.logo}>
                        <Image
                            style={{ height: 128, width: 128 }}
                            source={require('../../assets/images/logo.png')} />
                        <Text style={styles.logoTxt}>Seja Bem-vindo ao AgroShare! </Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Button large block rounded success onPress={() => navigate('Login')}>
                            <Text style={{ fontSize: 20 }}>Entrar</Text>
                        </Button>
                    </View>

                    <View style={styles.mensagem}>
                        <Text style={{ fontSize: 12, color: '#b2b2b2', textAlign: 'center' }}>
                            Entre com seu email e senha para acessar todos os recursos que o AgroShare oferece
                        </Text>
                    </View>
                </Content>
            </Container>
        )
    }
}

// Screen styles
const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#fff'
    },
    logo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoTxt: {
        textAlign: 'center',
        fontSize: 30,
        paddingBottom: 10
    },
    inputContainer: {
        flex: 2,
        paddingTop: 100,
        paddingLeft: 15,
        paddingRight: 15
    },
    mensagem: {
        paddingLeft: 15,
        paddingRight: 15
    }
})