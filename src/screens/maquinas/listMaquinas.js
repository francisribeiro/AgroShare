import React, { Component } from 'react'
import { Button, Icon, List, ListItem, Text, Thumbnail, Left, Body, Right } from 'native-base'
import { TouchableOpacity, View } from 'react-native'

// Global Styles
import globalStyles from '../common/globalStyles'

// Imagens das máquinas
const img1 = require('../../assets/images/drawer-cover3.jpg')
const img2 = require('../../assets/images/drawer-cover1.jpg')
const img3 = require('../../assets/images/drawer-cover2.jpg')

// Dados das máquinas
const datas = [
    {
        img: img1,
        text: 'Trator BH 189',
        note: 'Valtra'
    },
    {
        img: img2,
        text: 'Trator 8600',
        note: "Massey Ferguson "
    },
    {
        img: img3,
        text: 'Trator 8030',
        note: "New Holland"
    }
]

export default class ListMaquinas extends Component {

    // List item component
    render() {
        return (
            <List
                dataArray={datas}
                renderRow={data =>
                    <TouchableOpacity >
                        <View pointerEvents='none'>
                            <ListItem thumbnail style={{ borderBottomColor: '#c9c9c9', borderBottomWidth: 0.7 }}>
                                <Left>
                                    <Thumbnail square size={5} source={data.img} />
                                </Left>
                                <Body style={{ borderBottomColor: '#fff' }}>
                                    <Text>
                                        {data.text}
                                    </Text>
                                    <Text numberOfLines={1} note>
                                        {data.note}
                                    </Text>
                                </Body>
                                <Right style={{ borderBottomColor: '#fff' }}>
                                    <Icon name='ios-arrow-forward' style={{ color: globalStyles.bg, fontSize: 28, paddingRight: 12 }} />
                                </Right>
                            </ListItem>
                        </View>
                    </TouchableOpacity>
                }
            />
        )
    }
}