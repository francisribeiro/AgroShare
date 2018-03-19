import React, { Component } from 'react'
import { List, Container, Text } from 'native-base'
import { ListView, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

import { AlugueisFetch } from '../../actions/AppAction'
import LocacoesNotificacoes from './locacoesNotificacoes' // Locações Notificacoes Component

// Imagem do trator
const thumb3 = require('../../assets/images/drawer-cover3.jpg')

class EmAndamento extends Component {

    componentWillMount() {
        this.props.AlugueisFetch()
        this.createDataSource(this.props.alugueis)
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps.alugueis)
    }

    createDataSource(alugueis) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 })
        this.dataSource = ds.cloneWithRows(alugueis)
    }

    renderRow(aluguel) {
        if (aluguel.ativo)
            return (
                <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigate('Chat')}>
                    <LocacoesNotificacoes img={thumb3} msg='{data.msg}' inicio={aluguel.dataInicial} fim={aluguel.dataFinal} />
                </TouchableOpacity >
            )

        return (
            <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                <Text style={{ fontSize: 18, color: '#585858' }}>Você ainda não possuí nenhum aluguel em andamento...</Text>
            </View>
        )
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={(data) => this.renderRow(data)}
            />
        )
    }
}

const mapStateToProps = state => {
    const alugueis = _.map(state.AlugueisListaReducer, (val) => {
        return { ...val }
    })

    return {
        alugueis
    }
}

export default connect(mapStateToProps, { AlugueisFetch })(EmAndamento)