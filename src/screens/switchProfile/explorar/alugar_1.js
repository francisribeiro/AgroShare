import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, Toast, Spinner } from 'native-base'
import { View, Keyboard, TouchableOpacity, Alert } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { connect } from 'react-redux'

import globalStyles from '../../common/globalStyles' // Global Styles

import { modificaDataInicial, modificaLocador, modificaMaquina, modificaAtivo } from '../../../actions/CadastroAluguelAction'

class Alugar_1 extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    // Class start state
    constructor(props) {
        super(props)
        this.state = { isDateTimePickerVisible: false, date: '', prosseguir: false, dateStart: null }
    }

    setBasicInfo(locador, maquina) {
        this.props.modificaLocador(locador)
        this.props.modificaMaquina(maquina)
        this.props.modificaAtivo(false)
    }

    // DatePicker helpers
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })
    _hideDateTimePicker = (date) => {
        this.setState({ isDateTimePickerVisible: false, date: this._dateFormat(date) })
        this.props.modificaDataInicial(this._dateFormat(date).replace(/\s/gi, ''))
        let now = new Date()
        if (!(+date > +now)) {
            Alert.alert(
                'Período Inválido',
                'Você precisa solicitar o aluguel com 1 dia de antencedência!',
                [{ text: 'ENTENDIDO', onPress: () => false }],
                { cancelable: false }
            )
            this.setState({ prosseguir: false })
        } else {
            this.setState({ prosseguir: true, dateStart: date })
        }
    }
    _handleDatePicked = (date) => { this._hideDateTimePicker(date) }
    _dateFormat = (date) => { return (date.getDate() + ' / ' + (parseInt(date.getMonth()) + 1).toString() + ' / ' + date.getFullYear()) }


    // ProfileMaq screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation
        const { params } = this.props.navigation.state
        const { tipo, marca, preco, locador, maquina } = params
        this.setBasicInfo(locador, maquina)

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
                        <Text style={globalStyles.pagTitulo2}>Quando deseja começar o aluguel?</Text>
                    </View>

                    <Form>
                        <View style={{ paddingRight: 15 }}>

                            <TouchableOpacity style={{ paddingTop: 40 }} onPress={() => this._showDateTimePicker()}>
                                <View pointerEvents='none'>
                                    <Item stackedLabel>
                                        <Label style={globalStyles.inputLabel2}>DATA INICIAL</Label>
                                        <Input
                                            placeholder='      /      /'
                                            placeholderTextColor='#585858'
                                            disabled
                                            returnKeyType='next'
                                            selectionColor='#585858'
                                            style={globalStyles.input2}
                                            value={this.props.dataInicial}
                                        />
                                    </Item>
                                </View>
                            </TouchableOpacity>

                            <DateTimePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDateTimePicker}
                            />
                        </View>
                    </Form>
                </Content>

                <View style={globalStyles.floatingButton2}>
                    <Button rounded
                        onPress={
                            () => {
                                if (this.props.dataInicial == '')
                                    Toast.show({ text: 'Selecione uma DATA inicial!', position: 'bottom', buttonText: 'Okay', type: 'danger', duration: 3000 })
                                else if (this.state.prosseguir == false)
                                    Toast.show({ text: 'Selecione uma DATA válida!', position: 'bottom', buttonText: 'Okay', type: 'danger', duration: 3000 })
                                else
                                    navigate('Alugar_2', { tipo, marca, preco, locador, maquina, dateStart: this.state.dateStart })
                            }
                        }
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
    dataInicial: state.CadastroAluguelReducer.dataInicial,
    locador: state.CadastroAluguelReducer.locador,
    maquina: state.CadastroAluguelReducer.maquina,
    ativo: state.CadastroAluguelReducer.ativo,
})

export default connect(mapStateToProps, { modificaDataInicial, modificaLocador, modificaMaquina, modificaAtivo })(Alugar_1)