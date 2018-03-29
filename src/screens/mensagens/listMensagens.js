import React, { Component } from 'react'
import { List, ListItem, Text, Thumbnail, Left, Body, Right, } from 'native-base'
import { TouchableOpacity, View, ListView } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

import globalStyles from '../common/globalStyles' // Global Styles
import { contatosUsuarioFetch } from '../../actions/AppAction'
// Imagens dos avatares
const avatar1 = require('../../assets/images/avatar1.jpg')
// Dados das máquinas

class ListMensagens extends Component {
    // List item component

    componentWillMount() {
        this.props.contatosUsuarioFetch()
        this.criaFonteDeDados(this.props.contatos)
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados(nextProps.contatos)
    }

    criaFonteDeDados(contatos) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.fonteDeDados = ds.cloneWithRows(contatos)
    }

    renderRow(contato, navigate) {
        const { nome, sobrenome, email, mensagem, hora } = contato
        return (
            <View style={{ borderBottomColor: '#eaeaea', borderBottomWidth: 0.7 }}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigate('Chat', { nome, sobrenome, email })}>
                    <View pointerEvents='none'>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail source={avatar1} />
                            </Left>

                            <Body style={{ borderBottomColor: '#fff' }}>
                                <Text style={{ fontWeight: 'bold' }}>
                                    {nome} {sobrenome}
                                </Text>
                                <View style={{ paddingTop: 5 }}>
                                    <Text numberOfLines={1} note>{mensagem}</Text>
                                </View>
                            </Body>

                            <Right style={{ borderBottomColor: '#fff' }}>
                                <Text numberOfLines={1} note style={{ fontSize: 12, paddingBottom: 5 }}>{hora}</Text>
                                {/* <View style={globalStyles.tabBadgeGreen}>
                                    <Text style={{ fontSize: 12, color: '#fff', fontWeight: 'bold' }}>1</Text>
                                </View> */}
                            </Right>
                        </ListItem>
                    </View>
                </TouchableOpacity>
            </ View>
        )
    }

    render() {
        // StackNavigator props
        const { navigate } = this.props.nav

        return (
            <ListView
                enableEmptySections
                dataSource={this.fonteDeDados}
                renderRow={(data) => this.renderRow(data, navigate)}
            />
        )
    }
}


mapStateToProps = state => {
    const contatos = _.map(state.ListaContatosLocatarioReducer, (val, uid) => {
        return { ...val, uid }
    })

    return { contatos }
}

export default connect(mapStateToProps, { contatosUsuarioFetch })(ListMensagens);
