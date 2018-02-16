import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon, Title, Thumbnail } from 'native-base'
import { View, TouchableHighlight } from 'react-native'
import IconBadge from 'react-native-icon-badge'

import globalStyles from '../common/globalStyles' // Global Styles

// Profile Image
const profile = require('../../assets/images/profile.png')

export default class Perfil extends Component {

    // StackNavigator Header configurations
    static navigationOptions = { title: 'Perfil', header: null }

    // Atividades screen
    render() {
        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header androidStatusBarColor='#018163' style={{ backgroundColor: globalStyles.bg, height: 70 }}>
                    <Body style={{ paddingLeft: 10 }}>
                        <Title style={{ fontSize: 20, width: 144 }}>Luna Lovegood</Title>
                    </Body>
                    
                    <Right>
                        <Thumbnail source={profile} />
                    </Right>
                </Header>

                <Content>
                    <TouchableHighlight underlayColor='#eaeaea' onPress={() => false}>
                        <View style={globalStyles.itemMenu}>
                            <Title style={globalStyles.titleMenu}>Visualizar e editar perfil</Title>
                            <Right>
                                <Icon name='ios-person-outline' style={globalStyles.iconMenu} />
                            </Right>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor='#eaeaea' onPress={() => false}>
                        <View style={globalStyles.itemMenu}>
                            <Title style={globalStyles.titleMenu}>Notificações</Title>
                            <Right>
                                <IconBadge
                                    MainElement={<Icon name='ios-notifications-outline' style={globalStyles.iconMenu} />}
                                    BadgeElement={<Text style={{ color: '#FFFFFF', fontSize: 11 }}>2</Text>}
                                    IconBadgeStyle={{ height: 20, width: 18 }}
                                    Hidden={false}
                                />
                            </Right>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor='#eaeaea' onPress={() => false}>
                        <View style={globalStyles.itemMenu}>
                            <Title style={globalStyles.titleMenu}>Configurações</Title>
                            <Right>
                                <Icon name='ios-settings-outline' style={globalStyles.iconMenu} />
                            </Right>
                        </View>
                    </TouchableHighlight>


                    <TouchableHighlight underlayColor='#eaeaea' onPress={() => false}>
                        <View style={globalStyles.itemMenu}>
                            <Title style={globalStyles.titleMenu}>Precisa de ajuda?</Title>
                            <Right>
                                <Icon name='ios-help-buoy-outline' style={globalStyles.iconMenu} />
                            </Right>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor='#eaeaea' onPress={() => false}>
                        <View style={globalStyles.itemMenu}>
                            <Title style={globalStyles.titleMenu}>Envie um feedback</Title>
                            <Right>
                                <Icon name='ios-mail-outline' style={globalStyles.iconMenu} />
                            </Right>
                        </View>
                    </TouchableHighlight>
                </Content>
            </Container >
        )
    }
}