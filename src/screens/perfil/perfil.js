import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon, Title, Thumbnail } from 'native-base'
import { View, TouchableOpacity } from 'react-native'
import IconBadge from 'react-native-icon-badge'
import { connect } from 'react-redux'
import _ from 'lodash'

import { auth, firebase } from '../../config/firebase'
import { getUserData } from '../../actions/AppAction'
import globalStyles from '../common/globalStyles' // Global Styles

// Profile Image
const profile = require('../../assets/images/profile.jpeg')

class Perfil extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    componentWillMount() {
        console.log(this.props.getUserData())
        this.criaFonteDeDados(this.props.contatos)

        // var users = firebase.db.ref('users')
        // users.on('value', (ss)=>{
        //     console.log(ss.val())
        // })
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados(nextProps.contatos)
    }

    criaFonteDeDados(contatos) {
        this.fonteDeDados = contatos
    }


    // Atividades screen
    render() {
        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header androidStatusBarColor='#00695c' style={{ backgroundColor: globalStyles.bg, height: 70 }}>
                    <Body style={{ paddingLeft: 10 }}>
                        <Title style={{ fontSize: 20, width: 144 }}>{contato.nome}</Title>
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
                        <TouchableOpacity onPress={() => false}>
                            <View style={globalStyles.alignMenu}>
                                <Title style={globalStyles.titleMenu}>Configurações</Title>
                                <Right>
                                    <Icon name='ios-settings-outline' style={globalStyles.iconMenu} />
                                </Right>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={globalStyles.itemMenu}>
                        <TouchableOpacity onPress={() => false}>
                            <View style={globalStyles.alignMenu}>
                                <Title style={globalStyles.titleMenu}>Precisa de ajuda?</Title>
                                <Right>
                                    <Icon name='ios-help-buoy-outline' style={globalStyles.iconMenu} />
                                </Right>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={globalStyles.itemMenu}>
                        <TouchableOpacity onPress={() => false}>
                            <View style={globalStyles.alignMenu}>
                                <Title style={globalStyles.titleMenu}>Envie um feedback</Title>
                                <Right>
                                    <Icon name='ios-mail-outline' style={globalStyles.iconMenu} />
                                </Right>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={globalStyles.itemMenu}>
                        <TouchableOpacity onPress={() => auth.doSignOut().then(() => this.props.navigation.navigate('Start'))}>
                            <View style={globalStyles.alignMenu}>
                                <Title style={globalStyles.titleMenu}>Sair</Title>
                                <Right>
                                    <Icon name='ios-undo-outline' style={globalStyles.iconMenu} />
                                </Right>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container >
        )
    }
}

mapStateToProps = state => {
    const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
        return { ...val, uid }
    })
    return { contatos }
}

export default connect(mapStateToProps, { getUserData })(Perfil)