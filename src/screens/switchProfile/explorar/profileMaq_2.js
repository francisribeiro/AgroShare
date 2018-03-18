import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon, Title, Footer } from 'native-base'
import { View, Image } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'

import globalStyles from '../../common/globalStyles' // Global Styles

const cardImage1 = require('../../../assets/images/drawer-cover3.jpg')

export default class ProfileMaq extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: { backgroundColor: 'transparent', top: 0, right: 0, left: 0, position: 'absolute' },
            headerTintColor: '#00695c',
            headerRight: (<Icon name='md-more' style={{ color: '#00695c', fontSize: 28, paddingRight: 15 }} />)
        }
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
        const descricao = params ? params.anuncio.descricao : null
        const preco = params ? params.anuncio.preco : null
        const locador = params ? params.anuncio.locador : null
        const maquina = params ? params.anuncio.maquina : null

        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Content>
                    <View>
                        <Image style={{ resizeMode: 'cover', width: null, height: 240, flex: 1 }} source={cardImage1} />
                    </View>

                    <View style={{ padding: 20, paddingBottom: 15 }}>
                        <Title numberOfLines={4} style={{ textAlign: 'left', color: '#484848', fontSize: 32, fontWeight: 'bold' }}>{tipo.toUpperCase()} {marca.toUpperCase()} {modelo.toUpperCase()} - {titulo.toUpperCase()}</Title>
                    </View>

                    {/* <View style={{ borderColor: '#eaeaea', borderWidth: 0.7, paddingVertical: 10, marginVertical: 20 }}>
                        <View style={{ paddingHorizontal: 20, paddingBottom: 6 }}>
                            <Text style={{ fontSize: 18, color: '#484848', fontWeight: 'bold' }}>Benefícios</Text>
                        </View>
                        <View style={[globalStyles.itemAlign, { paddingHorizontal: 30 }]}>
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
                        </View>
                    </View> */}

                    <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
                        <Text style={{ fontSize: 18, color: '#484848', fontWeight: 'bold' }}>Sobre esta máquina</Text>
                        <Text>locador: {locador}</Text>
                        <Text>maquina: {maquina}</Text>
                    </View>

                    <View style={{ paddingHorizontal: 20, paddingTop: 10, paddingBottom: 20 }}>
                        <Text style={{ color: '#585858' }}>{descricao}</Text>
                    </View>
                </Content>
                <Footer style={{ height: 65, paddingTop: 20, borderTopColor: '#eaeaea', borderTopWidth: 0.7 }}>
                    <Left style={{ paddingBottom: 20, paddingLeft: 20 }}>
                        <Text style={{ fontWeight: 'bold', color: '#484848', fontSize: 18 }}>R${preco}/H</Text>
                        <View style={globalStyles.itemAlign}>
                            <Icon name='ios-star' style={globalStyles.star} />
                            <Icon name='ios-star' style={globalStyles.star} />
                            <Icon name='ios-star' style={globalStyles.star} />
                            <Icon name='ios-star-half' style={globalStyles.star} />
                            <Icon name='ios-star-outline' style={globalStyles.star} />
                        </View>
                    </Left>

                    <Right style={{ paddingBottom: 20, paddingRight: 20 }}>
                        <Button elevation={0} style={{ backgroundColor: '#00796b' }} onPress={() => navigate('Alugar_1', { tipo, marca, preco })}>
                            <View style={{ paddingHorizontal: 16, paddingBottom: 5 }}>
                                <Text style={{ fontSize: 18, paddingBottom: 6 }}>Quero Alugar</Text>
                            </View>
                        </Button>
                    </Right>
                </Footer>
            </Container >
        )
    }
}