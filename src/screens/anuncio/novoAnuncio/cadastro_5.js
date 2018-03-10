import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

import globalStyles from '../../common/globalStyles' // Global Styles

export default class Cadastro_5 extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: { backgroundColor: 'transparent', top: 0, right: 0, left: 0, position: 'absolute' },
            headerTintColor: '#00695c'
        }
    }

    constructor(props) {
        super(props)
    }

    // Cadastro_2 screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation

        return (
            <Container style={{ backgroundColor: '#fff' }}>
                <Content style={{ padding: 10, paddingTop: 60 }}>
                    <View style={{ paddingLeft: 15, paddingBottom: 32 }}>
                        <Text style={globalStyles.pagTitulo2}>Onde sua máquina está?</Text>
                    </View>

                    <Form>
                        <View style={{ paddingRight: 15 }}>
                            <Item stackedLabel>
                                <Label style={globalStyles.inputLabel2}>CIDADE</Label>
                                <Input placeholder='ex. Piranguçu' placeholderTextColor='rgba(88,88,88,0.6)' returnKeyType='next' selectionColor='#585858' style={globalStyles.input2} />
                            </Item>

                            <Item style={{ paddingTop: 20 }} stackedLabel>
                                <Label style={globalStyles.inputLabel2}>ESTADO</Label>
                                <Input placeholder='ex. MG' placeholderTextColor='rgba(88,88,88,0.6)' keyboardType='numeric' selectionColor='#585858' style={globalStyles.input2} />
                            </Item>
                        </View>
                    </Form>
                </Content>

                <View style={globalStyles.floatingButton2}>
                    <Button rounded onPress={() => navigate('Cadastro_6')} style={{ paddingLeft: 20, backgroundColor: globalStyles.bg }}>
                        <Text style={{ fontSize: 18, color: '#fff', marginBottom: 3 }}>Próximo</Text>
                        <Icon name='ios-arrow-forward' style={{ fontSize: 25, color: '#fff', paddingTop: 2 }} />
                    </Button>
                </View>
            </Container>
        )
    }
}