import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon, Title, Thumbnail } from 'native-base'
import { View, TouchableOpacity } from 'react-native'
import IconBadge from 'react-native-icon-badge'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import AwesomeAlert from 'react-native-awesome-alerts'

import { auth, firebase } from '../../../config/firebase'
import { getUserData } from '../../../actions/AppAction'
import globalStyles from '../../common/globalStyles' // Global Styles

// Profile Image
const profile = require('../../../assets/images/profile.jpeg')

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
    }

    reset() {
        this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({ routeName: 'Main' })]
        }))
    }
    // Atividades screen
    render() {
        const { nome, sobrenome } = this.props
        const { navigate } = this.props.navigation
        const { showAlertAceitar, showLoading } = this.state

        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header androidStatusBarColor='#00695c' style={{ backgroundColor: globalStyles.bg, height: 70 }}>
                    <Body style={{ paddingLeft: 10 }}>
                        <Title style={{ fontSize: 20, width: 144 }}>{nome} {sobrenome}</Title>
                    </Body>

                    <Right>
                        <Thumbnail source={profile} />
                    </Right>
                </Header>

                <Content>
                    <View style={globalStyles.itemMenu}>
                        <TouchableOpacity onPress={() => false}>
                            <View style={globalStyles.alignMenu}>
                                <Title style={globalStyles.titleMenu}>Visualizar e editar perfil</Title>
                                <Right>
                                    <Icon name='ios-person-outline' style={globalStyles.iconMenu} />
                                </Right>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={globalStyles.itemMenu}>
                        <TouchableOpacity onPress={() => false}>
                            <View style={globalStyles.alignMenu}>
                                <Title style={globalStyles.titleMenu}>Notificações</Title>
                                <Right>
                                    <IconBadge
                                        MainElement={<Icon name='ios-notifications-outline' style={globalStyles.iconMenu} />}
                                        BadgeElement={<Text style={{ color: '#FFFFFF', fontSize: 11 }}>2</Text>}
                                        IconBadgeStyle={{ height: 20, width: 18, backgroundColor: '#ff4444' }}
                                        Hidden={false}
                                    />
                                </Right>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={globalStyles.itemMenu}>
                        <TouchableOpacity onPress={() => navigate('load', { troca: 0 })}>
                            <View style={globalStyles.alignMenu}>
                                <Title style={globalStyles.titleMenu}>Quero alugar minha máquina</Title>
                                <Right>
                                    <Icon name='ios-swap-outline' style={globalStyles.iconMenu} />
                                </Right>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={globalStyles.itemMenu}>
                        <TouchableOpacity onPress={() => false}>
                            <View style={globalStyles.alignMenu}>
                                <Title style={globalStyles.titleMenu}>Configurações</Title>
                                <Right>
                                    <Icon name='ios-settings-outline' style={globalStyles.iconMenu} />
                                </Right>
                            </View>
                        </TouchableOpacity>
                    </View>


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

                    cancelText="Não"
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
    sobrenome: state.AppReducer.sobrenome
})

export default connect(mapStateToProps, { getUserData })(Perfil)