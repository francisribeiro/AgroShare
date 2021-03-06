import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, Toast } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import { connect } from 'react-redux'

import { modificaModelo, modificaAno } from '../../../actions/CadastroAnuncioAction'
import globalStyles from '../../common/globalStyles' // Global Styles

class Cadastro_4 extends Component {
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
                        <Text style={globalStyles.pagTitulo2}>Diga um pouco mais sobre seu {this.props.tipo} - {this.props.marca}.</Text>
                    </View>

                    <Form>
                        <View style={{ paddingRight: 15 }}>
                            <Item stackedLabel>
                                <Label style={globalStyles.inputLabel2}>MODELO</Label>
                                <Input placeholder='ex. BH180' placeholderTextColor='rgba(88,88,88,0.6)' returnKeyType='next' selectionColor='#585858' style={globalStyles.input2} onChangeText={(texto) => this.props.modificaModelo(texto)} value={this.props.modelo} />
                            </Item>

                            <Item style={{ paddingTop: 20 }} stackedLabel>
                                <Label style={globalStyles.inputLabel2}>ANO</Label>
                                <Input placeholder='ex. 2014' placeholderTextColor='rgba(88,88,88,0.6)' keyboardType='numeric' selectionColor='#585858' style={globalStyles.input2} onChangeText={(texto) => this.props.modificaAno(texto)} value={this.props.ano} />
                            </Item>
                        </View>
                    </Form>
                </Content>

                <View style={globalStyles.floatingButton2}>
                    <Button rounded
                        onPress={() => {
                            Keyboard.dismiss()
                            if (this.props.modelo == '' || this.props.modelo == undefined || this.props.modelo == null)
                                Toast.show({ text: 'Informe um MODELO para a máquina!', position: 'bottom', buttonText: 'Okay', type: 'danger', duration: 3000 })
                            else
                                if (this.props.ano == '' || this.props.ano == undefined || this.props.ano == null)
                                    Toast.show({ text: 'Informe um ANO para a máquina!', position: 'bottom', buttonText: 'Okay', type: 'danger', duration: 3000 })
                                else
                                    navigate('Cadastro_5', { edit, id })
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
    tipo: state.CadastroAnuncioReducer.tipo,
    marca: state.CadastroAnuncioReducer.marca,
    modelo: state.CadastroAnuncioReducer.modelo,
    ano: state.CadastroAnuncioReducer.ano
})

export default connect(mapStateToProps, { modificaModelo, modificaAno })(Cadastro_4)