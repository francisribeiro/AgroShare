import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, Toast, Spinner, } from 'native-base'
import { View, Keyboard, TouchableOpacity, Alert } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { connect } from 'react-redux'
import AwesomeAlert from 'react-native-awesome-alerts'
import { firebase } from '../../../config/firebase'

import globalStyles from '../../common/globalStyles' // Global Styles

import { cadastrarAluguel } from '../../../actions/CadastroAluguelAction'
import { resetarParaInicio } from '../../../actions/AppAction'

class Alugar_4 extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    constructor(props) {
        super(props)
        this.state = { showAlertAceitar: false, return: true }
    }

    showAlertAceitar = () => { this.setState({ showAlertAceitar: true }) }

    async hideAlert() {
        this.setState({
            showAlertAceitar: false
        })
    }

    _cadastrarAluguel() {
        const { dataInicial, dataFinal, formaPagamento, locador, maquina, ativo } = this.props
        setTimeout(() => this.props.cadastrarAluguel({ dataInicial, dataFinal, formaPagamento, locador, maquina, ativo }), 250)
    }

    _resetarParaInicio() {
        this.props.resetarParaInicio('TabRoutes_2')
    }

    subtractDate() {
        let dateI = this.props.dataInicial.split('/')
        let dateF = this.props.dataFinal.split('/')

        let newDateI = `${dateI[1]}/${dateI[0]}/${dateI[2]}`
        let newDateF = `${dateF[1]}/${dateF[0]}/${dateF[2]}`

        let timeDiff = Math.abs(new Date(newDateI).getTime() - new Date(newDateF).getTime())
        let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))

        return diffDays
    }


    IsoDate(date) {
        let newDate = date.split('/')
        let mm = newDate[1]
        let dd = newDate[0]
        let yyyy = newDate[2]

        return `${yyyy}-${mm}-${dd} 00:00:00`
    }

    jsCoreDateCreator = (dateString) => {
        // dateString *HAS* to be in this format "YYYY-MM-DD HH:MM:SS"  
        let dateParam = dateString.split(/[\s-:]/)
        dateParam[1] = (parseInt(dateParam[1], 10) - 1).toString()
        return +new Date(...dateParam)
    }

    validaPeriodo(di, df, di2, df2) {
        let d1 = +new Date(this.jsCoreDateCreator(this.IsoDate(di)))
        let d2 = +new Date(this.jsCoreDateCreator(this.IsoDate(df)))
        let d3 = +new Date(this.jsCoreDateCreator(this.IsoDate(di2)))
        let d4 = +new Date(this.jsCoreDateCreator(this.IsoDate(df2)))

        if (d3 >= d1 && d4 <= d2) // Verifica se é igual ou está entre
            this.setState({ return: false })
        else if (d3 < d1 && d4 > d1) // Verifica se começa antes e acaba depois
            this.setState({ return: false })
        else if (d3 < d1 && d4 == d1) // Verifica se começa antes e acaba no limite
            this.setState({ return: false })
        else if (d3 == d2 && d4 > d2) // Verifica se começa no limite e acaba depois
            this.setState({ return: false })
        else if (d3 <= d2 && d4 > d2)  // Verifica se começa no dentro e acaba depois
            this.setState({ return: false })
    }

    componentWillMount() {
        const { params } = this.props.navigation.state
        const { locador, maquina } = params
        let datas = []
        this.setState({ return: true })

        firebase.db.ref(`Alugueis`).once('value', (snapshot) => {
            if (snapshot.val() != null)
                Object.keys(snapshot.val()).map(function (objectKey, index) {
                    Object.keys(snapshot.val()[objectKey]).map(function (o, i) {
                        if (snapshot.val()[objectKey][o].maquina == maquina) {
                            datas.push({ d1: snapshot.val()[objectKey][o].dataInicial, d2: snapshot.val()[objectKey][o].dataFinal })
                        }
                    })
                })
        })

        for (var i = 0; i < datas.length; i++)
            this.validaPeriodo(datas[i].d1, datas[i].d2, this.props.dataInicial, this.props.dataFinal)
    }

    aceitarSolicitacao() {
        if (this.state.return)
            this.showAlertAceitar()
        else
            Alert.alert(
                'Período Inválido',
                'O periodo de datas que você solicitou aluguel se encontra indisponível, por favor volte e selecione outro período!',
                [{ text: 'ENTENDIDO', onPress: () => false }],
                { cancelable: false }
            )
    }

    days() {
        return (<Text style={globalStyles.confirmRent}>{this.subtractDate()}</Text>)
    }

    _preco(preco) {
        let total = this.subtractDate() * preco

        return (<Text style={{ color: '#cc0000', fontWeight: 'bold', fontSize: 20 }}>R$ {total},00 </Text>)
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
                {/* <Button rounded onPress={() => this.showAlertAceitar()} style={{ paddingLeft: 20, backgroundColor: globalStyles.bg }}> */}
                <Button rounded onPress={() => this.aceitarSolicitacao()} style={{ paddingLeft: 20, backgroundColor: globalStyles.bg }}>
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
        const { params } = this.props.navigation.state
        const { tipo, marca, preco, locador, maquina } = params
        const { showAlertAceitar } = this.state

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

                    <Text style={[globalStyles.txtDescription2, { fontSize: 20 }]}>
                        Você confirma a solicitação de aluguel do <Text style={globalStyles.confirmRent}>{tipo} - {marca}</Text> por um período de
                        <Text style={globalStyles.confirmRent}> {this.days()} dias</Text>, iniciando no dia
                        <Text style={globalStyles.confirmRent}> {this.props.dataInicial} </Text>
                        até o dia <Text style={globalStyles.confirmRent}>{this.props.dataFinal}</Text>. Pelo preço de {this._preco(25)}
                        pagando com <Text style={globalStyles.confirmRent}>{this.props.formaPagamento}</Text>?
                    </Text>
                    {/* <Text>locador: {locador}</Text>
                    <Text>maquina: {maquina}</Text> */}

                    <Form>
                        <View style={{ paddingRight: 15 }}>


                        </View>
                    </Form>
                </Content>
                {this.renderIcon()}
                <AwesomeAlert
                    contentContainerStyle={{ backgroundColor: '#00695c' }}
                    show={showAlertAceitar}
                    showProgress={false}

                    title="Deseja solicitar esse aluguel?"
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
                        this.hideAlert().then(this._cadastrarAluguel())
                    }}
                />
            </Container >
        )
    }
}

const mapStateToProps = state => ({
    dataInicial: state.CadastroAluguelReducer.dataInicial,
    dataFinal: state.CadastroAluguelReducer.dataFinal,
    formaPagamento: state.CadastroAluguelReducer.formaPagamento,
    locador: state.CadastroAluguelReducer.locador,
    maquina: state.CadastroAluguelReducer.maquina,
    ativo: state.CadastroAluguelReducer.ativo,
    loading: state.CadastroAluguelReducer.loading
})

export default connect(mapStateToProps, { cadastrarAluguel, resetarParaInicio })(Alugar_4)