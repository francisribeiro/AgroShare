import React, { Component } from "react"
import { Container, Header, Content, Button, Item, Label, Input, Left, Right, Icon, Form, Text } from "native-base"
import { View, Keyboard, TouchableOpacity, StyleSheet } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'

export default class Register_4 extends Component {

    // StackNavigator Header configurations
    static navigationOptions = { title: 'Register_4', header: null }

    // Class start state
    constructor(props) {
        super(props)
        this.state = { isDateTimePickerVisible: false }
    }

    // DatePicker helpers
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })
    _handleDatePicked = (date) => { this._hideDateTimePicker() }

    // Register_4 screen
    render() {
        // StackNavigator props
        const { goBack, navigate } = this.props.navigation

        return (
            <Container style={{ backgroundColor: '#018163' }}>

                <Header noShadow androidStatusBarColor='#018163' style={{ backgroundColor: 'transparent' }}>
                    <Left>
                        <Button transparent onPress={() => goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>

                    <Right />
                </Header>

                <Content style={{ padding: 10 }}>
                    <View style={{ paddingLeft: 15, paddingBottom: 32 }}>
                        <Text style={{ fontSize: 32, color: '#fff', fontWeight: 'bold' }}>Qual a sua data de nascimento?</Text>
                    </View>

                    <Text style={{ paddingLeft: 15, paddingRight: 15, paddingBottom: 25, color: '#fff', fontSize: 19 }}>
                        Você deve ter no mínimo 18 anos de idade para usar o AgroShare. Os outros usuários não poderão ver seu aniversário.
                    </Text>

                    <Form>
                        <View style={{ paddingRight: 15 }}>

                            <TouchableOpacity onPress={() => this._showDateTimePicker()}>
                                <View pointerEvents='none'>
                                    <Item stackedLabel>
                                        <Label style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>ANIVERSÁRIO</Label>
                                        <Input
                                            placeholder='      /      /'
                                            placeholderTextColor='#fff'
                                            disabled
                                            returnKeyType='next'
                                            selectionColor='#fff'
                                            style={{ color: '#fff', fontSize: 28, padding: 7, marginTop: 5 }}
                                        />
                                    </Item>
                                </View>
                            </TouchableOpacity>

                            <DateTimePicker
                                isVisible={this.state.isDateTimePickerVisible}
                                onConfirm={this._handleDatePicked}
                                onCancel={this._hideDateTimePicker}
                            />
                        </View>

                    </Form>
                </Content>

                <TouchableOpacity style={styles.floatingButton} onPress={() => { navigate('Anuncios'); Keyboard.dismiss() }}>
                    <Icon style={{ color: '#018163', fontSize: 30 }} name="ios-arrow-forward" />
                </TouchableOpacity>
            </Container>
        )
    }
}

// Screen styles
const styles = StyleSheet.create({
    floatingButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ffff',
        position: 'absolute',
        bottom: 30,
        right: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})