import React, { Component } from 'react'
import { Container, Toast, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import { connect } from 'react-redux'

import { modificaCidade, modificaEstado } from '../../../actions/CadastroAnuncioAction'
import globalStyles from '../../common/globalStyles' // Global Styles

class Cadastro_5 extends Component {
    // Hide the header
    static navigationOptions = { header: null }


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
                        <Text style={globalStyles.pagTitulo2}>Onde sua máquina está?</Text>
                    </View>

                    <Form>
                        <View style={{ paddingRight: 15 }}>
                            <Item stackedLabel>
                                <Label style={globalStyles.inputLabel2}>CIDADE</Label>
                                <Input placeholder='ex. Piranguçu' placeholderTextColor='rgba(88,88,88,0.6)' returnKeyType='next' selectionColor='#585858' style={globalStyles.input2} onChangeText={(texto) => this.props.modificaCidade(texto)} value={this.props.cidade} />
                            </Item>

                            <Item style={{ paddingTop: 20 }} stackedLabel>
                                <Label style={globalStyles.inputLabel2}>ESTADO</Label>
                                <Input placeholder='ex. MG' placeholderTextColor='rgba(88,88,88,0.6)' selectionColor='#585858' style={globalStyles.input2} onChangeText={(texto) => this.props.modificaEstado(texto)} value={this.props.estado} />
                            </Item>
                        </View>
                    </Form>
                </Content>

                <View style={globalStyles.floatingButton2}>
                    <Button rounded
                        onPress={() => {
                            Keyboard.dismiss()
                            if (this.props.cidade == '' || this.props.cidade == undefined || this.props.cidade == null)
                                Toast.show({ text: 'Informe uma CIDADE para a máquina!', position: 'bottom', buttonText: 'Okay', type: 'danger', duration: 3000 })
                            else
                                if (this.props.estado == '' || this.props.estado == undefined || this.props.estado == null)
                                    Toast.show({ text: 'Informe um ESTADO para a máquina!', position: 'bottom', buttonText: 'Okay', type: 'danger', duration: 3000 })
                                else
                                    navigate('Cadastro_6', { edit, id })
                        }}
                        style={{ paddingLeft: 20, backgroundColor: globalStyles.bg }}>
                        <Text style={{ fontSize: 18, color: '#fff', marginBottom: 3 }}>Próximo</Text>
                        <Icon name='ios-arrow-forward' style={{ fontSize: 25, color: '#fff', paddingTop: 2 }} />
                    </Button>
                </View>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    cidade: state.CadastroAnuncioReducer.cidade,
    estado: state.CadastroAnuncioReducer.estado,
})

export default connect(mapStateToProps, { modificaCidade, modificaEstado })(Cadastro_5)