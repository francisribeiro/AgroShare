import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import { connect } from 'react-redux'

import globalStyles from '../../common/globalStyles' // Global Styles

import { modificaFormaPagamento } from '../../../actions/CadastroAluguelAction'

class Alugar_3 extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    // Cadastro_2 screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation
        const { params } = this.props.navigation.state
        const { tipo, marca, preco } = params

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
                    <Button rounded onPress={() => navigate('Alugar_4', { tipo, marca, preco })} style={{ paddingLeft: 20, backgroundColor: globalStyles.bg }}>
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