import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon, Title, Thumbnail, Form, Item, Label, Input, Footer } from 'native-base'
import { View, TouchableOpacity, ListView, Keyboard, Image, ActivityIndicator } from 'react-native'
import IconBadge from 'react-native-icon-badge'
import { connect } from 'react-redux'
import AwesomeAlert from 'react-native-awesome-alerts'
import ImagePicker from 'react-native-image-crop-picker'
import RNFetchBlob from 'react-native-fetch-blob'
import b64 from 'base-64'

import { storage, auth, db } from '../../config/firebase/firebase'
import { perfilFetch, editarPerfil, modificaNome, modificaSobrenome } from '../../actions/CadastroUsuarioAction'
import { addHistorico } from '../../actions/AppAction'
import globalStyles from '../common/globalStyles' // Global Styles

// Profile Image
const profile = require('../../assets/images/profile.jpeg')

class Me extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    constructor(props) {
        super(props)
        this.state = {
            showAlertAceitar: false,
            showLoading: false
        }
    }

    openCamera() {
        this.setState({ showLoading: true })
        const Blob = RNFetchBlob.polyfill.Blob
        const fs = RNFetchBlob.fs
        window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
        window.Blob = Blob
        const uid = b64.encode(auth.currentUser.email)
        ImagePicker.openCamera({
            width: 300,
            height: 300,
            cropping: true,
            cropperActiveWidgetColor: '#00695c',
            cropperStatusBarColor: '#00695c',
            cropperToolbarColor: '#00695c',
            cropperToolbarTitle: 'Ajuste sua foto',
            mediaType: 'photo'
        }).then(image => {
            const imagePath = image.path
            let uploadBlob = null
            const imageRef = storage.ref(uid).child('profile.jpg')
            let mime = 'image/jpg'
            fs.readFile(imagePath, 'base64')
                .then((data) => {
                    // console.log(data)
                    return Blob.build(data, { type: `${mime};BASE64` })
                })
                .then((blob) => {
                    uploadBlob = blob
                    return imageRef.put(blob, { contentType: mime })
                })
                .then(() => {
                    uploadBlob.close()
                    return imageRef.getDownloadURL()
                })
                .then((url) => {
                    // let userData = {}
                    // userData[dpNo] = url
                    // firebase.database().ref('users').child(uid).update({...userData})
                    db.ref(`Usuarios/${uid}`).update({ foto: url })
                        .then(addHistorico(`Você atualizou sua imagem de perfil`, 'ios-image-outline', uid, '#0d47a1'))

                    this.setState({ showLoading: false })
                })
                .catch((error) => {
                    console.log(error)
                    this.setState({ showLoading: false })
                })

            // console.log(image)
        })
            .catch((error) => {
                console.log(error)
                this.setState({ showLoading: false })
            })
    }

    openGalery() {
        this.setState({ showLoading: true })
        const Blob = RNFetchBlob.polyfill.Blob
        const fs = RNFetchBlob.fs
        window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
        window.Blob = Blob
        const uid = b64.encode(auth.currentUser.email)
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            cropperActiveWidgetColor: '#00695c',
            cropperStatusBarColor: '#00695c',
            cropperToolbarColor: '#00695c',
            cropperToolbarTitle: 'Ajuste sua foto',
            mediaType: 'photo'
        }).then(image => {
            const imagePath = image.path
            let uploadBlob = null
            const imageRef = storage.ref(uid).child('profile.jpg')
            let mime = 'image/jpg'
            fs.readFile(imagePath, 'base64')
                .then((data) => {
                    // console.log(data)
                    return Blob.build(data, { type: `${mime};BASE64` })
                })
                .then((blob) => {
                    uploadBlob = blob
                    return imageRef.put(blob, { contentType: mime })
                })
                .then(() => {
                    uploadBlob.close()
                    return imageRef.getDownloadURL()
                })
                .then((url) => {
                    // let userData = {}
                    // userData[dpNo] = url
                    // firebase.database().ref('users').child(uid).update({...userData})
                    db.ref(`Usuarios/${uid}`).update({ foto: url })
                        .then(addHistorico(`Você atualizou sua imagem de perfil`, 'ios-image-outline', uid, '#0d47a1'))

                    this.setState({ showLoading: false })
                })
                .catch((error) => {
                    console.log(error)
                    this.setState({ showLoading: false })
                })

            // console.log(image)
        })
            .catch((error) => {
                console.log(error)
                this.setState({ showLoading: false })
            })
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
        this.props.perfilFetch()

    }

    _editarPerfil() {
        const { nome, sobrenome } = this.props
        this.props.editarPerfil({ nome, sobrenome, route: 'TabRoutes' })
    }

    renderThumb() {
        if (this.props.foto == 'false')
            return (<Thumbnail small source={profile} style={{ height: 130, width: 130, borderRadius: 75 }} />)
        else
            return (<Thumbnail large source={{ uri: this.props.foto }} style={{ height: 130, width: 130, borderRadius: 75 }} />)
    }

    // Me screen
    render() {
        const { navigate, goBack } = this.props.navigation
        const { showAlertAceitar, showLoading } = this.state

        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header androidStatusBarColor='#00695c' style={{ backgroundColor: globalStyles.bg, height: 70 }}>
                    <Left>
                        <Button transparent onPress={() => { goBack() }}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>

                    <Body style={{ paddingLeft: 10 }}>
                        <Title style={{ fontSize: 20 }}>Meu Perfil</Title>
                    </Body>

                    <Right />
                </Header>

                <Content style={{ paddingHorizontal: 15, paddingTop: 20 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        {this.renderThumb()}
                        <View style={{ paddingTop: 10, flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: 'row' }}>
                            <Button iconLeft bordered rounded style={{ borderColor: '#00796b' }} onPress={() => this.openCamera()} >
                                <Icon active name='ios-camera' style={{ color: '#00796b', paddingRight: 15, fontSize: 45 }} />
                            </Button>

                            <Button iconLeft bordered rounded style={{ borderColor: '#00796b', marginLeft: 10 }} onPress={() => this.openGalery()} >
                                <Icon active name='ios-images' style={{ color: '#00796b', paddingRight: 15, fontSize: 35 }} />
                            </Button>
                        </View>
                    </View>

                    <Form style={{ paddingBottom: 50 }}>
                        <View style={{ paddingRight: 15, paddingTop: 25 }}>
                            <Item stackedLabel>
                                <Label style={globalStyles.inputLabel2}>NOME</Label>
                                <Input returnKeyType='next' selectionColor='#585858' style={globalStyles.input3} onChangeText={(texto) => this.props.modificaNome(texto)} value={this.props.nome} />
                            </Item>

                            <Item style={{ paddingTop: 20 }} stackedLabel>
                                <Label style={globalStyles.inputLabel2}>SOBRENOME</Label>
                                <Input selectionColor='#585858' style={globalStyles.input3} onChangeText={(texto) => this.props.modificaSobrenome(texto)} value={this.props.sobrenome} />
                            </Item>
                        </View>
                    </Form>
                </Content>

                <Footer style={{ height: 60 }}>
                    <Button block rounded large style={{ backgroundColor: '#00796b', paddingHorizontal: 30 }}
                        onPress={() => {
                            Keyboard.dismiss()
                            setTimeout(() => this.showAlertAceitar(), 220)
                        }}>
                        <Text style={{ fontSize: 18, color: '#fff', marginBottom: 5 }}>Salvar Alterações</Text>
                    </Button>
                </Footer>

                <AwesomeAlert
                    contentContainerStyle={{ backgroundColor: '#00695c' }}
                    show={showAlertAceitar}
                    showProgress={false}

                    title="Deseja realmente alterar seu perfil?"
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
                        setTimeout(() => this._editarPerfil(), 1000)
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


mapStateToProps = state => ({
    nome: state.AppReducer.nome,
    sobrenome: state.AppReducer.sobrenome,
    foto: state.AppReducer.foto,
})

export default connect(mapStateToProps, { perfilFetch, editarPerfil, modificaNome, modificaSobrenome })(Me)