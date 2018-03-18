import React, { Component } from 'react'
import { Container, Content, Header, Button, Text, Body, Icon, Input, Item } from 'native-base'
import { View, TouchableOpacity, ListView } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

import { todosAnunciosFetch } from '../../../actions/AppAction'
import SingleCard from '../../anuncio/singleCard' // Card Component
import globalStyles from '../../common/globalStyles' // Global Styles
// Imagens das máquinas
const cardImage1 = require('../../../assets/images/drawer-cover1.jpg')
const cardImage2 = require('../../../assets/images/drawer-cover2.jpg')
const cardImage3 = require('../../../assets/images/drawer-cover3.jpg')

class Explorar extends Component {
    // Hide the header
    static navigationOptions = { header: null }


    componentWillMount() {
        this.props.todosAnunciosFetch()
        this.createDataSource(this.props.todosAnuncios)
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps.todosAnuncios)
    }

    createDataSource(todosAnuncios) {

        const result2 = todosAnuncios.reduce((b, myObj) => {

            var newObj = Object.keys(myObj).reduce((c, v) => {
                if (typeof myObj[v] === 'object') c = Object.assign(c, { maquina: v }, myObj[v]);
                else c[v] = myObj[v];
                return c;
            }, {});

            return b.concat(newObj)
        }, []);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 })
        this.dataSource = ds.cloneWithRows(result2)
    }

    renderRow(anuncio, navigate) {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigate('alugar', { anuncio })}>
                <SingleCard tipo={anuncio.tipo} modelo={anuncio.modelo} marca={anuncio.marca} thumb={cardImage2} preco={anuncio.preco} comments='42' />
            </TouchableOpacity>
        )
    }
    // Explorar screen
    render() {
        // StackNavigator props
        const { navigate } = this.props.navigation

        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header searchBar rounded androidStatusBarColor='#00695c' style={{ backgroundColor: globalStyles.bg, height: 70 }}>
                    <Item style={{ height: 46 }}>
                        <Icon active name="ios-train-outline" />
                        <Input placeholder="Encontre uma máquina..." placeholderTextColor='rgba(88,88,88,0.8)' />
                        <Icon active name="ios-search-outline" />
                    </Item>
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
    const todosAnuncios = _.map(state.AnunciosListaReducer, (val, locador) => {
        return { ...val, locador }
    })

    return { todosAnuncios }
}

export default connect(mapStateToProps, { todosAnunciosFetch })(Explorar)