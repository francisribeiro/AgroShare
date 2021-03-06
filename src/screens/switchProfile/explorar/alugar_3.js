import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, Toast } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import { connect } from 'react-redux'

import globalStyles from '../../common/globalStyles' // Global Styles

import { modificaFormaPagamento } from '../../../actions/CadastroAluguelAction'

class Alugar_3 extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    constructor(props) {
        super(props)
        this.state = { indice: -1 }
    }

    inicializaRadios() {
        let opts = ['Cartão de Crédito', 'Cheque', 'Dinheiro', 'Escambo']

        if (this.props.formaPagamento != '')
            this.setState({ indice: opts.indexOf(this.props.formaPagamento) })
    }

    componentWillMount() {
        this.inicializaRadios()
    }

    // Cadastro_2 screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation
        const { params } = this.props.navigation.state
        const { tipo, marca, preco, locador, maquina } = params

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
                        <Text style={globalStyles.pagTitulo2}>Como você pretende pagar o aluguel?</Text>
                    </View>

                    <Form>
                        <View style={{ paddingHorizontal: 15 }}>
                            <RadioGroup
                                selectedIndex={this.state.indice}
                                size={30}
                                thickness={2}
                                color='#585858'
                                onSelect={(index, value) => this.props.modificaFormaPagamento(value)}
                            >
                                <RadioButton value={'Cartão de Crédito'} color={globalStyles.bg}>
                                    <Text style={{ color: '#585858', fontSize: 18, paddingLeft: 8, marginBottom: 5 }}>Cartão de Crédito</Text>
                                </RadioButton>

                                <RadioButton value={'Cheque'} color={globalStyles.bg}>
                                    <Text style={{ color: '#585858', fontSize: 18, paddingLeft: 8, marginBottom: 5 }}>Cheque</Text>
                                </RadioButton>

                                <RadioButton value={'Dinheiro'} color={globalStyles.bg}>
                                    <Text style={{ color: '#585858', fontSize: 18, paddingLeft: 8, marginBottom: 5 }}>Dinheiro</Text>
                                </RadioButton>

                                <RadioButton value={'Escambo'} color={globalStyles.bg}>
                                    <Text style={{ color: '#585858', fontSize: 18, paddingLeft: 8, marginBottom: 5 }}>Escambo</Text>
                                </RadioButton>
                            </RadioGroup>
                        </View>
                    </Form>
                </Content>

                <View style={globalStyles.floatingButton2}>
                    <Button rounded
                        onPress={() => {
                            if (this.props.formaPagamento == '')
                                Toast.show({ text: 'Selecione uma forma de PAGAMENTO!', position: 'bottom', buttonText: 'Okay', type: 'danger', duration: 3000 })
                            else
                                navigate('Alugar_4', { tipo, marca, preco, locador, maquina })
                        }}
                        style={{ paddingLeft: 20, backgroundColor: globalStyles.bg }}>
                        <Text style={{ fontSize: 18, color: '#fff', marginBottom: 3 }}>Próximo</Text>
                        <Icon name='ios-arrow-forward' style={{ fontSize: 25, color: '#fff', paddingTop: 2 }} />
                    </Button>
                </View>
            </Container >
        )
    }
}

const mapStateToProps = state => ({
    formaPagamento: state.CadastroAluguelReducer.formaPagamento
})

export default connect(mapStateToProps, { modificaFormaPagamento })(Alugar_3)