import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, Thumbnail } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import AwesomeAlert from 'react-native-awesome-alerts'
import ImagePicker from 'react-native-image-crop-picker'
import RNFetchBlob from 'react-native-fetch-blob'
import b64 from 'base-64'
import { connect } from 'react-redux'

import { storage, auth, db } from '../../../config/firebase/firebase'
import globalStyles from '../../common/globalStyles' // Global Styles
const avatar = require('../../../assets/images/maq_avatar.jpg')
import { modificaFoto } from '../../../actions/CadastroAnuncioAction'

class AddFoto extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    constructor(props) {
        super(props)
        this.state = { showLoading: false, foto: false }
    }

    openCamera() {
        this.setState({ showLoading: true })
        const Blob = RNFetchBlob.polyfill.Blob
        const fs = RNFetchBlob.fs
        window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
        window.Blob = Blob
        const uid = b64.encode(auth.currentUser.email)
        ImagePicker.openCamera({
            width: 344,
            height: 256,
            cropping: true,
            cropperActiveWidgetColor: '#00695c',
            cropperStatusBarColor: '#00695c',
            cropperToolbarColor: '#00695c',
            cropperToolbarTitle: 'Ajuste sua foto',
            mediaType: 'photo'
        }).then(image => {
            const imagePath = image.path
            let uploadBlob = null
            const imageRef = storage.ref(uid).child(`maq_${b64.encode(new Date())}.jpg`)
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
                    // db.ref(`Usuarios/${uid}`).update({ foto: url })
                    this.props.modificaFoto(url)

                    this.setState({ showLoading: false, foto: true })
                })
                .catch((error) => {
                    console.log(error)
                    this.setState({ showLoading: false, foto: false })
                })

            // console.log(image)
        })
            .catch((error) => {
                console.log(error)
                this.setState({ showLoading: false, foto: false })
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
            width: 344,
            height: 256,
            cropping: true,
            cropperActiveWidgetColor: '#00695c',
            cropperStatusBarColor: '#00695c',
            cropperToolbarColor: '#00695c',
            cropperToolbarTitle: 'Ajuste sua foto',
            mediaType: 'photo'
        }).then(image => {
            const imagePath = image.path
            let uploadBlob = null
            const imageRef = storage.ref(uid).child(`maq_${b64.encode(new Date())}.jpg`)
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
                    // db.ref(`Usuarios/${uid}`).update({ foto: url })
                    this.props.modificaFoto(url)

                    this.setState({ showLoading: false, foto: true })
                })
                .catch((error) => {
                    console.log(error)
                    this.setState({ showLoading: false, foto: false })
                })

            // console.log(image)
        })
            .catch((error) => {
                console.log(error)
                this.setState({ showLoading: false, foto: false })
            })
    }

    showLoading = () => { this.setState({ showLoading: true }) }
    async hideAlert() { this.setState({ showLoading: false }) }

    renderThumb() {
        if (this.props.foto == 'false')
            return (<Thumbnail square large source={avatar} style={{ height: 240, width: 344 }} />)
        else
            return (<Thumbnail square large source={{ uri: this.props.foto }} style={{ height: 240, width: 344 }} />)
    }

    // Cadastro_2 screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation
        const { params } = this.props.navigation.state
        const edit = params ? params.edit : false
        const id = params ? params.id : null
        const { showLoading } = this.state

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
                        <Text style={globalStyles.pagTitulo2}>Foto da máquina</Text>
                    </View>
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
                </Content>
                <View style={globalStyles.floatingButton2}>
                    <Button rounded
                        onPress={() => { navigate('Cadastro_7', { edit, id }) }}
                        style={{ paddingLeft: 20, backgroundColor: globalStyles.bg }}>
                        <Text style={{ fontSize: 18, color: '#fff', marginBottom: 3 }}>Próximo</Text>
                        <Icon name='ios-arrow-forward' style={{ fontSize: 25, color: '#fff', paddingTop: 2 }} />
                    </Button>
                </View>
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
    foto: state.CadastroAnuncioReducer.foto
})

export default connect(mapStateToProps, { modificaFoto })(AddFoto)