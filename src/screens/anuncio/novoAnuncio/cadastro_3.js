import React, { Component } from 'react'
import { Container, Header, Toast, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import { connect } from 'react-redux'

import { modificaMarca } from '../../../actions/CadastroAnuncioAction'

import globalStyles from '../../common/globalStyles' // Global Styles

class Cadastro_3 extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    constructor(props) {
        super(props)
        this.state = { indice: -1 }
    }

    inicializaRadios() {
        let opts = ['John Deere', 'Massey Ferguson', 'New Holland', 'Valtra', 'Yanmar']

        if (this.props.marca != '')
            this.setState({ indice: opts.indexOf(this.props.marca) })
    }

    componentWillMount() {
        this.inicializaRadios()
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
                        <Text style={globalStyles.pagTitulo2}>Qual a marca do {this.props.tipo} que você está alugando?</Text>
                    </View>

                    <Form>
                        <View style={{ paddingHorizontal: 15 }}>
                            <RadioGroup
                                selectedIndex={this.state.indice}
                                size={30}
                                thickness={2}
                                color='#585858'
                                onSelect={(index, value) => this.props.modificaMarca(value)}
                            >
                                <RadioButton value={'John Deere'} color={globalStyles.bg}>
                                    <Text style={{ color: '#585858', fontSize: 18, paddingLeft: 8, marginBottom: 5 }}>John Deere</Text>
                                </RadioButton>

                                <RadioButton value={'Massey Ferguson'} color={globalStyles.bg}>
                                    <Text style={{ color: '#585858', fontSize: 18, paddingLeft: 8, marginBottom: 5 }}>Massey Ferguson</Text>
                                </RadioButton>

                                <RadioButton value={'New Holland'} color={globalStyles.bg}>
                                    <Text style={{ color: '#585858', fontSize: 18, paddingLeft: 8, marginBottom: 5 }}>New Holland</Text>
                                </RadioButton>

                                <RadioButton value={'Valtra'} color={globalStyles.bg}>
                                    <Text style={{ color: '#585858', fontSize: 18, paddingLeft: 8, marginBottom: 5 }}>Valtra</Text>
                                </RadioButton>

                                <RadioButton value={'Yanmar'} color={globalStyles.bg}>
                                    <Text style={{ color: '#585858', fontSize: 18, paddingLeft: 8, marginBottom: 5 }}>Yanmar</Text>
                                </RadioButton>

                            </RadioGroup>
                        </View>
                    </Form>
                </Content>

                <View style={globalStyles.floatingButton2}>
                    <Button rounded
                        onPress={() => {
                            if (this.props.marca != '' && this.props.marca != undefined && this.props.marca != null)
                                navigate('Cadastro_4', { edit, id })
                            else
                                Toast.show({ text: 'Selecione uma MARCA de máquina!', position: 'bottom', buttonText: 'Okay', type: 'danger', duration: 3000 })
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
    marca: state.CadastroAnuncioReducer.marca
})

export default connect(mapStateToProps, { modificaMarca })(Cadastro_3)