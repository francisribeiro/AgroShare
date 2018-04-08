import React, { Component } from 'react'
import { List, ListItem, Text, Thumbnail, Left, Body, Right, Icon } from 'native-base'
import { TouchableOpacity, View } from 'react-native'

import globalStyles from '../common/globalStyles' // Global Styles

const avatar = require('../../assets/images/maq_avatar.jpg')

export default class LocacoesNotificacoes extends Component {
    // List item component

    renderThumb(foto) {
        if (foto == 'false')
            return (<Thumbnail square source={avatar} />)
        else
            return (<Thumbnail square source={{ uri: foto }} />)
    }

    render() {
        return (
            <View style={{ borderBottomColor: '#eaeaea', borderBottomWidth: 0.7 }}>
                {/* <TouchableOpacity activeOpacity={0.5}> */}
                <View pointerEvents='none'>
                    <ListItem thumbnail>
                        <Body style={{ borderBottomColor: '#fff' }}>
                            <View style={{ paddingBottom: 5 }}>
                                <Text numberOfLines={1} style={{ fontWeight: 'bold' }}>
                                    {this.props.msg}
                                </Text>
                            </View>
                            <View style={globalStyles.itemAlign}>
                                <Icon name='ios-calendar-outline' style={{ color: '#ff4444' }} />
                                <View style={{ paddingLeft: 5, paddingTop: 5 }}>
                                    <Text numberOfLines={1} note>
                                        {this.props.inicio} até {this.props.fim}
                                    </Text>
                                </View>
                            </View>
                        </Body>

                        <Right style={{ borderBottomColor: '#fff' }}>
                            {this.renderThumb(this.props.img)}
                        </Right>
                    </ListItem>
                </View>
                {/* </TouchableOpacity> */}
            </ View>
        )
    }
}