import React, { Component } from 'react'
import { Button, Icon, List, ListItem, Text, Thumbnail, Left, Body, Right } from 'native-base'
import { TouchableOpacity, View } from 'react-native'

// Global Styles
import globalStyles from '../common/globalStyles'

// Imagens das máquinas
const avatar1 = require('../../assets/images/avatar1.png')
const avatar2 = require('../../assets/images/avatar2.png')
const avatar3 = require('../../assets/images/avatar3.png')

// Dados das máquinas
const datas = [
    {
        img: avatar1,
        nome: 'Iskra Lawrence',
        msg: 'Achei muito legal seu anúncio',
        time: '11:08 AM'
    },
    {
        img: avatar2,
        nome: 'Kendrick Lamar',
        msg: 'Esse valor é negociável?',
        time: '9:17 AM'
    },
    {
        img: avatar3,
        nome: 'Eva Green',
        msg: 'Já realizei o pagamento, pode conferir?',
        time: '07:42 AM'
    }
]

export default class ListMensagens extends Component {

    // List item component
    render() {
        return (
            <List
                dataArray={datas}
                renderRow={data =>
                    <View style={{ borderBottomColor: '#eaeaea', borderBottomWidth: 0.7 }}>
                        <TouchableOpacity >
                            <View pointerEvents='none'>
                                <ListItem thumbnail>
                                    <Left>
                                        <Thumbnail source={data.img} />
                                    </Left>
                                    <Body style={{ borderBottomColor: '#fff' }}>
                                        <Text>
                                            {data.nome}
                                        </Text>
                                        <Text numberOfLines={1} note>
                                            {data.msg}
                                        </Text>
                                    </Body>
                                    <Right style={{ borderBottomColor: '#fff', marginBottom: 20 }}>
                                        <Text numberOfLines={1} note>
                                            {data.time}
                                        </Text>
                                    </Right>
                                </ListItem>
                            </View>
                        </TouchableOpacity>
                    </ View>
                }
            />
        )
    }
}