import React, { Component } from 'react'
import { Container, Content, Header, Right, Button, Text, Body, Icon, Title, Thumbnail, Left, Input, Footer } from 'native-base'
import { View, TouchableOpacity, ListView } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

import globalStyles from '../../common/globalStyles' // Global Styles
import { modificaMensagem, enviarMensagem, conversaUsuarioFetch } from '../../../actions/AppAction'

class Chat extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    componentWillMount() {
        const { params } = this.props.navigation.state
        const { email } = params

        this.props.conversaUsuarioFetch(email)
        this.criaFonteDeDados(this.props.conversa);
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados(nextProps.conversa);
    }

    criaFonteDeDados(conversa) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows(conversa);
    }

    _enviarMensagem(nome, sobrenome, email) {
        const { mensagem } = this.props;

        this.props.enviarMensagem(mensagem, nome, sobrenome, email)
    }


    renderRow(texto) {

        if (texto.tipo === 'e') {
            return (
                <View style={{ alignItems: 'flex-end', marginTop: 5, marginBottom: 5, marginLeft: 40 }}>
                    <Text style={{ fontSize: 16, color: '#000', padding: 10, backgroundColor: '#dbf5b4', elevation: 1, borderTopLeftRadius: 30, borderBottomLeftRadius: 30, borderTopRightRadius: 30 }}>{texto.mensagem}</Text>
                </View>
            )
        }

        return (
            <View style={{ alignItems: 'flex-start', marginTop: 5, marginBottom: 5, marginRight: 40 }}>
                <Text style={{ fontSize: 16, color: '#000', padding: 10, backgroundColor: '#e5e5e5', elevation: 1, borderTopRightRadius: 30, borderBottomRightRadius: 30, borderTopLeftRadius: 30 }}>{texto.mensagem}</Text>
            </View>
        )
    }

    // Chat screen
    render() {
        // StackNavigator props
        const { navigate, goBack } = this.props.navigation
        const { params } = this.props.navigation.state
        const { nome, sobrenome, email } = params

        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header androidStatusBarColor='#00695c' style={{ backgroundColor: globalStyles.bg, height: 70 }}>
                    <Left>
                        <Button transparent onPress={() => goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>

                    <Body style={{ paddingLeft: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Title style={{ fontSize: 20, width: 144 }}>{nome} {sobrenome}</Title>
                    </Body>

                    <Right>
                        <Thumbnail source={require('../../../assets/images/avatar1.jpg')} />
                    </Right>
                </Header>

                <Content style={{ padding: 10, paddingTop: 20 }}>
                    <ListView style={{ marginBottom: 29 }}
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={this.renderRow}
                    />
                </Content>

                <Footer style={{ height: 55, backgroundColor: 'transparent', marginTop: 10 }}>
                    <Input
                        autoGrow
                        placeholder='Digite uma mensagem...'
                        placeholderTextColor='#A9A9A9'
                        value={this.props.mensagem}
                        onChangeText={texto => this.props.modificaMensagem(texto)}
                        style={{ borderColor: '#aeaeae', borderWidth: 1, fontSize: 18, marginHorizontal: 5, borderRadius: 30, paddingLeft: 30, height: 44 }}
                    />
                    <TouchableOpacity onPress={() => this._enviarMensagem(nome, sobrenome, email)} activeOpacity={0.5} style={{
                        width: 46,
                        height: 46,
                        borderRadius: 23,
                        backgroundColor: '#00695c',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 5
                    }}>
                        <Icon name='md-send' style={{ color: '#fff', fontSize: 27, paddingLeft: 5 }} />
                    </TouchableOpacity>
                </Footer>
            </Container>
        )
    }
}

mapStateToProps = state => {
    const conversa = _.map(state.ListaConversaReducer, (val, uid) => {
        return { ...val, uid };
    });

    return ({
        conversa,
        mensagem: state.AdicionaContatoReducer.mensagem
    })
}

export default connect(mapStateToProps, { modificaMensagem, enviarMensagem, conversaUsuarioFetch })(Chat)