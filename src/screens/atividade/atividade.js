import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon, Title, Badge } from 'native-base'
import { View, TouchableOpacity } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'

import globalStyles from '../common/globalStyles' // Global Styles

export default class Atividade extends Component {
    // Atividade screen
    render() {
        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header androidStatusBarColor='#00695c' style={{ backgroundColor: globalStyles.bg, height: 70 }}>
                    <Left>
                        <Button transparent>
                            <Icon name='ios-arrow-dropleft' style={{ fontSize: 32 }} />
                        </Button>
                    </Left>
                    <Body style={{ paddingLeft: 0 }}>
                        <Title style={{ fontSize: 20, width: 207 }}>Atividade em Fevereiro</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='ios-arrow-dropright' style={{ fontSize: 32 }} />
                        </Button>
                    </Right>
                </Header>

                <Grid>
                    <Col>
                        <Row style={globalStyles.atvBorder}>
                            <TouchableOpacity activeOpacity={0.4} style={globalStyles.atvCenter}>
                                <Title style={globalStyles.atvTitle}>Rendimentos</Title>
                                <View style={[globalStyles.itemAlign, { paddingTop: 10 }]}>
                                    <Icon name='ios-cash-outline' style={globalStyles.atvIcon} />
                                    <View style={{ marginTop: 6, marginLeft: 8 }}>
                                        <Text style={{ fontSize: 19, color: '#2E2E2E' }}>R$ 0,00</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </Row>

                        <Row style={globalStyles.atvBorder}>
                            <TouchableOpacity activeOpacity={0.4} style={globalStyles.atvCenter}>
                                <Title style={globalStyles.atvTitle}>Avaliações</Title>
                                <View style={[globalStyles.itemAlign, { paddingTop: 10 }]}>
                                    <Icon name='ios-star-outline' style={globalStyles.atvIcon} />
                                    <View style={{ marginTop: 6, marginLeft: 8 }}>
                                        <Text style={{ fontSize: 19, color: '#2E2E2E' }}>15</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </Row>

                        <Row style={[globalStyles.atvBorder, { marginBottom: 15 }]}>
                            <TouchableOpacity activeOpacity={0.4} style={globalStyles.atvCenter}>
                                <Title style={globalStyles.atvTitle}>Comentários</Title>
                                <View style={[globalStyles.itemAlign, { paddingTop: 10 }]}>
                                    <Icon name='ios-text-outline' style={globalStyles.atvIcon} />
                                    <View style={{ marginTop: 6, marginLeft: 8 }}>
                                        <Text style={{ fontSize: 19, color: '#2E2E2E' }}>77</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </Row>
                    </Col>
                    <Col>
                        <Row style={[globalStyles.atvBorder, { marginRight: 15 }]}>
                            <TouchableOpacity activeOpacity={0.4} style={globalStyles.atvCenter}>
                                <Title style={globalStyles.atvTitle}>Visualizações</Title>
                                <View style={[globalStyles.itemAlign, { paddingTop: 10 }]}>
                                    <Icon name='ios-eye-outline' style={globalStyles.atvIcon} />
                                    <View style={{ marginTop: 6, marginLeft: 8 }}>
                                        <Text style={{ fontSize: 19, color: '#2E2E2E' }}>32</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </Row>

                        <Row style={[globalStyles.atvBorder, { marginRight: 15 }]}>
                            <TouchableOpacity activeOpacity={0.4} style={globalStyles.atvCenter}>
                                <Title style={globalStyles.atvTitle}>Compromisso</Title>
                                <View style={[globalStyles.itemAlign, { paddingTop: 10 }]}>
                                    <Icon name='ios-list-box-outline' style={globalStyles.atvIcon} />
                                    <View style={{ marginTop: 6, marginLeft: 8 }}>
                                        <Text style={{ fontSize: 19, color: '#2E2E2E' }}>60%</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </Row>

                        <Row style={[globalStyles.atvBorder, { marginRight: 15, marginBottom: 15}]}>
                            <TouchableOpacity activeOpacity={0.4} style={globalStyles.atvCenter}>
                                <Title style={globalStyles.atvTitle}>Perguntas</Title>
                                <View style={[globalStyles.itemAlign, { paddingTop: 10 }]}>
                                    <Icon name='ios-help-circle-outline' style={globalStyles.atvIcon} />
                                    <View style={{ marginTop: 6, marginLeft: 8 }}>
                                        <Text style={{ fontSize: 19, color: '#2E2E2E' }}>13</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </Row>
                    </Col>
                </Grid>
            </Container >
        )
    }
}