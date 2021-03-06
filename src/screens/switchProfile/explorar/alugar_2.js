import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, Toast, Spinner, } from 'native-base'
import { View, Keyboard, TouchableOpacity, Alert } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { connect } from 'react-redux'

import globalStyles from '../../common/globalStyles' // Global Styles

import { modificaDataFinal } from '../../../actions/CadastroAluguelAction'

class Alugar_2 extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    // Class start state
    constructor(props) {
        super(props)
        this.state = { isDateTimePickerVisible: false, date: '', prosseguir: false }
    }

    // DatePicker helpers
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })
    _hideDateTimePicker = (date) => {
        const { params } = this.props.navigation.state
        const { dateStart } = params

        this.setState({ isDateTimePickerVisible: false, date: this._dateFormat(date) });
        this.props.modificaDataFinal(this._dateFormat(date).replace(/\s/gi, ''))

        if (!(+date > +dateStart)) {
            Alert.alert(
                'Período Inválido',
                'Selecione uma data maior que a data inicial!',
                [{ text: 'ENTENDIDO', onPress: () => false }],
                { cancelable: false }
            )
            this.setState({ prosseguir: false })
        } else {
            this.setState({ prosseguir: true })
        }
    }
    _handleDatePicked = (date) => { this._hideDateTimePicker(date) }
    _dateFormat = (date) => { return (date.getDate() + ' / ' + (parseInt(date.getMonth()) + 1).toString() + ' / ' + date.getFullYear()) }

    // ProfileMaq screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation
        const { params } = this.props.navigation.state
        const { tipo, marca, preco, locador, maquina, dateStart } = params

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
                        <Text style={globalStyles.pagTitulo2}>Até quando vai precisar da máquina?</Text>
                    </View>

                    <Form>
                        <View style={{ paddingRight: 15 }}>

                            <TouchableOpacity style={{ paddingTop: 40 }} onPress={() => this._showDateTimePicker()}>
                                <View pointerEvents='none'>
                                    <Item stackedLabel>
                                        <Label style={globalStyles.inputLabel2}>DATA FINAL</Label>
                                        <Input
                                            placeholder='      /      /'
                                            placeholderTextColor='#585858'
                                            disabled
                                            returnKeyType='next'
                                            selectionColor='#585858'
                                            style={globalStyles.input2}
                                            value={this.props.dataFinal}
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
                                if (this.props.dataFinal == '')
                                    Toast.show({ text: 'Selecione uma DATA final!', position: 'bottom', buttonText: 'Okay', type: 'danger', duration: 3000 })
                                else if (this.state.prosseguir == false)
                                    Toast.show({ text: 'Selecione uma DATA válida!', position: 'bottom', buttonText: 'Okay', type: 'danger', duration: 3000 })
                                else
                                    navigate('Alugar_3', { tipo, marca, preco, locador, maquina })
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
    dataFinal: state.CadastroAluguelReducer.dataFinal
})

export default connect(mapStateToProps, { modificaDataFinal })(Alugar_2)