import React, { Component } from 'react'
import { Container, Header, Content, Body, Title, Button, Item, Label, Input, Left, Right, Icon, Form, Text, Toast, Spinner, Footer } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { connect } from 'react-redux'
import AwesomeAlert from 'react-native-awesome-alerts'

import globalStyles from '../common/globalStyles' // Global Styles
import { AceitarAluguel, CancelarSolicitacao } from '../../actions/AppAction'

class SolicitacaoAluguel extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    constructor(props) {
        super(props)
        this.state = { showAlertRejeitar: false, showAlertAceitar: false, showLoading: false }
    }

    showAlertRejeitar = () => { this.setState({ showAlertRejeitar: true }) }
    showAlertAceitar = () => { this.setState({ showAlertAceitar: true }) }
    showLoading = () => { this.setState({ showLoading: true }) }

    async hideAlert() {
        this.setState({
            showAlertRejeitar: false,
            showAlertAceitar: false,
            showLoading: false
        })
    }

    subtractDate(i, f) {
        let dateI = i.split('/')
        let dateF = f.split('/')

        let newDateI = `${dateI[1]}/${dateI[0]}/${dateI[2]}`
        let newDateF = `${dateF[1]}/${dateF[0]}/${dateF[2]}`

        let timeDiff = Math.abs(new Date(newDateI).getTime() - new Date(newDateF).getTime())
        let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))

        return diffDays
    }

    days(i, f) {
        return (<Text style={[globalStyles.txtDescription2, { fontSize: 19, color: '#000' }]}>{this.subtractDate(i, f)}</Text>)
    }

    _preco(preco, i, f) {
        let total = this.subtractDate(i, f) * preco

        return (<Text style={{ color: '#000', fontWeight: '400', fontSize: 20 }}>R$ {total},00 </Text>)
    }

    _aceitarAluguel(locatario, aluguel) {
        this.props.AceitarAluguel(locatario, aluguel)
    }

    _CancelarSolicitacao(locador, aluguel, rota) {
        this.props.CancelarSolicitacao(locador, aluguel, rota)
    }

    // ProfileMaq screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation
        const { params } = this.props.navigation.state
        const { tipo, marca, preco, aluguel } = params
        const { showAlertRejeitar, showAlertAceitar, showLoading } = this.state

        return (
            <Container style={{ backgroundColor: '#fff' }}>

                <Header noShadow androidStatusBarColor='#00695c' style={{ backgroundColor: globalStyles.bg, height: 70 }}>
                    <Left>
                        <Button transparent onPress={() => goBack(null)}>
                            <Icon name='arrow-back' style={{ color: '#fff' }} />
                        </Button>
                    </Left>

                    <Body>
                        <Title style={{ fontSize: 20, width: 205 }}>Solicitação de aluguel</Title>
                    </Body>

                    <Right />
                </Header>

                <Content style={{ padding: 10, paddingTop: 20 }}>
                    <Text style={[globalStyles.txtDescription2, { fontSize: 19, fontWeight: '400', color: '#000' }]}>
                        <Text style={globalStyles.confirmRent}>Máquina: </Text>{tipo} - {marca} {`\n\n`}
                        <Text style={globalStyles.confirmRent}>Perído: </Text>{this.days(aluguel.dataInicial, aluguel.dataFinal)} dias{`\n\n`}
                        <Text style={globalStyles.confirmRent}>Data: </Text>{aluguel.dataInicial} até {aluguel.dataFinal}{`\n\n`}
                        <Text style={globalStyles.confirmRent}>Valor: </Text>{this._preco(preco, aluguel.dataInicial, aluguel.dataFinal)}{`\n\n`}
                        <Text style={globalStyles.confirmRent}>Forma de Pagamento: </Text>{aluguel.formaPagamento}{`\n\n`}
                    </Text>
                    {/* <Button rounded bordered large block onPress={() => false} style={{ paddingHorizontal: 20, borderColor: globalStyles.bg }}>
                        <Text style={{ fontSize: 18, color: globalStyles.bg, marginBottom: 5 }}>Conversar com Locatário</Text>
                    </Button> */}

                </Content>
                <Footer style={{ padding: 15, height: 100 }}>
                    <Left>
                        <Button rounded large onPress={() => this.showAlertRejeitar()} style={{ paddingHorizontal: 20, backgroundColor: '#e53935' }}>
                            <Text style={{ fontSize: 18, color: '#fff', marginBottom: 5 }}>Rejeitar</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Button rounded large onPress={() => this.showAlertAceitar()} style={{ paddingHorizontal: 20, backgroundColor: globalStyles.bg }}>
                            <Text style={{ fontSize: 18, color: '#fff', marginBottom: 5 }}>Aceitar</Text>
                        </Button>
                    </Right>
                </Footer>

                <AwesomeAlert
                    contentContainerStyle={{ backgroundColor: '#00695c' }}
                    show={showAlertRejeitar}
                    showProgress={false}

                    title="Deseja realmente rejeitar essa solicitação de aluguel?"
                    titleStyle={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}

                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}

                    showCancelButton={true}
                    showConfirmButton={true}

                    cancelText="Não, cancele isso"
                    confirmText="Sim, eu quero"

                    confirmButtonColor="#fff"
                    cancelButtonColor="#e53935"

                    cancelButtonTextStyle={{ fontSize: 16 }}
                    confirmButtonTextStyle={{ fontSize: 16, color: '#00695c' }}

                    overlayStyle={{ backgroundColor: 'rgba(255,255,255,0.6)' }}

                    onCancelPressed={() => {
                        this.hideAlert()
                    }}

                    onConfirmPressed={() => {
                        this.hideAlert().then(this.showLoading())
                        setTimeout(() => this._CancelarSolicitacao(aluguel.locatario, aluguel.aluguel, 'TabRoutes'), 500)
                    }}
                />

                <AwesomeAlert
                    contentContainerStyle={{ backgroundColor: '#00695c' }}
                    show={showAlertAceitar}
                    showProgress={false}

                    title="Deseja realmente aceitar essa solicitação de aluguel?"
                    titleStyle={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}

                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}

                    showCancelButton={true}
                    showConfirmButton={true}

                    cancelText="Não, cancele isso"
                    confirmText="Sim, eu quero"

                    confirmButtonColor="#fff"
                    cancelButtonColor="#e53935"

                    cancelButtonTextStyle={{ fontSize: 16 }}
                    confirmButtonTextStyle={{ fontSize: 16, color: '#00695c' }}

                    overlayStyle={{ backgroundColor: 'rgba(255,255,255,0.6)' }}

                    onCancelPressed={() => {
                        this.hideAlert()
                    }}

                    onConfirmPressed={() => {
                        this.hideAlert().then(this.showLoading())
                        setTimeout(() => this._aceitarAluguel(aluguel.locatario, aluguel.aluguel), 500)
                    }}
                />

                <AwesomeAlert
                    contentContainerStyle={{ backgroundColor: '#00695c' }}
                    show={showLoading}
                    closeOnTouchOutside={false}
                    closeOnHardwareBackPress={false}
                    showProgress={true}
                    progressSize={40}
                    progressColor='#fff'
                    message='Aguarde um momento...'
                    messageStyle={{ color: '#fff' }}
                    overlayStyle={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
                />
            </Container>
        )
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { AceitarAluguel, CancelarSolicitacao })(SolicitacaoAluguel)