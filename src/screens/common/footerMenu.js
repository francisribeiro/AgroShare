import React, { Component } from 'react'
import { Button, Footer, FooterTab, Text, Icon, Badge } from 'native-base'
import { Keyboard } from 'react-native'

import globalStyles from '../common/globalStyles' // Global Styles

export default class FooterMenu extends Component {
    // Class start state
    constructor(props) {
        super(props)
        this.state = { isVisible: true, tab1: true, tab2: false, tab3: false, tab4: false, tab5: false }
        this.keyboardWillShow = this.keyboardWillShow.bind(this) // Relativo ao keyboard
        this.keyboardWillHide = this.keyboardWillHide.bind(this) // Relativo ao keyboard
    }

    // Tab selection methods
    toggleTab1() { this.setState({ tab1: true, tab2: false, tab3: false, tab4: false, tab5: false }) }
    toggleTab2() { this.setState({ tab1: false, tab2: true, tab3: false, tab4: false, tab5: false }) }
    toggleTab3() { this.setState({ tab1: false, tab2: false, tab3: true, tab4: false, tab5: false }) }
    toggleTab4() { this.setState({ tab1: false, tab2: false, tab3: false, tab4: true, tab5: false }) }
    toggleTab5() { this.setState({ tab1: false, tab2: false, tab3: false, tab4: false, tab5: true }) }

    // Métodos para esconder o footer quando o teclado estiver ativo
    componentWillMount() {
        this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow)
        this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide)
    }

    componentWillUnmount() {
        this.keyboardWillShowSub.remove()
        this.keyboardWillHideSub.remove()
    }

    keyboardWillShow = event => { this.setState({ isVisible: false }) }
    keyboardWillHide = event => { this.setState({ isVisible: true }) }

    // FooterTab screen
    render() {
        // TabNavigator props
        const { navigate } = this.props.navigation

        if (this.state.isVisible)
            return (
                <Footer>
                    <FooterTab>
                        <Button active={this.state.tab1} onPress={() => { this.toggleTab1(); navigate('Anuncios') }} vertical>
                            <Icon active={this.state.tab1} name='ios-home-outline' style={globalStyles.footerIcon} />
                            <Text style={globalStyles.footerTxt}>Anúncios</Text>
                        </Button>

                        <Button active={this.state.tab2} onPress={() => { this.toggleTab2(); navigate('Locacoes') }} vertical badge>
                            <Badge>
                                <Text>1</Text>
                            </Badge>
                            <Icon active={this.state.tab2} name='ios-calendar-outline' style={globalStyles.footerIcon} />
                            <Text style={globalStyles.footerTxt}>Locações</Text>
                        </Button>

                        <Button active={this.state.tab3} onPress={() => { this.toggleTab3(); navigate('Atividade') }} vertical>
                            <Icon active={this.state.tab3} name='ios-stats-outline' style={globalStyles.footerIcon} />
                            <Text style={globalStyles.footerTxt}>Atividade</Text>
                        </Button>

                        <Button active={this.state.tab4} onPress={() => { this.toggleTab4(); navigate('Mensagens') }} vertical badge>
                            <Badge>
                                <Text>3</Text>
                            </Badge>
                            <Icon active={this.state.tab4} name='ios-chatboxes-outline' style={globalStyles.footerIcon} />
                            <Text style={globalStyles.footerTxt}>Mensagens</Text>
                        </Button>

                        <Button active={this.state.tab5} onPress={() => { this.toggleTab5(); navigate('Perfil') }} badge vertical>
                            <Badge>
                                <Text>2</Text>
                            </Badge>
                            <Icon active={this.state.tab5} name='ios-person-outline' style={globalStyles.footerIcon} />
                            <Text style={globalStyles.footerTxt}>Perfil</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            )
        else
            return null
    }
}