import React, { Component } from 'react'
import { Container, Header, Content, Button, Left, Right, Text, Icon } from 'native-base'
import { StyleSheet, View, BackHandler, Image } from 'react-native'
import { Grid, Row } from 'react-native-easy-grid'
import AwesomeAlert from 'react-native-awesome-alerts'

import globalStyles from '../common/globalStyles' // Global Styles

let sucesso = false

export default class Start extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    async hideAlert() {
        sucesso = false
    }

    // Minimiza o App
    exitApp() { BackHandler.exitApp() }

    // Start screen
    render() {
        // StackNavigator props
        const { navigate } = this.props.navigation
        const { params } = this.props.navigation.state
        sucesso = params ? params.sucesso : false

        return (
            <Container>
                <Header noShadow androidStatusBarColor='#00695c' style={{ backgroundColor: globalStyles.bg }}>
                    <Left>
                        {/* <Button transparent onPress={() => this.exitApp()}>
                            <Icon name='close' />
                        </Button> */}
                    </Left>

                    <Right>
                        <Button transparent onPress={() => navigate('Login')}>
                            <Text>Entrar</Text>
                        </Button>
                    </Right>
                </Header>

                <Grid>
                    <Row size={2} style={{ backgroundColor: globalStyles.bg, paddingTop: 20, paddingBottom: 40 }}>
                        <Content>
                            <View style={styles.center}>
                                <Image style={styles.img} source={require('../../assets/images/logo.png')} />
                            </View>
                        </Content>
                    </Row>

                    <Row size={2} style={{ backgroundColor: globalStyles.bg, paddingTop: 20 }}>
                        <Content>
                            <View style={styles.buttonPadder}>
                                <Button block rounded bordered light onPress={() => navigate('Register_1')}>
                                    <Text style={{ fontSize: 20, color: '#fff' }}>Criar uma Conta</Text>
                                </Button>
                            </View>
                        </Content>
                    </Row>
                    <Row size={2} style={{ backgroundColor: globalStyles.bg }}>
                        <Content>
                            <View style={styles.buttonPadder}>
                                <Text style={{ color: '#fff', fontSize: 16 }}>
                                    Ao clicar em Criar Conta,
                                    eu aceito os <Text style={styles.underline}>Termos de Serviço</Text>
                                    , os <Text style={styles.underline}>Termos de Serviço de Pagamentos</Text>
                                    , a <Text style={styles.underline}>Política de Privacidade</Text> e
                                    a <Text style={styles.underline}>Politica de Não Discriminação</Text> do AgroShare.
                                </Text>
                            </View>
                        </Content>
                    </Row>
                </Grid>
                <AwesomeAlert
                    contentContainerStyle={{ backgroundColor: '#00695c' }}
                    show={sucesso}
                    showProgress={false}

                    title="Cadastro realizado com sucesso. Vamos acessar o AgroShare!"
                    titleStyle={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}

                    closeOnTouchOutside={false}
                    closeOnHardwareBackPress={false}

                    showCancelButton={false}
                    showConfirmButton={true}

                    confirmText="Acessar o AgroShare"

                    confirmButtonColor="#fff"
                    confirmButtonTextStyle={{ fontSize: 16, color: '#00695c' }}

                    overlayStyle={{ backgroundColor: 'rgba(255,255,255,0.6)' }}

                    onConfirmPressed={() => { this.hideAlert().then(() => { navigate('Login') }) }}
                />
            </Container>
        )
    }
}

// Screen styles
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