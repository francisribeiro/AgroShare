import React, { Component } from 'react'
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon, Badge } from "native-base"

export default class FooterMenu extends Component {
    // Class start state
    constructor(props) {
        super(props)
        this.state = { tab1: true, tab2: false, tab3: false, tab4: false }
    }

    // Tab selection methods
    toggleTab1() { this.setState({ tab1: true, tab2: false, tab3: false, tab4: false }) }
    toggleTab2() { this.setState({ tab1: false, tab2: true, tab3: false, tab4: false }) }
    toggleTab3() { this.setState({ tab1: false, tab2: false, tab3: true, tab4: false }) }
    toggleTab4() { this.setState({ tab1: false, tab2: false, tab3: false, tab4: true }) }

    // FooterTab screen
    render() {
        // TabNavigator props
        const { goBack, navigate } = this.props.navigation

        return (
            <Footer>
                <FooterTab>
                    <Button active={this.state.tab1} onPress={() => { this.toggleTab1(); navigate('Anuncios') }} vertical>
                        <Icon active={this.state.tab1} name="ios-home" style={{ fontSize: 26 }} />
                        <Text>Anúncios</Text>
                    </Button>

                    <Button active={this.state.tab2} onPress={() => { this.toggleTab2(); navigate('Maquinas') }} vertical>
                        <Icon active={this.state.tab2} name="ios-train" style={{ fontSize: 26 }} />
                        <Text>Máquinas</Text>
                    </Button>

                    <Button active={this.state.tab3} onPress={() => this.toggleTab3()} vertical badge>
                        <Badge>
                            <Text>2</Text>
                        </Badge>
                        <Icon active={this.state.tab3} name="ios-chatboxes" style={{ fontSize: 26 }} />
                        <Text>Mensagens</Text>
                    </Button>

                    <Button active={this.state.tab4} onPress={() => this.toggleTab4()} vertical>
                        <Icon active={this.state.tab4} name="ios-person" style={{ fontSize: 26 }} />
                        <Text>Perfil</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}