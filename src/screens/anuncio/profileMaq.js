import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon, Title, Footer } from 'native-base'
import { View, Image, TouchableOpacity } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
import AwesomeAlert from 'react-native-awesome-alerts'
import { connect } from 'react-redux'

import { apagarAnuncio } from '../../actions/CadastroAnuncioAction'
import globalStyles from '../common/globalStyles' // Global Styles

const avatar = require('../../assets/images/maq_avatar.jpg')

class ProfileMaq extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: { backgroundColor: 'transparent', top: 0, right: 0, left: 0, position: 'absolute' },
            headerTintColor: '#00695c',
            headerRight: (
                <TouchableOpacity activeOpacity={0.5} onPress={() => console.log(navigation.state.params.handleShowAlertAceitar())} >
                    <Icon name='ios-trash-outline' style={{ color: '#00695c', fontSize: 28, paddingRight: 15 }} />
                </TouchableOpacity>
            )
        }
    }

    renderThumb(foto) {
        if (foto == 'false')
            return (<Image style={{ resizeMode: 'cover', width: null, height: 240, flex: 1 }} source={avatar} />)
        else
            return (<Image style={{ resizeMode: 'cover', width: null, height: 240, flex: 1 }} source={{ uri: foto }} />)
    }

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

    componentDidMount() {
        this.props.navigation.setParams({ handleShowAlertAceitar: this.showAlertAceitar })
    }


    // ProfileMaq screen
    render() {
        // StackNavigator props
        const { navigate, goBack } = this.props.navigation
        const { params } = this.props.navigation.state
        const tipo = params ? params.anuncio.tipo : null
        const marca = params ? params.anuncio.marca : null
        const modelo = params ? params.anuncio.modelo : null
        const titulo = params ? params.anuncio.titulo : null
        const foto = params ? params.anuncio.foto : null
        const descricao = params ? params.anuncio.descricao : null
        const preco = params ? params.anuncio.preco : null
        const id = params ? params.anuncio.id : null
        const { showAlertAceitar, showLoading } = this.state

        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Content>
                    <View>
                        {this.renderThumb(foto)}
                    </View>

                    <View style={{ padding: 20, paddingBottom: 15 }}>
                        <Title numberOfLines={4} style={{ textAlign: 'left', color: '#484848', fontSize: 32, fontWeight: 'bold' }}>{tipo.toUpperCase()} {marca.toUpperCase()} {modelo.toUpperCase()} - {titulo.toUpperCase()}</Title>
                    </View>

                    {/* <View style={{ borderColor: '#eaeaea', borderWidth: 0.7, paddingVertical: 10, marginVertical: 20 }}> */}
                    {/* <View style={{ paddingHorizontal: 20, paddingBottom: 6 }}>
                            <Text style={{ fontSize: 18, color: '#484848', fontWeight: 'bold' }}>Benefícios</Text>
                        </View> */}
                    {/* <View style={[globalStyles.itemAlign, { paddingHorizontal: 30 }]}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', paddingRight: 37 }}>
                                <Icon name='ios-build-outline' style={{ fontSize: 40, color: '#585858' }} />
                                <Text style={{ color: '#585858', fontSize: 12 }}>chave</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', paddingRight: 37 }}>
                                <Icon name='ios-train-outline' style={{ fontSize: 40, color: '#585858' }} />
                                <Text style={{ color: '#585858', fontSize: 12 }}>Trem</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', paddingRight: 37 }}>
                                <Icon name='ios-flash-outline' style={{ fontSize: 40, color: '#585858' }} />
                                <Text style={{ color: '#585858', fontSize: 12 }}>Raio</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', paddingRight: 37 }}>
                                <Icon name='ios-flame-outline' style={{ fontSize: 40, color: '#585858' }} />
                                <Text style={{ color: '#585858', fontSize: 12 }}>Fogo</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name='ios-color-fill-outline' style={{ fontSize: 40, color: '#585858' }} />
                                <Text style={{ color: '#585858', fontSize: 12 }}>Oléo</Text>
                            </View>
                        </View> */}
                    {/* </View> */}

                    <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
                        <Text style={{ fontSize: 18, color: '#484848', fontWeight: 'bold' }}>Sobre esta máquina</Text>
                    </View>

                    <View style={{ paddingHorizontal: 20, paddingTop: 10, paddingBottom: 20 }}>
                        <Text style={{ color: '#585858' }}>{descricao}</Text>
                    </View>
                </Content>
                <Footer style={{ height: 65, paddingTop: 20, borderTopColor: '#eaeaea', borderTopWidth: 0.7 }}>
                    <Left style={{ paddingBottom: 20, paddingLeft: 20 }}>
                        <Text style={{ fontWeight: 'bold', color: '#484848', fontSize: 18 }}>R${preco}/H</Text>
                        {/* <View style={globalStyles.itemAlign}>
                            <Icon name='ios-star' style={globalStyles.star} />
                            <Icon name='ios-star' style={globalStyles.star} />
                            <Icon name='ios-star' style={globalStyles.star} />
                            <Icon name='ios-star-half' style={globalStyles.star} />
                            <Icon name='ios-star-outline' style={globalStyles.star} />
                        </View> */}
                    </Left>

                    <Right style={{ paddingBottom: 20, paddingRight: 20 }}>
                        <Button elevation={0} style={{ backgroundColor: '#00796b' }}
                            onPress={() => {
                                navigate('addMaq', { edit: true, id })
                            }}>
                            <View style={{ paddingHorizontal: 16, paddingBottom: 5 }}>
                                <Text style={{ fontSize: 18 }}>Alterar anúncio</Text>
                            </View>
                        </Button>
                    </Right>
                </Footer>
                <AwesomeAlert
                    contentContainerStyle={{ backgroundColor: '#00695c' }}
                    show={showAlertAceitar}
                    showProgress={false}

                    title="Deseja realmente APAGAR este anúncio?"
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
                        this.hideAlert()
                    }}

                    onConfirmPressed={() => {
                        this.hideAlert().then(this.showLoading())
                        setTimeout(() => this.props.apagarAnuncio(id), 2000)
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

})

export default connect(mapStateToProps, { apagarAnuncio })(ProfileMaq)