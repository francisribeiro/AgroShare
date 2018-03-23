import React, { Component } from 'react'
import { Image } from 'react-native'
import { Icon, Card, CardItem, Text, Left, Body } from 'native-base'

import globalStyles from '../common/globalStyles' // Global Styles

export default class SingleCard extends Component {
    // Card Component
    render() {
        return (
            <Card style={{ elevation: 0, marginBottom: 25, borderColor: '#fff' }}>
                <CardItem cardBody style={{ paddingHorizontal: 12 }}>
                    <Image style={{ resizeMode: 'cover', width: null, height: 200, flex: 1 }} source={this.props.thumb} />
                </CardItem>

                <CardItem cardBody style={{ paddingTop: 10, paddingRight: 12 }}>
                    <Left>
                        <Body>
                            <Text numberOfLines={1} style={{ fontSize: 18, fontWeight: 'bold', color:'#2e2e2e' }}>
                                R${this.props.preco}/H <Icon name='ios-flash' style={{ fontSize: 20 }} /> {this.props.tipo} {this.props.modelo}
                            </Text>
                            <Text numberOfLines={1} note>{this.props.marca}</Text>
                        </Body>
                    </Left>
                </CardItem>

                {/* <CardItem cardBody style={{ paddingLeft: 8, paddingRight: 12, paddingBottom: 10 }}>
                    <Left>
                        <Icon name='ios-star' style={globalStyles.star} />
                        <Icon name='ios-star' style={globalStyles.star} />
                        <Icon name='ios-star' style={globalStyles.star} />
                        <Icon name='ios-star-half' style={globalStyles.star} />
                        <Icon name='ios-star-outline' style={globalStyles.star} />
                        <Text style={{ fontSize: 12 }}>{this.props.comments} Comentários</Text>
                    </Left>
                </CardItem> */}
            </Card>
        )
    }
}