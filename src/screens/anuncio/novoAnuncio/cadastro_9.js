import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, Spinner } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import { connect } from 'react-redux'
import AwesomeAlert from 'react-native-awesome-alerts'

import { modificaPreco, cadastrarAnuncio } from '../../../actions/CadastroAnuncioAction'
import globalStyles from '../../common/globalStyles' // Global Styles

class Cadastro_9 extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    _cadastrarAnuncio() {
        const { tipo, marca, modelo, ano, cidade, estado, descricao, titulo, preco } = this.props
        setTimeout(() => this.props.cadastrarAnuncio({ tipo, marca, modelo, ano, cidade, estado, descricao, titulo, preco }), 500)
    }

    renderIcon() {
        if (this.props.loading)
            return (
                <AwesomeAlert
                    show={true}
                    closeOnTouchOutside={false}
                    closeOnHardwareBackPress={false}
                    showProgress={true}
                    progressSize={70}
                    progressColor='#00695c'
                    message='Aguarde um momento...'
                    messageStyle={{ color: '#585858', fontSize: 23 }}
                    overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
                />
            )

        return (
            <View style={globalStyles.floatingButton2}>
                <Button rounded onPress={() => this._cadastrarAnuncio()} style={{ paddingLeft: 20, backgroundColor: globalStyles.bg }}>
                    <Text style={{ fontSize: 18, color: '#fff', marginBottom: 3 }}>Finalizar Anúncio</Text>
                    <Icon name='ios-arrow-forward' style={{ fontSize: 25, color: '#fff', paddingTop: 2 }} />
                </Button>
            </View>
        )
    }

    // Cadastro_2 screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation

        return (
            <Container style={{ backgroundColor: "#fff" }}>

                <Header noShadow androidStatusBarColor='#00695c' style={{ backgroundColor: '#fff' }}>
                    <Left>
                        <Button transparent onPress={() => goBack(null)}>
                            <Icon name='arrow-back' style={{ color: globalStyles.bg }} />
                        </Button>
                    </Left>

                    <Right />
                </Header>

                <Content style={{ padding: 10 }}>
                    <View style={{ paddingLeft: 15, paddingBottom: 32 }}>
                        <Text style={globalStyles.pagTitulo2}>Preço Base</Text>
                    </View>

                    <Text style={globalStyles.txtDescription2}>
                        O preço básico é o seu preço por hora padrão.
                    </Text>

                    <Form>
                        <View style={{ paddingRight: 15 }}>
                            <Item stackedLabel>
                                <Label style={globalStyles.inputLabel2}>PREÇO POR HORA</Label>
                                <Input placeholder='R$' placeholderTextColor='rgba(88,88,88,0.6)' keyboardType='numeric' selectionColor='#585858' style={globalStyles.input2} onChangeText={(texto) => this.props.modificaPreco(texto)} />
                            </Item>
                        </View>
                    </Form>
                </Content>
                {this.renderIcon()}
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    tipo: state.CadastroAnuncioReducer.tipo,
    marca: state.CadastroAnuncioReducer.marca,
    modelo: state.CadastroAnuncioReducer.modelo,
    ano: state.CadastroAnuncioReducer.ano,
    cidade: state.CadastroAnuncioReducer.cidade,
    estado: state.CadastroAnuncioReducer.estado,
    descricao: state.CadastroAnuncioReducer.descricao,
    titulo: state.CadastroAnuncioReducer.titulo,
    preco: state.CadastroAnuncioReducer.preco,
    erroCadastro: state.CadastroAnuncioReducer.erroCadastro,
    loading: state.CadastroAnuncioReducer.loading
})

export default connect(mapStateToProps, { modificaPreco, cadastrarAnuncio })(Cadastro_9)