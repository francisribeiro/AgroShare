import React, { Component } from 'react'
import { StatusBar, Keyboard } from 'react-native'
import { StackNavigator } from 'react-navigation'
import {
    Container, Header,
    Title, Content,
    Button, Footer,
    FooterTab, Text,
    Body, Left,
    Right, Icon, Badge
} from "native-base"

export default class Home extends Component {
    static navigationOptions = { title: 'Home', header: null }

    constructor(props) {
        super(props)
        this.state = { tab1: false, tab2: false, tab3: true, tab4: false }
    }

    toggleTab1() { this.setState({ tab1: true, tab2: false, tab3: false, tab4: false }) }
    toggleTab2() { this.setState({ tab1: false, tab2: true, tab3: false, tab4: false }) }
    toggleTab3() { this.setState({ tab1: false, tab2: false, tab3: true, tab4: false }) }
    toggleTab4() { this.setState({ tab1: false, tab2: false, tab3: false, tab4: true }) }


    render() {
        return (
            <Container>
                <StatusBar backgroundColor='#38a226' />
                <Content></Content>
                <Footer>
                    <FooterTab>
                        <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
                            <Icon active={this.state.tab1} name="home" />
                            <Text>Anúncios</Text>
                        </Button>

                        <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
                            <Icon active={this.state.tab2} name="train" />
                            <Text>Máquinas</Text>
                        </Button>

                        <Button active={this.state.tab3} onPress={() => this.toggleTab3()} vertical badge>
                            <Badge>
                                <Text>2</Text>
                            </Badge>
                            <Icon active={this.state.tab3} name="chatboxes" />
                            <Text>Mensagens</Text>
                        </Button>

                        <Button active={this.state.tab4} onPress={() => this.toggleTab4()}>
                            <Icon active={this.state.tab4} name="person" />
                            <Text>Perfil</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container >
        )
    }
}