import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon, Title, Thumbnail } from 'native-base'
import { View, TouchableOpacity } from 'react-native'
import IconBadge from 'react-native-icon-badge'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import AwesomeAlert from 'react-native-awesome-alerts'

import { auth, firebase } from '../../config/firebase'
import { getUserData, NotificacaoHistorico } from '../../actions/AppAction'
import globalStyles from '../common/globalStyles' // Global Styles

// Profile Image
const profile = require('../../assets/images/profile.jpeg')

class Perfil extends Component {
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

    componentWillMount() {
        this.props.getUserData()
        this.props.NotificacaoHistorico()
    }

    reset() {
        this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({ routeName: 'Main' })]
        }))
    }

    renderThumb() {
        if (this.props.foto == 'false')
            return (<Thumbnail source={profile} />)
        else
            return (<Thumbnail source={{ uri: this.props.foto }} />)
    }

    // Atividades screen
    render() {
        const { nome, sobrenome } = this.props
        const { navigate } = this.props.navigation
        const { showAlertAceitar, showLoading } = this.state

        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header androidStatusBarColor='#00695c' style={{ backgroundColor: globalStyles.bg, height: 70 }}>
                    <Left style={{ paddingLeft: 10 }}>
                        <Text style={{ fontSize: 20, color: '#fff', width: 200, paddingLeft: 5 }}>{nome} {sobrenome}</Text>
                    </Left>

                    <Right>
                        {this.renderThumb()}
                    </Right>
                </Header>

                <Content>
                    <View style={globalStyles.itemMenu}>
                        <TouchableOpacity onPress={() => navigate('Me')}>
                            <View style={globalStyles.alignMenu}>
                                <Title style={globalStyles.titleMenu}>Visualizar e editar perfil</Title>
                                <Right>
                                    <Icon name='ios-person-outline' style={globalStyles.iconMenu} />
                                </Right>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={globalStyles.itemMenu}>
                        <TouchableOpacity onPress={() => navigate('Historico')}>
                            <View style={globalStyles.alignMenu}>
                                <Title style={globalStyles.titleMenu}>Histórico de Atividades</Title>
                                <Right>
                                    <IconBadge
                                        MainElement={<Icon name='ios-notifications-outline' style={globalStyles.iconMenu} />}
                                        BadgeElement={<Text style={{ color: '#FFFFFF', fontSize: 11 }}>{this.props.quantidadeHistorico}</Text>}
                                        IconBadgeStyle={{ height: 20, width: 18, backgroundColor: '#ff4444' }}
                                        Hidden={(this.props.quantidadeHistorico > 0) ? false : true}
                                    />
                                </Right>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={globalStyles.itemMenu}>
                        <TouchableOpacity onPress={() => navigate('load', { troca: 1 })}>
                            <View style={globalStyles.alignMenu}>
                                <Title style={globalStyles.titleMenu}>Quero alugar uma máquina</Title>
                                <Right>
                                    <Icon name='ios-swap-outline' style={globalStyles.iconMenu} />
                                </Right>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* <View style={globalStyles.itemMenu}>
                        <TouchableOpacity onPress={() => false}>
                            <View style={globalStyles.alignMenu}>
                                <Title style={globalStyles.titleMenu}>Configurações</Title>
                                <Right>
                                    <Icon name='ios-settings-outline' style={globalStyles.iconMenu} />
                                </Right>
                            </View>
                        </TouchableOpacity>
                    </View> */}


                    {/* <View style={globalStyles.itemMenu}>
                        <TouchableOpacity onPress={() => false}>
                            <View style={globalStyles.alignMenu}>
                                <Title style={globalStyles.titleMenu}>Precisa de ajuda?</Title>
                                <Right>
                                    <Icon name='ios-help-buoy-outline' style={globalStyles.iconMenu} />
                                </Right>
                            </View>
                        </TouchableOpacity>
                    </View> */}

                    {/* <View style={globalStyles.itemMenu}>
                        <TouchableOpacity onPress={() => false}>
                            <View style={globalStyles.alignMenu}>
                                <Title style={globalStyles.titleMenu}>Envie um feedback</Title>
                                <Right>
                                    <Icon name='ios-mail-outline' style={globalStyles.iconMenu} />
                                </Right>
                            </View>
                        </TouchableOpacity>
                    </View> */}

                    <View style={globalStyles.itemMenu}>
                        <TouchableOpacity onPress={() => this.showAlertAceitar()}>
                            <View style={globalStyles.alignMenu}>
                                <Title style={globalStyles.titleMenu}>Sair</Title>
                                <Right>
                                    <Icon name='ios-undo-outline' style={globalStyles.iconMenu} />
                                </Right>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Content>

                <AwesomeAlert
                    contentContainerStyle={{ backgroundColor: '#00695c' }}
                    show={showAlertAceitar}
                    showProgress={false}

                    title="Deseja realmente sair?"
                    titleStyle={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}

                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}

                    showCancelButton={true}
                    showConfirmButton={true}

                    cancelText="Não, ainda não"
                    confirmText="Sim, eu quero"

                    confirmButtonColor="#fff"
                    cancelButtonColor="#e53935"
                    cancelButtonTextStyle={{ fontSize: 16, color: '#fff' }}
                    confirmButtonTextStyle={{ fontSize: 16, color: '#00695c' }}

                    overlayStyle={{ backgroundColor: 'rgba(255,255,255,0.6)' }}

                    onCancelPressed={() => {
                        this.hideAlert()
                    }}

                    onConfirmPressed={() => {
                        this.hideAlert().then(this.showLoading())
                        setTimeout(() => auth.doSignOut().then(() => this.reset()), 2000)
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
            </Container >
        )
    }
}

const mapStateToProps = state => ({
    nome: state.AppReducer.nome,
    sobrenome: state.AppReducer.sobrenome,
    foto: state.AppReducer.foto,
    quantidadeHistorico: state.NotificacaoAguardandoReducer.qtdHistorico,
})

export default connect(mapStateToProps, { getUserData, NotificacaoHistorico })(Perfil)