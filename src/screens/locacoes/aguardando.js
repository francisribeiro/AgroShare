import React, { Component } from 'react'
import { List, Container } from 'native-base'

import LocacoesNotificacoes from './locacoesNotificacoes' // Locações Notificacoes Component

// Imagem do trator
const thumb3 = require('../../assets/images/drawer-cover3.jpg')

// Dados das máquinas
const datas = [
    {
        img: thumb3,
        msg: 'Aluguel do Trator BH 180',
        inicio: '12/03/2018',
        fim: '22/03/2018'
    }
]

export default class Aguardando extends Component {
    render() {
        return (
            <List
                dataArray={datas}
                renderRow={data =>
                    <LocacoesNotificacoes img={data.img} msg={data.msg} inicio={data.inicio} fim={data.fim} />
                } />
        )
    }
}