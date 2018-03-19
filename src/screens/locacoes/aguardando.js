import React, { Component } from 'react'
import { List, Container, Text } from 'native-base'
import { ListView, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import b64 from 'base-64'

import { firebase } from '../../config/firebase'
import { AlugueisFetch } from '../../actions/AppAction'
import LocacoesNotificacoes from './locacoesNotificacoes' // Locações Notificacoes Component

// Imagem do trator
const thumb3 = require('../../assets/images/drawer-cover3.jpg')

class Aguardando extends Component {
    componentWillMount() {
        this.props.AlugueisFetch()
        this.createDataSource(this.props.alugueis)
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps.alugueis)
    }

    createDataSource(alugueis) {
        const result2 = alugueis.reduce((b, myObj) => {

            var newObj = Object.keys(myObj).reduce((c, v) => {
                if (typeof myObj[v] === 'object') c = Object.assign(c, { aluguel: v }, myObj[v]);
                else c[v] = myObj[v];
                return c;
            }, {});

            return b.concat(newObj)
        }, []);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 })
        this.dataSource = ds.cloneWithRows(result2)
    }

    renderRow(aluguel) {
        let userId = b64.encode(firebase.auth.currentUser.email)
        let tipo = ''
        let marca = ''

        firebase.db.ref(`Anuncios/${aluguel.locador}/${aluguel.maquina}`).on('value', (snapshot) => {
            tipo = snapshot.val().tipo
            marca = snapshot.val().marca
        })

        if (!aluguel.ativo && aluguel.locador == userId)
            return (
                <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigate('Chat')}>
                    <LocacoesNotificacoes img={thumb3} msg={`${tipo} - ${marca}`} inicio={aluguel.dataInicial} fim={aluguel.dataFinal} />
                </TouchableOpacity >
            )

        return null
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
    const alugueis = _.map(state.AlugueisListaReducer, (val, locatario) => {
        return { ...val, locatario }
    })

    return {
        alugueis
    }
}

export default connect(mapStateToProps, { AlugueisFetch })(Aguardando)