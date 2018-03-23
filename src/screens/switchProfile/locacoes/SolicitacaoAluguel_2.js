import React, { Component } from 'react'
import { Container, Header, Content, Body, Title, Button, Item, Label, Input, Left, Right, Icon, Form, Text, Toast, Spinner, Footer } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { connect } from 'react-redux'
import AwesomeAlert from 'react-native-awesome-alerts'
import b64 from 'base-64'

import { firebase } from '../../../config/firebase'
import globalStyles from '../../common/globalStyles' // Global Styles
import { CancelarSolicitacao } from '../../../actions/AppAction'

class SolicitacaoAluguel_2 extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    constructor(props) {
        super(props)
        this.state = { showAlertAceitar: false, showLoading: false }
    }

    showAlertAceitar = () => { this.setState({ showAlertAceitar: true }) }
    showLoading = () => { this.setState({ showLoading: true }) }

    async hideAlert() {
        this.setState({
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

    _CancelarSolicitacao(locador, aluguel) {
        this.props.CancelarSolicitacao(locador, aluguel)
    }
    // ProfileMaq screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation
        const { params } = this.props.navigation.state
        const { tipo, marca, preco, aluguel } = params
        const { showAlertAceitar, showLoading } = this.state

        console.log(aluguel)

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
                    <Button rounded bordered large block onPress={() => false} style={{ paddingHorizontal: 20, borderColor: globalStyles.bg }}>
                        <Text style={{ fontSize: 18, color: globalStyles.bg, marginBottom: 5 }}>Conversar com Locador</Text>
                    </Button>

                </Content>
                <View style={{ padding: 10, height: 95 }}>
                    <Button rounded large block onPress={() => this.showAlertAceitar()} style={{ paddingHorizontal: 20, backgroundColor: '#e53935' }}>
                        <Text style={{ fontSize: 18, color: '#fff', marginBottom: 5 }}>Cancelar Solicitação</Text>
                    </Button>
                </View>
                <AwesomeAlert
                    show={showAlertAceitar}
                    showProgress={false}

                    title="Deseja realmente cancelar a solicitação do aluguel?"
                    titleStyle={{ fontSize: 20, fontWeight: 'bold' }}

                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}

                    showCancelButton={true}
                    showConfirmButton={true}

                    cancelText="Não, não quero"
                    confirmText="Sim, eu quero"

                    confirmButtonColor="#00695c"
                    cancelButtonColor="#e53935"

                    cancelButtonTextStyle={{ fontSize: 16 }}
                    confirmButtonTextStyle={{ fontSize: 16 }}

                    overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.8)' }}

                    onCancelPressed={() => {
                        this.hideAlert()
                    }}

                    onConfirmPressed={() => {
                        this.hideAlert().then(this.showLoading())
                        setTimeout(() => this._CancelarSolicitacao(b64.encode(firebase.auth.currentUser.email), aluguel.aluguel), 500)
                    }}
                />

                <AwesomeAlert
                    show={showLoading}
                    closeOnTouchOutside={false}
                    closeOnHardwareBackPress={false}
                    showProgress={true}
                    progressSize={40}
                    progressColor='#00695c'
                    message='Aguarde um momento...'
                    messageStyle={{ color: '#585858' }}
                    overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
                />
            </Container>
        )
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { CancelarSolicitacao })(SolicitacaoAluguel_2)