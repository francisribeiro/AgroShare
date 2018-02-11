import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon } from 'native-base'
import { View } from 'react-native'

// Card Component
import SingleCard from './singleCard'

// Global Styles
import globalStyles from '../common/globalStyles'

// Imagens das máquinas
const cardImage1 = require('../../assets/images/drawer-cover1.jpg')
const cardImage2 = require('../../assets/images/drawer-cover2.jpg')
const cardImage3 = require('../../assets/images/drawer-cover3.jpg')


export default class Anuncios extends Component {

    // StackNavigator Header configurations
    static navigationOptions = { title: 'Anuncios', header: null }

    // Home screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation

        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header noShadow androidStatusBarColor='#018163' style={{ backgroundColor: globalStyles.bg, height: 85 }}>
                    <Body>
                        <Button iconRight full large onPress={() => navigate('PasswordRecovery')} style={globalStyles.fullButtonHeader}>
                            <Icon name='ios-add-circle-outline' style={{ fontSize: 30, textAlign: 'left' }} />
                            <View><Text style={{
                                fontSize: 17,
                                color: '#fff',
                                paddingBottom: 10
                            }}>Tem uma máquina? Anuncie aqui.</Text></View>
                        </Button>
                    </Body>
                </Header>

                <Content>
                    <View style={{ paddingHorizontal: 10, paddingTop: 16 }}>
                        <SingleCard tipo='Trator' modelo='BH 180' marca='Valtra' thumb={cardImage3} preco='170' comments='12' />
                        <SingleCard tipo='Trator' modelo='8600' marca='Massey Ferguson' thumb={cardImage1} preco='155' comments='23' />
                        <SingleCard tipo='Trator' modelo='8030' marca='New Holland' thumb={cardImage2} preco='145' comments='42' />
                    </View>
                </Content>
            </Container>
        )
    }
}