import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, Toast } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { connect } from 'react-redux'

import { modificaIdade, cadastrarUsuario } from '../../actions/CadastroUsuarioAction'
import globalStyles from '../common/globalStyles' // Global Styles

class Register_4 extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    // Class start state
    constructor(props) {
        super(props)
        this.state = { isDateTimePickerVisible: false, date: '' }
    }

    // DatePicker helpers
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })
    _hideDateTimePicker = (date) => { this.setState({ isDateTimePickerVisible: false, date: this._dateFormat(date) }); this.props.modificaIdade(this._dateFormat(date).replace(/\s/gi, '')) }
    _handleDatePicked = (date) => { this._hideDateTimePicker(date) }
    _dateFormat = (date) => { return (date.getDate() + ' / ' + (parseInt(date.getMonth()) + 1).toString() + ' / ' + date.getFullYear()) }

    _cadastrarUsuario() {
        const { nome, sobrenome, email, senha, idade } = this.props
        this.props.cadastrarUsuario({ nome, sobrenome, email, senha, idade })

        if (this.props.erroCadastro.length > 0)
            this._aviso(this.props.erroCadastro)
    }

    _aviso(msg) {
        if (msg != '')
            Toast.show({ text: msg, position: 'bottom', buttonText: 'Okay', type: 'danger', duration: 3000 })
    }
    // Register_4 screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation

        return (
            <Container style={{ backgroundColor: globalStyles.bg }}>

                <Header noShadow androidStatusBarColor='#00695c' style={{ backgroundColor: 'transparent' }}>
                    <Left>
                        <Button transparent onPress={() => goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>

                    <Right />
                </Header>

                <Content style={{ padding: 10 }}>
                    <View style={{ paddingLeft: 15, paddingBottom: 32 }}>
                        <Text style={globalStyles.pagTitulo}>Qual a sua data de nascimento?</Text>
                    </View>

                    <Text style={globalStyles.txtDescription}>
                        Você deve ter no mínimo 18 anos de idade para usar o AgroShare. Os outros usuários não poderão ver seu aniversário.
                    </Text>

                    <Form>
                        <View style={{ paddingRight: 15 }}>

                            <TouchableOpacity onPress={() => this._showDateTimePicker()}>
                                <View pointerEvents='none'>
                                    <Item stackedLabel>
                                        <Label style={globalStyles.inputLabel}>ANIVERSÁRIO</Label>
                                        <Input
                                            placeholder='      /      /'
                                            placeholderTextColor='#fff'
                                            disabled
                                            returnKeyType='next'
                                            selectionColor='#fff'
                                            style={globalStyles.input}
                                            value={this.state.date}
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

                <TouchableOpacity activeOpacity={0.7} style={globalStyles.floatingButton} onPress={() => { this._cadastrarUsuario() }}>
                    <Icon style={globalStyles.floatingButtonIcon} name='ios-arrow-forward' />
                </TouchableOpacity>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    nome: state.CadastroUsuarioReducer.nome,
    sobrenome: state.CadastroUsuarioReducer.sobrenome,
    email: state.CadastroUsuarioReducer.email,
    senha: state.CadastroUsuarioReducer.senha,
    idade: state.CadastroUsuarioReducer.idade,
    erroCadastro: state.CadastroUsuarioReducer.erroCadastro
})

export default connect(mapStateToProps, { modificaIdade, cadastrarUsuario })(Register_4)