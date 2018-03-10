import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

import globalStyles from '../../common/globalStyles' // Global Styles

export default class Cadastro_6 extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: { backgroundColor: 'transparent', top: 0, right: 0, left: 0, position: 'absolute' },
            headerTintColor: '#00695c'
        }
    }

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

        return (
            <Container style={{ backgroundColor: '#fff' }}>

                <Content style={{ padding: 10, paddingTop: 60 }}>
                    <View style={{ paddingLeft: 15, paddingBottom: 32 }}>
                        <Text style={globalStyles.pagTitulo2}>Preço Base</Text>
                    </View>

                    <Text style={globalStyles.txtDescription2}>
                        O preço básico é o seu preço por hora padrão.
                    </Text>

                    <Form>
                        <View style={{ paddingRight: 15 }}>
                            <Item stackedLabel>
                                <Label style={globalStyles.inputLabel2}>PREÇO POR HORA</Label>
                                <Input placeholder='R$' placeholderTextColor='rgba(88,88,88,0.6)' keyboardType='numeric' selectionColor='#585858' style={globalStyles.input2} />
                            </Item>
                        </View>
                    </Form>
                </Content>
                <View style={globalStyles.floatingButton2}>
                    <Button rounded onPress={() => navigate('Anuncios')} style={{ paddingLeft: 20, backgroundColor: globalStyles.bg }}>
                        <Text style={{ fontSize: 18, color: '#fff', marginBottom: 3 }}>Finalizar Anúncio</Text>
                        <Icon name='ios-arrow-forward' style={{ fontSize: 25, color: '#fff', paddingTop: 2 }} />
                    </Button>
                </View>
            </Container>
        )
    }
}