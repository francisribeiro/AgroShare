import React, { Component } from 'react'
import { Container, Content, Header, Right, Button, Text, Body, Icon, Title } from 'native-base'
import { View } from 'react-native'
import IconBadge from 'react-native-icon-badge'
import SearchBar from 'react-native-searchbar'

import ListMensagens from './listMensagens' // List Component
import globalStyles from '../common/globalStyles' // Global Styles

export default class Mensagens extends Component {
    // Mensagens screen
    render() {
        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header androidStatusBarColor='#00695c' style={{ backgroundColor: globalStyles.bg, height: 70 }}>
                    <SearchBar
                        ref={(ref) => this.searchBar = ref}
                        placeholder='Pesquisar...'
                        backgroundColor='#fff'
                        iconColor='#00695c'
                        textColor='#2e2e2e'
                        selectionColor='#00695c'
                        placeholderTextColor='#A9A9A9'
                        backCloseSize={25}
                        heightAdjust={8}
                        animate={false}
                        fontFamily='Roboto'
                    />

                    <Body style={{ paddingLeft: 10 }}>
                        <Title style={{ fontSize: 20, width: 187 }}>Lista de mensagens</Title>
                    </Body>

                    <Right>
                        <Button transparent onPress={() => this.searchBar.show()}>
                            <Icon name='ios-search-outline' style={{ fontSize: 28, color: '#fff' }} />
                        </Button>

                        <Button transparent>
                            <Icon name='md-more' style={{ fontSize: 28 }} />
                        </Button>
                    </Right>
                </Header>

                <Content>
                    <ListMensagens />
                </Content>
            </Container >
        )
    }
}