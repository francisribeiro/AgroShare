import React, { Component } from 'react'
import { Container, Content, Header, Button, Text, Body, Icon } from 'native-base'
import { View, TouchableOpacity } from 'react-native'

import SingleCard from './singleCard' // Card Component
import globalStyles from '../common/globalStyles' // Global Styles

// Imagens das máquinas
const cardImage1 = require('../../assets/images/drawer-cover1.jpg')
const cardImage2 = require('../../assets/images/drawer-cover2.jpg')
const cardImage3 = require('../../assets/images/drawer-cover3.jpg')

export default class Anuncios extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    // Anúncios screen
    render() {
        // StackNavigator props
        const { navigate } = this.props.navigation

        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header androidStatusBarColor='#00695c' style={{ backgroundColor: globalStyles.bg, height: 70 }}>
                    <Body>
                        <Button iconLeft full large onPress={() => false} style={globalStyles.fullButtonHeader}>
                            <View>
                                <Text style={{ fontSize: 18, color: '#fff', paddingBottom: 10 }}>Tem uma máquina? Anuncie aqui.</Text>
                            </View>
                            <Icon name='ios-add-circle-outline' style={{ fontSize: 30, textAlign: 'left' }} />
                        </Button>
                    </Body>
                </Header>

                <Content>
                    <View style={{ paddingHorizontal: 10, paddingTop: 16 }}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigate('ProfileMaq')}>
                            <SingleCard tipo='TRATOR' modelo='BH 180 - COM ARADO DE DISCO REVERSÍVEL' marca='Valtra' thumb={cardImage3} preco='170' comments='12' />
                        </TouchableOpacity>

                        <SingleCard tipo='TRATOR' modelo='8600' marca='Massey Ferguson' thumb={cardImage1} preco='155' comments='23' />
                        <SingleCard tipo='TRATOR' modelo='8030' marca='New Holland' thumb={cardImage2} preco='145' comments='42' />
                    </View>
                </Content>
            </Container>
        )
    }
}