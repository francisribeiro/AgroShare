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
                        <Text style={globalStyles.pagTitulo2}>De um título ao seu anúncio.</Text>
                    </View>

                    <Form>
                        <View style={{ paddingRight: 15 }}>
                            <Item stackedLabel>
                                <Input multiline={true} numberOfLines={2} placeholder='Escreva um título curto, porém chamativo.' 
                                placeholderTextColor='rgba(88,88,88,0.8)' selectionColor='#585858' style={globalStyles.txtDescription2} />
                            </Item>
                        </View>
                    </Form>
                </Content>
                <View style={globalStyles.floatingButton2}>
                    <Button rounded onPress={() => navigate('Cadastro_9')} style={{ paddingLeft: 20, backgroundColor: globalStyles.bg }}>
                        <Text style={{ fontSize: 18, color: '#fff', marginBottom: 3 }}>Próximo</Text>
                        <Icon name='ios-arrow-forward' style={{ fontSize: 25, color: '#fff', paddingTop: 2 }} />
                    </Button>
                </View>
            </Container>
        )
    }
}