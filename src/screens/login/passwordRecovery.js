import React, { Component } from 'react'
import { StyleSheet, Image, StatusBar } from 'react-native'
import { Container, Content, Item, Input, Icon, Button, Text, View } from 'native-base'
import { StackNavigator } from 'react-navigation'

export default class PasswordRecovery extends Component {
    static navigationOptions = { title: 'PasswordRecovery', header: null }

    render() {
        const { goBack } = this.props.navigation

        return (
            <Container>

                <StatusBar backgroundColor='#38a226' />

                <Content style={styles.tela}>
                    <View style={styles.logo}>
                        <Image
                            style={{ height: 128, width: 128 }}
                            source={require('../../assets/images/logo.png')} />
                        <Text style={styles.logoTxt}>Recuperar Senha</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Item rounded style={styles.input}>
                            <Icon active name='mail' />
                            <Input placeholder='Email' style={{ fontSize: 20 }} />
                        </Item>

                        <View style={styles.mensagem}>
                            <Text style={{ fontSize: 12, color: '#b2b2b2', textAlign: 'center' }}>
                                Entre com seu email acima para receber as instruções para recuperar a sua senha
                            </Text>
                        </View>

                        <View style={{ paddingTop: 130, paddingBottom: 10 }}>
                            <Button large block rounded success onPress={() => goBack()}>
                                <Text style={{ fontSize: 20 }}>Enviar</Text>
                            </Button>
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
    logo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoTxt: {
        fontSize: 30,
        paddingBottom: 10
    },
    inputContainer: {
        flex: 2,
        paddingTop: 130,
        paddingLeft: 15,
        paddingRight: 15
    },
    input: {
        paddingLeft: 15,
        marginBottom: 2
    },
    mensagem: {
        paddingLeft: 10,
        paddingRight: 10
    }
})