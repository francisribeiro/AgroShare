import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon, Title } from 'native-base'
import { View, TouchableOpacity, ListView } from 'react-native'
import IconBadge from 'react-native-icon-badge'
import { connect } from 'react-redux'

import { historicoFetch } from '../../actions/AppAction'
import globalStyles from '../common/globalStyles' // Global Styles

// Profile Image
const profile = require('../../assets/images/profile.jpeg')

class Historico extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    componentWillMount() {
        this.props.historicoFetch()
        this.criaFonteDeDados(this.props.atividades)
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados(nextProps.atividades)
    }

    criaFonteDeDados(atividades) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.fonteDeDados = ds.cloneWithRows(atividades)
    }

    renderRow(atividade, navigate) {
        const { msg, lida, data, icone } = atividade
        const isBold = (lida) ? '100' : '500'

        return (
            <View style={globalStyles.itemHistorico}>
                <TouchableOpacity onPress={() => false}>
                    <View style={globalStyles.alignHistorico}>
                        <Icon name={icone} style={[globalStyles.iconHistorico, { fontWeight: isBold }]} />
                        <Body style={{ paddingLeft: 15 }}>
                            <Text style={[globalStyles.txtHistorico, { fontWeight: isBold }]}>{msg} <Text note style={{ fontSize: 12, fontWeight: isBold }}> em: {data}</Text></Text>
                        </Body>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    // Historico screen
    render() {
        const { navigate, goBack } = this.props.navigation

        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header androidStatusBarColor='#00695c' style={{ backgroundColor: globalStyles.bg, height: 70 }}>
                    <Left>
                        <Button transparent onPress={() => goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>

                    <Body style={{ paddingLeft: 10 }}>
                        <Title style={{ fontSize: 20 }}>Meu Histórico</Title>
                    </Body>

                    <Right />
                </Header>

                <Content>
                    <ListView
                        enableEmptySections
                        dataSource={this.fonteDeDados}
                        renderRow={(data) => this.renderRow(data, navigate)}
                    />
                </Content>
            </Container >
        )
    }
}


mapStateToProps = state => {
    const atividades = _.map(state.ListaHistoricoReducer, (val, uid) => {
        return { ...val, uid }
    })

    return { atividades }
}

export default connect(mapStateToProps, { historicoFetch })(Historico)