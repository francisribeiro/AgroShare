import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon, Title, Badge } from 'native-base'
import { View, TouchableHighlight } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'

import globalStyles from '../common/globalStyles' // Global Styles

export default class Atividade extends Component {

    // StackNavigator Header configurations
    static navigationOptions = { Text: 'Atividade', header: null }

    // Atividade screen
    render() {
        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header androidStatusBarColor='#018163' style={{ backgroundColor: globalStyles.bg, height: 70 }}>
                    <Body style={{ paddingLeft: 10 }}>
                        <Title style={{ fontSize: 20, width: 207 }}>Atividade em Fevereiro</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='md-more' style={{ fontSize: 28 }} />
                        </Button>
                    </Right>
                </Header>

                <Grid>
                    <Col>
                        <Row style={[globalStyles.atvBorder, { borderColor: '#5cb85c', backgroundColor: 'rgba(92, 184, 92, 0.1)' }]}>
                            <Title style={globalStyles.atvTitle}>Rendimentos</Title>
                            <View style={[globalStyles.itemAlign, { paddingTop: 10 }]}>
                                <Icon name='ios-cash-outline' style={[globalStyles.atvIcon, { color: '#5cb85c' }]} />
                                <View style={{ marginTop: 6, marginLeft: 5 }}>
                                    <Text style={{ fontSize: 19 }}>R$ 0,00</Text>
                                </View>
                            </View>
                        </Row>

                        <Row style={[globalStyles.atvBorder, { borderColor: '#FFA500', backgroundColor: 'rgba(255, 165, 0, 0.1)' }]}>
                            <Title style={globalStyles.atvTitle}>Avaliações</Title>
                            <View style={[globalStyles.itemAlign, { paddingTop: 10 }]}>
                                <Icon name='ios-star-outline' style={[globalStyles.atvIcon, { color: '#FFA500' }]} />
                                <View style={{ marginTop: 6, marginLeft: 5 }}>
                                    <Text style={{ fontSize: 19 }}>15</Text>
                                </View>
                            </View>
                        </Row>

                        <Row style={[globalStyles.atvBorder, { marginBottom: 15, borderColor: '#fff' }]}>

                        </Row>
                    </Col>
                    <Col>
                        <Row style={[globalStyles.atvBorder, { marginRight: 15, borderColor: '#5bc0de', backgroundColor: 'rgba(91, 192, 222, 0.1)' }]}>
                            <Title style={globalStyles.atvTitle}>Visualizações</Title>
                            <View style={[globalStyles.itemAlign, { paddingTop: 10 }]}>
                                <Icon name='ios-eye-outline' style={[globalStyles.atvIcon, { color: '#5bc0de' }]} />
                                <View style={{ marginTop: 6, marginLeft: 5 }}>
                                    <Text style={{ fontSize: 19 }}>32</Text>
                                </View>
                            </View>
                        </Row>

                        <Row style={[globalStyles.atvBorder, { marginRight: 15, borderColor: '#d9534f', backgroundColor: 'rgba(217, 83, 79, 0.1)' }]}>
                            <Title style={globalStyles.atvTitle}>Compromisso</Title>
                            <View style={[globalStyles.itemAlign, { paddingTop: 10 }]}>
                                <Icon name='ios-list-box-outline' style={[globalStyles.atvIcon, { color: '#d9534f' }]} />
                                <View style={{ marginTop: 6, marginLeft: 5 }}>
                                    <Text style={{ fontSize: 19 }}>60%</Text>
                                </View>
                            </View>
                        </Row>

                        <Row style={[globalStyles.atvBorder, { marginRight: 15, marginBottom: 15, borderColor: '#fff' }]}>

                        </Row>
                    </Col>
                </Grid>
            </Container >
        )
    }
}