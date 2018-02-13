import React, { Component } from 'react'
import { Container, Content, Header, Left, Right, Button, Text, Body, Icon, Title } from 'native-base'
import { View, TouchableOpacity } from 'react-native'
import { Grid, Row } from 'react-native-easy-grid'

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
                        <Title style={{ fontSize: 20, width: 184 }}>AgroShare Analytics</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='md-more' style={{ fontSize: 28 }} />
                        </Button>
                    </Right>
                </Header>

                <Grid>
                    <Row size={2} style={globalStyles.AABorder}>
                        <TouchableOpacity>
                            <View style={globalStyles.AAView}>
                                <Text style={globalStyles.AATitle}>Ganhos no mês</Text>
                                <View style={globalStyles.AAView2}>
                                    <Text numberOfLines={1} style={globalStyles.AAText}>Você ainda não possuí rendimentos</Text>
                                </View>
                                <View style={globalStyles.AAStarInline} >
                                    <Icon name='ios-cash-outline' style={{ fontSize: 25, paddingRight: 1 }} />
                                    <Text style={globalStyles.AAText2}> R$ 0, 00</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Row>

                    <Row size={2} style={globalStyles.AABorder}>
                        <TouchableOpacity>
                            <View style={globalStyles.AAView}>
                                <Text style={globalStyles.AATitle}>Minhas avaliações</Text>
                                <View style={globalStyles.AAView2}>
                                    <Text numberOfLines={1} style={globalStyles.AAText}>Você ainda não foi avaliado</Text>
                                </View>
                                <View style={globalStyles.AAStarInline}>
                                    <Icon name='ios-star-outline' style={{ fontSize: 25, paddingRight: 1 }} />
                                    <Icon name='ios-star-outline' style={{ fontSize: 25, paddingRight: 1 }} />
                                    <Icon name='ios-star-outline' style={{ fontSize: 25, paddingRight: 1 }} />
                                    <Icon name='ios-star-outline' style={{ fontSize: 25, paddingRight: 1 }} />
                                    <Icon name='ios-star-outline' style={{ fontSize: 25, paddingRight: 1 }} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Row>

                    <Row size={2}>
                        <TouchableOpacity>
                            <View style={globalStyles.AAView}>
                                <Text style={globalStyles.AATitle}>Visualizações</Text>
                                <View style={globalStyles.AAView2}>
                                    <Text numberOfLines={1} style={globalStyles.AAText}>Seus anuncios não foram visualizados</Text>
                                </View>
                                <View style={globalStyles.AAStarInline} >
                                    <Icon name='ios-eye-outline' style={{ fontSize: 25, paddingRight: 1 }} />
                                    <Text style={globalStyles.AAText2}> 0</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Row>
                </Grid>
            </Container>
        )
    }
}