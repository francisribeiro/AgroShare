import React, { Component } from 'react'
import { List, Container, Text } from 'native-base'
import { ListView, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import b64 from 'base-64'

import { firebase } from '../../config/firebase'
import { AlugueisFetch } from '../../actions/AppAction'
import LocacoesNotificacoes from './locacoesNotificacoes' // Locações Notificacoes Component

class Finalizados extends Component {

    componentWillMount() {
        this.props.AlugueisFetch()
        this.createDataSource(this.props.alugueis)
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps.alugueis)
    }

    IsoDate(date) {
        let newDate = date.split('/')
        let mm = newDate[1]
        let dd = newDate[0]
        let yyyy = newDate[2]

        return `${yyyy}-${mm}-${dd} 00:00:00`
    }

    jsCoreDateCreator = (dateString) => {
        // dateString *HAS* to be in this format "YYYY-MM-DD HH:MM:SS"  
        let dateParam = dateString.split(/[\s-:]/)
        dateParam[1] = (parseInt(dateParam[1], 10) - 1).toString()
        return +new Date(...dateParam)
    }

    createDataSource(alugueis) {
        var arr = []

        const result2 = alugueis.reduce((b, myObj) => {

            var t = Object.keys(myObj).forEach(e => {
                // console.log[myObj[e]]
                if (typeof myObj[e] === 'object') {
                    myObj[e].locatario = myObj.locatario
                    myObj[e].aluguel = e
                    arr.push(myObj[e])
                }
            })

            return null
        }, []);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 })
        this.dataSource = ds.cloneWithRows(arr)
    }

    renderRow(aluguel) {
        let userId = b64.encode(firebase.auth.currentUser.email)
        let tipo = ''
        let marca = ''
        let preco = 0
        let foto = 'false'
        let hoje = +new Date();
        let df = +new Date(this.jsCoreDateCreator(this.IsoDate(aluguel.dataFinal)))

        firebase.db.ref(`Anuncios/${aluguel.locador}/${aluguel.maquina}`).on('value', (snapshot) => {
            tipo = snapshot.val().tipo
            marca = snapshot.val().marca
            preco = snapshot.val().preco
            foto = snapshot.val().foto
        })

        if (aluguel.ativo && aluguel.locador == userId && (hoje > df))

            return (
                <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigate('MeusAlugueis', { aluguel, tipo, marca, preco })}>
                    <LocacoesNotificacoes img={foto} msg={`${tipo} - ${marca}`} inicio={aluguel.dataInicial} fim={aluguel.dataFinal} />
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
        return { locatario, ...val }
    })

    return {
        alugueis
    }
}

export default connect(mapStateToProps, { AlugueisFetch })(Finalizados)