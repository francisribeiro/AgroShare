import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, Toast, Spinner, } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { connect } from 'react-redux'

import globalStyles from '../../common/globalStyles' // Global Styles

import { cadastrarAluguel } from '../../../actions/CadastroAluguelAction'

class Alugar_4 extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    _cadastrarAluguel() {
        const { dataInicial, dataFinal, formaPagamento } = this.props
        this.props.cadastrarAluguel({ dataInicial, dataFinal, formaPagamento })
    }

    renderIcon() {
        if (this.props.loading)
            return (
                <TouchableOpacity activeOpacity={1} style={[globalStyles.floatingButton, { backgroundColor: globalStyles.bg }]} onPress={() => { false }}>
                    <Spinner color='#fff' />
                </TouchableOpacity >
            )

        return (
            <View style={globalStyles.floatingButton2}>
                <Button rounded onPress={() => this._cadastrarAluguel()} style={{ paddingLeft: 20, backgroundColor: globalStyles.bg }}>
                    <Text style={{ fontSize: 18, color: '#fff', marginBottom: 3 }}>Solicitar aluguel</Text>
                    <Icon name='ios-arrow-forward' style={{ fontSize: 25, color: '#fff', paddingTop: 2 }} />
                </Button>
            </View>
        )
    }

    // ProfileMaq screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation


        return (
            <Container style={{ backgroundColor: '#fff' }}>

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
                        <Text style={globalStyles.pagTitulo2}>Leia atentamente as informações abaixo:</Text>
                    </View>

                    <Text style={globalStyles.txtDescription2}>
                        Você confirma o aluguel da máquina iniciando em
                        <Text style={{ fontWeight: 'bold' }}> {this.props.dataInicial} </Text>
                        até o dia <Text style={{ fontWeight: 'bold' }}>{this.props.dataFinal} </Text>.
                    </Text>

                    <Form>
                        <View style={{ paddingRight: 15 }}>


                        </View>
                    </Form>
                </Content>
                {this.renderIcon()}
            </Container >
        )
    }
}

const mapStateToProps = state => ({
    dataInicial: state.CadastroAluguelReducer.dataInicial,
    dataFinal: state.CadastroAluguelReducer.dataFinal,
    formaPagamento: state.CadastroAluguelReducer.formaPagamento,
    loading: state.cadastrarAluguel.loading
})

export default connect(mapStateToProps, { cadastrarAluguel })(Alugar_4)