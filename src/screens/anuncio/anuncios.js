import React, { Component } from 'react'
import { Container, Content, Header, Button, Text, Body, Icon } from 'native-base'
import { View, TouchableOpacity, ListView } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

import { anunciosFetch } from '../../actions/AppAction'
import SingleCard from './singleCard' // Card Component
import globalStyles from '../common/globalStyles' // Global Styles

// Imagens das máquinas
const cardImage1 = require('../../assets/images/drawer-cover1.jpg')
const cardImage2 = require('../../assets/images/drawer-cover2.jpg')
const cardImage3 = require('../../assets/images/drawer-cover3.jpg')

class Anuncios extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    componentWillMount() {
        this.props.anunciosFetch()
        this.createDataSource(this.props.anuncios)
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps.anuncios)
    }

    createDataSource(anuncios) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 })
        this.dataSource = ds.cloneWithRows(anuncios)
    }

    renderRow(anuncio, navigate) {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigate('ProfileMaq')}>
                <SingleCard tipo={anuncio.tipo} modelo={anuncio.modelo} marca={anuncio.marca} thumb={cardImage2} preco={anuncio.preco} comments='42' />
            </TouchableOpacity>
        )
    }


    // Anúncios screen
    render() {
        // StackNavigator props
        const { navigate } = this.props.navigation

        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header androidStatusBarColor='#00695c' style={{ backgroundColor: globalStyles.bg, height: 70 }}>
                    <Body>
                        <Button iconLeft full large onPress={() => navigate('addMaq')} style={globalStyles.fullButtonHeader}>
                            <View>
                                <Text style={{ fontSize: 18, color: '#fff', paddingBottom: 10 }}>Tem uma máquina? Anuncie aqui.</Text>
                            </View>
                            <Icon name='ios-add-circle-outline' style={{ fontSize: 30, textAlign: 'left' }} />
                        </Button>
                    </Body>
                </Header>

                <Content>
                    <View style={{ paddingHorizontal: 10, paddingTop: 16 }}>
                        <ListView
                            enableEmptySections
                            dataSource={this.dataSource}
                            renderRow={(data) => this.renderRow(data, navigate)}
                        />
                    </View>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    const anuncios = _.map(state.AnunciosListaReducer, (val) => {
        return { ...val }
    })

    return {
        anuncios
    }
}

export default connect(mapStateToProps, { anunciosFetch })(Anuncios)