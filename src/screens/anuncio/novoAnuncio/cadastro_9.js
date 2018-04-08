import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, Spinner, Toast } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import { connect } from 'react-redux'
import AwesomeAlert from 'react-native-awesome-alerts'

import { modificaPreco, cadastrarAnuncio, editarAnuncio } from '../../../actions/CadastroAnuncioAction'
import globalStyles from '../../common/globalStyles' // Global Styles
import { resetarParaInicio } from '../../../actions/AppAction'

class Cadastro_9 extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    constructor(props) {
        super(props)
        this.state = { showAlertAceitar: false }
    }

    showAlertAceitar = () => { this.setState({ showAlertAceitar: true }) }

    async hideAlert() {
        this.setState({
            showAlertAceitar: false
        })
    }

    _cadastrarAnuncio(edit, id) {
        const { tipo, marca, modelo, ano, cidade, estado, foto, descricao, titulo, preco } = this.props
        if (edit === true && id != null)
            setTimeout(() => this.props.editarAnuncio({ id, tipo, marca, modelo, ano, cidade, estado, foto, descricao, titulo, preco }), 250)
        else
            setTimeout(() => this.props.cadastrarAnuncio({ tipo, marca, modelo, ano, cidade, estado, foto, descricao, titulo, preco }), 250)
    }

    _resetarParaInicio() {
        this.props.resetarParaInicio('TabRoutes')
    }

    renderIcon() {
        if (this.props.loading)
            return (
                <AwesomeAlert
                    contentContainerStyle={{ backgroundColor: '#00695c' }}
                    show={true}
                    closeOnTouchOutside={false}
                    closeOnHardwareBackPress={false}
                    showProgress={true}
                    progressSize={70}
                    progressColor='#fff'
                    message='Aguarde um momento...'
                    messageStyle={{ color: '#fff', fontSize: 23 }}
                    overlayStyle={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
                />
            )

        return (
            <View style={globalStyles.floatingButton2}>
                <Button rounded
                    onPress={() => {
                        Keyboard.dismiss()
                        if (this.props.preco == '' || this.props.preco == undefined || this.props.preco == null)
                            Toast.show({ text: 'Informe um PREÇO para o anúncio!', position: 'bottom', buttonText: 'Okay', type: 'danger', duration: 3000 })
                        else
                            this.showAlertAceitar()
                    }}
                    style={{ paddingLeft: 20, backgroundColor: globalStyles.bg }}>
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
        const { showAlertAceitar } = this.state
        const { params } = this.props.navigation.state
        const edit = params ? params.edit : false
        const id = params ? params.id : null

        // console.log(`edit: ${edit} - id: ${id}`)
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
                                <Input placeholder='R$' placeholderTextColor='rgba(88,88,88,0.6)' keyboardType='numeric' selectionColor='#585858' style={globalStyles.input2} onChangeText={(texto) => this.props.modificaPreco(texto)} value={this.props.preco} />
                            </Item>
                        </View>
                    </Form>
                </Content>
                {this.renderIcon()}
                <AwesomeAlert
                    contentContainerStyle={{ backgroundColor: '#00695c' }}
                    show={showAlertAceitar}
                    showProgress={false}

                    title="Deseja finalizar esse anúncio?"
                    titleStyle={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}

                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}

                    showCancelButton={true}
                    showConfirmButton={true}

                    cancelText="Não, não quero"
                    confirmText="Sim, eu quero"

                    confirmButtonColor="#fff"
                    cancelButtonColor="#e53935"
                    cancelButtonTextStyle={{ fontSize: 16, color: '#fff' }}
                    confirmButtonTextStyle={{ fontSize: 16, color: '#00695c' }}

                    overlayStyle={{ backgroundColor: 'rgba(255,255,255,0.6)' }}

                    onCancelPressed={() => {
                        this.hideAlert().then(this._resetarParaInicio())
                    }}

                    onConfirmPressed={() => {
                        this.hideAlert().then(this._cadastrarAnuncio(edit, id))
                    }}
                />
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
    foto: state.CadastroAnuncioReducer.foto,
    descricao: state.CadastroAnuncioReducer.descricao,
    titulo: state.CadastroAnuncioReducer.titulo,
    preco: state.CadastroAnuncioReducer.preco,
    erroCadastro: state.CadastroAnuncioReducer.erroCadastro,
    loading: state.CadastroAnuncioReducer.loading
})

export default connect(mapStateToProps, { modificaPreco, cadastrarAnuncio, editarAnuncio, resetarParaInicio })(Cadastro_9)