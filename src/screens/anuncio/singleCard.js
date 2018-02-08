import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Thumbnail, Left, Body, Right } from 'native-base'
export default class SingleCard extends Component {

    // Card Component
    render() {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail />
                        <Body>
                            <Text>Trator 6100J</Text>
                            <Text note>John Deere</Text>
                        </Body>
                    </Left>
                </CardItem>

                <CardItem cardBody>
                    <Image
                        style={{
                            resizeMode: "cover",
                            width: null,
                            height: 200,
                            flex: 1
                        }}

                    />
                </CardItem>

                <CardItem style={{ paddingVertical: 0 }}>
                    <Left>
                        <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>49 Likes</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Button transparent>
                            <Icon active name="ios-text" />
                            <Text>8 Comments</Text>
                        </Button>
                    </Body>
                    <Right>
                        <Text>11h ago</Text>
                    </Right>
                </CardItem>
            </Card>
        )
    }
}