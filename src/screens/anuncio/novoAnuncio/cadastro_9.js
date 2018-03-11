import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import { connect } from 'react-redux'

import { modificaPreco, cadastrarAnuncio } from '../../../actions/CadastroAnuncioAction'
import globalStyles from '../../common/globalStyles' // Global Styles

class Cadastro_9 extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    _cadastrarAnuncio() {
        const { tipo, marca, modelo, ano, cidade, estado, descricao, titulo, preco } = this.props
        this.props.cadastrarAnuncio({ tipo, marca, modelo, ano, cidade, estado, descricao, titulo, preco })
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
                <View style={globalStyles.floatingButton2}>
                    <Button rounded onPress={() => this._cadastrarAnuncio()} style={{ paddingLeft: 20, backgroundColor: globalStyles.bg }}>
                        <Text style={{ fontSize: 18, color: '#fff', marginBottom: 3 }}>Finalizar Anúncio</Text>
                        <Icon name='ios-arrow-forward' style={{ fontSize: 25, color: '#fff', paddingTop: 2 }} />
                    </Button>
                </View>
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
    preco: state.CadastroAnuncioReducer.preco
})

export default connect(mapStateToProps, { modificaPreco, cadastrarAnuncio })(Cadastro_9)