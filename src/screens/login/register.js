import React, { Component } from 'react'
import { StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native'
import { Container, Content, Item, Input, Icon, Button, Text, View } from 'native-base'
import { StackNavigator } from 'react-navigation'

export default class Register extends Component {
    static navigationOptions = { title: 'Register', header: null }

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
                        <Text style={styles.logoTxt}>Cadastro</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Item rounded style={styles.input}>
                            <Input placeholder='Nome' style={{ fontSize: 20, marginTop: 6 }} />
                        </Item>

                        <Item rounded style={styles.input}>
                            <Input placeholder='Email' style={{ fontSize: 20, marginTop: 6 }} />
                        </Item>

                        <Item rounded style={styles.input}>
                            <Input placeholder='Senha' style={{ fontSize: 20, marginTop: 6 }} secureTextEntry={true} />
                        </Item>

                        <Item rounded style={styles.input}>
                            <Input placeholder='Repita a Senha' style={{ fontSize: 20, marginTop: 6 }} secureTextEntry={true} />
                        </Item>
                        <View style={{ paddingTop: 20 }}>
                            <Button large block rounded success onPress={() => goBack()}>
                                <Text style={{ fontSize: 20 }}>Cadastrar</Text>
                            </Button>
                        </View>

                        <View style={styles.link}>
                            <TouchableOpacity onPress={() => goBack()}>
                                <Text style={{ fontSize: 15 }}>Já tem uma conta?
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}> Entre agora</Text>
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content >
            </Container >
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
        flex: 5,
        paddingTop: 20,
        paddingLeft: 15,
        paddingRight: 15
    },
    input: {
        paddingLeft: 15,
        marginBottom: 15
    },
    link: {
        paddingTop: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})