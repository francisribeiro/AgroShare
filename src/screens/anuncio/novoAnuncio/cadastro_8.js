import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, Toast } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import { connect } from 'react-redux'

import { modificaTitulo } from '../../../actions/CadastroAnuncioAction'
import globalStyles from '../../common/globalStyles' // Global Styles

class Cadastro_8 extends Component {
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
                        <Text style={globalStyles.pagTitulo2}>De um título ao seu anúncio.</Text>
                    </View>

                    <Form>
                        <View style={{ paddingRight: 15 }}>
                            <Item stackedLabel>
                                <Input multiline={true} numberOfLines={2} placeholder='Escreva um título curto, porém chamativo.'
                                    placeholderTextColor='rgba(88,88,88,0.8)' selectionColor='#585858' style={globalStyles.txtDescription2} onChangeText={(texto) => this.props.modificaTitulo(texto)} value={this.props.titulo} />
                            </Item>
                        </View>
                    </Form>
                </Content>
                <View style={globalStyles.floatingButton2}>
                    <Button rounded
                        onPress={() => {
                            Keyboard.dismiss()
                            if (this.props.titulo == '' || this.props.titulo == undefined || this.props.titulo == null)
                                Toast.show({ text: 'Informe um TíTULO para o anúncio!', position: 'bottom', buttonText: 'Okay', type: 'danger', duration: 3000 })
                            else
                                navigate('Cadastro_9', { edit, id })
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
    titulo: state.CadastroAnuncioReducer.titulo
})

export default connect(mapStateToProps, { modificaTitulo })(Cadastro_8)