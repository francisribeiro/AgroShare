import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Thumbnail, Left, Body, Right } from 'native-base'

// Global Styles
import globalStyles from '../common/globalStyles'

export default class SingleCard extends Component {

    // Card Component
    render() {
        return (
            <Card style={{ elevation: 0, marginBottom: 25, borderColor: '#fff' }}>

                <CardItem cardBody style={{ paddingHorizontal: 12 }}>
                    <Image style={{ resizeMode: 'cover', width: null, height: 200, flex: 1 }} source={this.props.thumb} />
                </CardItem>

                <CardItem cardBody style={{ paddingTop: 5, paddingRight: 12 }}>
                    <Left>
                        <Body>
                            <Text numberOfLines={1} style={{ fontSize: 18, fontWeight: 'bold' }}>
                                {this.props.tipo} {this.props.modelo}
                            </Text>
                            <Text numberOfLines={1} note>{this.props.marca}</Text>
                        </Body>
                    </Left>

                    <Right>
                        <Icon name='ios-notifications' style={{ fontSize: 24 }} />
                    </Right>
                </CardItem>

                <CardItem cardBody style={{ paddingLeft: 8, paddingRight: 12, paddingBottom: 20 }}>
                    <Left>
                        <Icon name='ios-star' style={globalStyles.star} />
                        <Icon name='ios-star' style={globalStyles.star} />
                        <Icon name='ios-star' style={globalStyles.star} />
                        <Icon name='ios-star-half' style={globalStyles.star} />
                        <Icon name='ios-star-outline' style={globalStyles.star} />
                        <Text style={{ fontSize: 12 }}>{this.props.comments} Comentários</Text>
                    </Left>

                    <Right>
                        <Text style={{ fontWeight: 'bold', color: globalStyles.bg }}>R${this.props.preco}/h</Text>
                    </Right>
                </CardItem>
            </Card>
        )
    }
}