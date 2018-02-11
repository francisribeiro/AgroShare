import React, { Component } from 'react'
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, Icon, Badge } from 'native-base'

// Global Styles
import globalStyles from '../common/globalStyles'

export default class FooterMenu extends Component {
    // Class start state
    constructor(props) {
        super(props)
        this.state = { tab1: true, tab2: false, tab3: false, tab4: false, tab5: false }
    }

    // Tab selection methods
    toggleTab1() { this.setState({ tab1: true, tab2: false, tab3: false, tab4: false, tab5: false }) }
    toggleTab2() { this.setState({ tab1: false, tab2: true, tab3: false, tab4: false, tab5: false }) }
    toggleTab3() { this.setState({ tab1: false, tab2: false, tab3: true, tab4: false, tab5: false }) }
    toggleTab4() { this.setState({ tab1: false, tab2: false, tab3: false, tab4: true, tab5: false }) }
    toggleTab5() { this.setState({ tab1: false, tab2: false, tab3: false, tab4: false, tab5: true }) }

    // FooterTab screen
    render() {
        // TabNavigator props
        const { goBack, navigate } = this.props.navigation

        return (
            <Footer>
                <FooterTab>
                    <Button active={this.state.tab1} onPress={() => { this.toggleTab1(); navigate('Anuncios') }} vertical>
                        <Icon active={this.state.tab1} name="ios-home-outline" style={globalStyles.footerIcon} />
                        <Text style={globalStyles.footerTxt}>Anúncios</Text>
                    </Button>

                    <Button active={this.state.tab2} onPress={() => { this.toggleTab2(); navigate('Maquinas') }} vertical>
                        <Icon active={this.state.tab2} name="ios-train-outline" style={globalStyles.footerIcon} />
                        <Text style={globalStyles.footerTxt}>Máquinas</Text>
                    </Button>

                    <Button active={this.state.tab3} onPress={() => { this.toggleTab3()}} vertical>
                        <Icon active={this.state.tab3} name="ios-basket-outline" style={globalStyles.footerIcon} />
                        <Text style={globalStyles.footerTxt}>Locações</Text>
                    </Button>

                    <Button active={this.state.tab4} onPress={() => this.toggleTab4()} vertical badge>
                        <Badge>
                            <Text>2</Text>
                        </Badge>
                        <Icon active={this.state.tab4} name="ios-chatboxes-outline" style={globalStyles.footerIcon} />
                        <Text style={globalStyles.footerTxt}>Mensagens</Text>
                    </Button>

                    <Button active={this.state.tab5} onPress={() => this.toggleTab5()} vertical>
                        <Icon active={this.state.tab5} name="ios-person-outline" style={globalStyles.footerIcon} />
                        <Text style={globalStyles.footerTxt}>Perfil</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}