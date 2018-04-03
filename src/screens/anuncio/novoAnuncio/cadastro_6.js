import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

import globalStyles from '../../common/globalStyles' // Global Styles

export default class Cadastro_6 extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    constructor(props) {
        super(props)
        this.state = { value: '' }
    }

    onSelect(index, value) {
        this.setState({ value })
    }

    // Cadastro_2 screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation
        const { params } = this.props.navigation.state
        const edit = params ? params.edit : false
        const id = params ? params.id : null
        
        return (
            <Container style={{ backgroundColor: "#fff" }}>

                <Header noShadow androidStatusBarColor='#00695c' style={{ backgroundColor: '#fff' }}>
                    <Left>
                        <Button transparent onPress={() => goBack(null)}>
                            <Icon name='arrow-back' style={{ color: globalStyles.bg }} />
                        </Button>
                    </Left>

                    <Right />
                </Header>

                <Content style={{ padding: 10 }}>
                    <View style={{ paddingLeft: 15, paddingBottom: 32 }}>
                        <Text style={globalStyles.pagTitulo2}>Vamos adicionar fotos?</Text>
                    </View>

                    <Text style={globalStyles.txtDescription2}>
                        As pessoas adoram ver fotos da sua máquina. Você tem tempo para adicioná-las?
                    </Text>

                    <View>
                        <Button rounded large block onPress={() => navigate('AddFoto', { edit, id })} style={{ paddingHorizontal: 20, backgroundColor: globalStyles.bg }}>
                            <Text style={{ fontSize: 18, color: '#fff', marginBottom: 5 }}>Adicionar fotos agora</Text>
                        </Button>
                        <Button rounded bordered large block onPress={() => navigate('Cadastro_7', { edit, id })} style={{ marginTop: 20, paddingHorizontal: 20, borderColor: globalStyles.bg }}>
                            <Text style={{ fontSize: 18, color: globalStyles.bg, marginBottom: 5 }}>Fazer isso mais tarde</Text>
                        </Button>
                    </View>

                </Content>
            </Container>
        )
    }
}