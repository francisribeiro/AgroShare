import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

import globalStyles from '../../common/globalStyles' // Global Styles

export default class Cadastro_3 extends Component {
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
                        <Text style={globalStyles.pagTitulo2}>Qual a marca do #MÁQUINA que você está alugando?</Text>
                    </View>

                    <Form>
                        <View style={{ paddingHorizontal: 15 }}>
                            <RadioGroup
                                size={30}
                                thickness={2}
                                color='#585858'
                                onSelect={(index, value) => this.onSelect(index, value)}
                            >
                                <RadioButton value={'Trator'} color={globalStyles.bg}>
                                    <Text style={{ color: '#585858', fontSize: 18, paddingLeft: 8, marginBottom: 5 }}>John Deere</Text>
                                </RadioButton>

                                <RadioButton value={'Roçadeira'} color={globalStyles.bg}>
                                    <Text style={{ color: '#585858', fontSize: 18, paddingLeft: 8, marginBottom: 5 }}>Massey Ferguson</Text>
                                </RadioButton>

                                <RadioButton value={'Colheitadeira'} color={globalStyles.bg}>
                                    <Text style={{ color: '#585858', fontSize: 18, paddingLeft: 8, marginBottom: 5 }}>New Holland</Text>
                                </RadioButton>

                                <RadioButton value={'Ensilhadeira'} color={globalStyles.bg}>
                                    <Text style={{ color: '#585858', fontSize: 18, paddingLeft: 8, marginBottom: 5 }}>Valtra</Text>
                                </RadioButton>

                                <RadioButton value={'Adubadeira'} color={globalStyles.bg}>
                                    <Text style={{ color: '#585858', fontSize: 18, paddingLeft: 8, marginBottom: 5 }}>Yanmar</Text>
                                </RadioButton>

                            </RadioGroup>
                        </View>
                    </Form>
                </Content>

                <View style={globalStyles.floatingButton2}>
                    <Button rounded onPress={() => navigate('Cadastro_4')} style={{ paddingLeft: 20, backgroundColor: globalStyles.bg }}>
                        <Text style={{ fontSize: 18, color: '#fff', marginBottom: 3 }}>Próximo</Text>
                        <Icon name='ios-arrow-forward' style={{ fontSize: 25, color: '#fff', paddingTop: 2 }} />
                    </Button>
                </View>
            </Container>
        )
    }
}