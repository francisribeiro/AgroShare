import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Thumbnail, Left, Body, Right } from 'native-base'

const cardImage = require('../../assets/images/drawer-cover.jpg')

export default class SingleCard extends Component {

    // Card Component
    render() {
        return (
            <Card noShadow>
                <CardItem>
                    <Left>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Trator 8600</Text>
                        <Text note>Massey Ferguson</Text>
                    </Left>
                    <Right>
                        <Icon name='ios-heart' />
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
                        source={cardImage}
                    />
                </CardItem>

                <CardItem style={{ paddingVertical: 0 }}>
                    <Left>
                        <Icon name='ios-star' style={styles.star} />
                        <Icon name='ios-star' style={styles.star} />
                        <Icon name='ios-star' style={styles.star} />
                        <Icon name='ios-star-half' style={styles.star} />
                        <Icon name='ios-star-outline' style={styles.star} />
                    </Left>
                    <Body>
                        <Text style={{ fontSize: 14 }}>99 Comentários</Text>
                    </Body>
                    <Right>
                        <Text style={{ fontWeight: 'bold' }}>R$155/h</Text>
                    </Right>
                </CardItem>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    star: {
        fontSize: 20,
        color: '#FFA500'
    }
})