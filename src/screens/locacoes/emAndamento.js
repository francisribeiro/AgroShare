import React, { Component } from 'react'
import { List, Container } from 'native-base'

import LocacoesNotificacoes from './locacoesNotificacoes' // Locações Notificacoes Component

// Imagens dos tratores
const thumb1 = require('../../assets/images/drawer-cover1.jpg')
const thumb2 = require('../../assets/images/drawer-cover2.jpg')

// Dados das máquinas
const datas = [
    {
        img: thumb1,
        msg: 'Aluguel do Trator 8600',
        inicio: '15/02/2018',
        fim: '25/02/2017'
    },
    {
        img: thumb2,
        msg: 'Aluguel do Trator 8030',
        inicio: '20/02/2018',
        fim: '25/02/2017'
    }
]

export default class EmAndamento extends Component {
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