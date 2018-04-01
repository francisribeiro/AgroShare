import React, { Component } from 'react'
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text, Toast } from 'native-base'
import { View, Keyboard, TouchableOpacity } from 'react-native'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import { connect } from 'react-redux'

import { modificaTipo } from '../../../actions/CadastroAnuncioAction'
import globalStyles from '../../common/globalStyles' // Global Styles

class Cadastro_2 extends Component {
    // Hide the header
    static navigationOptions = { header: null }

    constructor(props) {
        super(props)
        this.state = { indice: -1 }
    }

    inicializaRadios() {
        let opts = ['Trator', 'Roçadeira', 'Colheitadeira', 'Ensiladeira', 'Adubadeira']

        if (this.props.tipo != '')
            this.setState({ indice: opts.indexOf(this.props.tipo) })
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
                        <Text style={globalStyles.pagTitulo2}>Qual tipo de máquina você está alugando?</Text>
                    </View>

                    <Form>
                        <View style={{ paddingHorizontal: 15 }}>
                            <RadioGroup
                                selectedIndex={this.state.indice}
                                size={30}
                                thickness={2}
                                color='#585858'
                                onSelect={(index, value) => this.props.modificaTipo(value)}
                            >
                                <RadioButton value={'Trator'} color={globalStyles.bg}>
                                    <Text style={{ color: '#585858', fontSize: 18, paddingLeft: 8, marginBottom: 5 }}>Trator</Text>
                                </RadioButton>

                                <RadioButton value={'Roçadeira'} color={globalStyles.bg}>
                                    <Text style={{ color: '#585858', fontSize: 18, paddingLeft: 8, marginBottom: 5 }}>Roçadeira</Text>
                                </RadioButton>

                                <RadioButton value={'Colheitadeira'} color={globalStyles.bg}>
                                    <Text style={{ color: '#585858', fontSize: 18, paddingLeft: 8, marginBottom: 5 }}>Colheitadeira</Text>
                                </RadioButton>

                                <RadioButton value={'Ensiladeira'} color={globalStyles.bg}>
                                    <Text style={{ color: '#585858', fontSize: 18, paddingLeft: 8, marginBottom: 5 }}>Ensiladeira</Text>
                                </RadioButton>

                                <RadioButton value={'Adubadeira'} color={globalStyles.bg}>
                                    <Text style={{ color: '#585858', fontSize: 18, paddingLeft: 8, marginBottom: 5 }}>Adubadeira</Text>
                                </RadioButton>

                            </RadioGroup>
                        </View>
                    </Form>
                </Content>

                <View style={globalStyles.floatingButton2}>
                    <Button rounded
                        onPress={() => {
                            if (this.props.tipo != '' && this.props.tipo != undefined && this.props.tipo != null)
                                navigate('Cadastro_3', { edit, id })
                            else
                                Toast.show({ text: 'Selecione um TIPO de máquina!', position: 'bottom', buttonText: 'Okay', type: 'danger', duration: 3000 })
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
    tipo: state.CadastroAnuncioReducer.tipo
})

export default connect(mapStateToProps, { modificaTipo })(Cadastro_2)