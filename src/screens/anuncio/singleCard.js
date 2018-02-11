import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Thumbnail, Left, Body, Right } from 'native-base'

// Global Styles
import globalStyles from '../common/globalStyles'

export default class SingleCard extends Component {

    // Card Component
    render() {
        return (
            <Card style={{ elevation: 0, marginBottom: 15 }}>
                <CardItem cardBody style={{ paddingTop: 12, paddingBottom: 12, paddingRight: 15 }}>
                    <Left>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{this.props.tipo} {this.props.modelo}</Text>
                        <Text numberOfLines={1} note>{this.props.marca}</Text>
                    </Left>
                    <Right>
                        <Icon name='ios-notifications' style={{ fontSize: 24 }} />
                    </Right>
                </CardItem>

                <CardItem cardBody>
                    <Image
                        style={{
                            resizeMode: 'cover',
                            width: null,
                            height: 200,
                            flex: 1
                        }}
                        source={this.props.thumb}
                    />
                </CardItem>

                <CardItem style={{ paddingVertical: 0 }}>
                    <Left>
                        <Icon name='ios-star' style={globalStyles.star} />
                        <Icon name='ios-star' style={globalStyles.star} />
                        <Icon name='ios-star' style={globalStyles.star} />
                        <Icon name='ios-star-half' style={globalStyles.star} />
                        <Icon name='ios-star-outline' style={globalStyles.star} />
                    </Left>
                    <Body>
                        <Text style={{ fontSize: 14 }}>{this.props.comments} Comentários</Text>
                    </Body>
                    <Right>
                        <Text style={{ fontWeight: 'bold' }}>R${this.props.preco}/h</Text>
                    </Right>
                </CardItem>
            </Card>
        )
    }
}