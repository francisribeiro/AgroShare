import React, { Component } from 'react'
import { Container, Content, Header, Right, Button, Text, Body, Icon, Title, Thumbnail, Left } from 'native-base'
import { View } from 'react-native'
import { GiftedChat, Actions, Bubble, Send, MessageText, Time, InputToolbar, Composer, Avatar } from 'react-native-gifted-chat'

import globalStyles from '../common/globalStyles' // Global Styles

export default class Chat extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    // Chat screen
    constructor(props) {
        super(props)
        this.state = { messages: [], typingText: null, isLoadingEarlier: false }

        this._isMounted = false
        this.onSend = this.onSend.bind(this)
        this.onReceive = this.onReceive.bind(this)
        this.renderBubble = this.renderBubble.bind(this)
        this.renderMessageText = this.renderMessageText.bind(this)
        this.renderFooter = this.renderFooter.bind(this)
        this.renderInputToolbar = this.renderInputToolbar.bind(this)
        this.renderSend = this.renderSend.bind(this)
        this.renderTime = this.renderTime.bind(this)
        this.renderComposer = this.renderComposer.bind(this)
        this.renderAvatar = this.renderAvatar.bind(this)
        this._isAlright = null
    }

    componentWillMount() {
        this._isMounted = true
        this.setState(() => {
            return {
                messages: [{
                    _id: Math.round(Math.random() * 1000000),
                    text: 'Achei muito legal seu anúncio',
                    createdAt: new Date(Date.UTC(2018, 1, 19, 12, 20, 0)),
                    user: { _id: 2, name: 'Harry Potter', avatar: require('../../assets/images/avatar1.jpg') }
                }]
            }
        })
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    onSend(messages = []) {
        this.setState((previousState) => { return { messages: GiftedChat.append(previousState.messages, messages) } })

        // for demo purpose
        this.answerDemo(messages);
    }

    answerDemo(messages) {
        if (messages.length > 0)
            if ((messages[0].image || messages[0].location) || !this._isAlright)
                this.setState((previousState) => { return { typingText: 'Harry Potter está digitando...' } })

        setTimeout(() => {
            if (this._isMounted === true)
                if (messages.length > 0)
                    if (!this._isAlright) {
                        this._isAlright = true
                        this.onReceive('Mas está meio caro pra mim, esse valor é negociável?')
                    }

            this.setState((previousState) => { return { typingText: null } })
        }, 3000)
    }

    onReceive(text) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, {
                    _id: Math.round(Math.random() * 1000000),
                    text: text,
                    createdAt: new Date(),
                    user: { _id: 2, name: 'Harry Potter', avatar: require('../../assets/images/avatar1.jpg') }
                }),
            }
        })
    }

    renderBubble(props) { return (<Bubble {...props} wrapperStyle={{ left: { backgroundColor: '#f2f2f2', marginBottom: 10 }, right: { backgroundColor: '#e5e5e5', marginBottom: 10 } }} />) }
    renderMessageText(props) { return (<MessageText {...props} textStyle={{ left: { color: '#000' }, right: { color: '#000' } }} />) }
    renderTime(props) { return (<Time {...props} textStyle={{ left: { color: '#000' }, right: { color: '#000' } }} />) }
    renderAvatar(props) { return (<Avatar {...props} containerStyle={{ left: { marginBottom: 10 }, right: { marginBottom: 10 } }} />) }

    renderSend(props) {
        return (
            <Send {...props}>
                <View style={{
                    marginTop: 4,
                    marginRight: 4,
                    marginBottom: 4,
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    backgroundColor: '#00796b',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Icon name='md-send' style={{ color: '#fff', fontSize: 25 }} />
                </View>
            </Send>
        )
    }

    renderFooter(props) {
        if (this.state.typingText) {
            return (
                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 14, color: '#aaa' }}>
                        {this.state.typingText}
                    </Text>
                </View>
            )
        }

        return null
    }


    renderInputToolbar(props) {
        return (
            <InputToolbar {...props} containerStyle={{ borderTopWidth:0, backgroundColor: '#fff' }} />
        )
    }

    renderComposer(props) {
        return (
            <Composer {...props} textInputStyle={{ borderColor: '#eaeaea', borderWidth:1, paddingLeft: 20, marginRight: 10, marginTop: 4, marginBottom: 6, backgroundColor: '#fff', borderRadius: 30, fontSize: 16 }} />
        )
    }

    // Chat screen
    render() {
        // StackNavigator props
        const { navigate, goBack } = this.props.navigation

        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Header androidStatusBarColor='#00695c' style={{ backgroundColor: globalStyles.bg, height: 70 }}>
                    <Left>
                        <Button transparent onPress={() => goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>

                    <Body style={{ paddingLeft: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Title style={{ fontSize: 20, width: 144 }}>Harry Potter</Title>
                        <Text note style={{ color: 'rgba(255, 255, 255, 0.7)' }}>online</Text>
                    </Body>

                    <Right>
                        <Thumbnail source={require('../../assets/images/avatar1.jpg')} />
                    </Right>
                </Header>
                <GiftedChat
                    placeholder='Digite uma mensagem...'
                    messages={this.state.messages}
                    onSend={this.onSend}
                    isLoadingEarlier={this.state.isLoadingEarlier}

                    user={{
                        _id: 1, // sent messages should have same user._id
                    }}

                    renderSend={this.renderSend}
                    renderBubble={this.renderBubble}
                    renderFooter={this.renderFooter}
                    renderTime={this.renderTime}
                    renderMessageText={this.renderMessageText}
                    renderInputToolbar={this.renderInputToolbar}
                    renderAvatar={this.renderAvatar}
                    renderComposer={this.renderComposer}
                />
            </Container>
        )
    }
}