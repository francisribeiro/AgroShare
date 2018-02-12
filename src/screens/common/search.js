import React, { Component } from 'react'
import { Icon, Item, Input } from 'native-base'
import { View } from 'react-native'

export default class Search extends Component {

    constructor(props) {
        super(props)
    }

    // Search Component
    render() {
        return (
            <View style={{ backgroundColor: '#e8e8e8', paddingHorizontal: 10, paddingVertical: 10 }}>
                <View searchBar rounded>
                    <Item rounded style={{ backgroundColor: '#fff', borderColor: '#fff', height: 40 }}>
                        <Icon active name='ios-search-outline' style={{ color: '#A9A9A9'}} />
                        <Input autoFocus rounded placeholder={this.props.placeholder} selectionColor='#A9A9A9' placeholderTextColor='#A9A9A9' style={{ color: '#404040', fontSize: 15 }} />
                        <Icon active name='ios-close' style={{ color: '#A9A9A9', paddingRight: 15, fontSize: 30 }} />
                    </Item>
                </View>
            </View>
        )
    }
}