import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import { StyleSheet, Text, View, Animated, ViewPropTypes } from 'react-native'
import Button from './Button'
import GlobalStyles from '../../common/globalStyles'

const DefaultTabBar = createReactClass({
  propTypes: {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
    backgroundColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    textStyle: Text.propTypes.style,
    tabStyle: ViewPropTypes.style,
    renderTab: PropTypes.func,
    underlineStyle: ViewPropTypes.style,
  },

  getDefaultProps() {
    return {
      activeTextColor: 'navy',
      inactiveTextColor: 'black',
      backgroundColor: null
    }
  },

  showNotifications(name, number, bgColor) {
    if (name === 'AGUARDANDO' && number > 0)
      return (
        <View style={[GlobalStyles.tabBadgeWhite, { paddingRight: 4, marginLeft: 5, backgroundColor: bgColor }]}>
          <Text style={{ fontSize: 14, color: '#018163', fontWeight: 'bold' }}> {number}</Text>
        </View>
      )

    return null
  },

  renderTabOption(name, page) {
  },

  renderTab(name, page, isTabActive, onPressHandler) {
    const { activeTextColor, inactiveTextColor, textStyle, } = this.props
    const textColor = isTabActive ? activeTextColor : inactiveTextColor
    const fontWeight = isTabActive ? 'bold' : 'normal'

    return <Button
      style={{ flex: 1, }}
      key={name}
      accessible={true}
      accessibilityLabel={name}
      accessibilityTraits='button'
      onPress={() => onPressHandler(page)}
    >
      <View style={[styles.tab, this.props.tabStyle, GlobalStyles.itemAlign]}>
        <Text style={[{ color: textColor, fontWeight, }, textStyle,]}>
          {name}
        </Text>
        {this.showNotifications(name, this.props.notifications, textColor)}
      </View>
    </Button>
  },

  render() {
    const containerWidth = this.props.containerWidth
    const numberOfTabs = this.props.tabs.length
    const tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: 4,
      backgroundColor: 'navy',
      bottom: 0
    };

    const translateX = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, containerWidth / numberOfTabs]
    })

    return (
      <View style={[styles.tabs, { backgroundColor: this.props.backgroundColor, }, this.props.style,]}>
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page
          const renderTab = this.props.renderTab || this.renderTab
          return renderTab(name, page, isTabActive, this.props.goToPage)
        })}
        <Animated.View
          style={[
            tabUnderlineStyle,
            {
              transform: [
                { translateX },
              ]
            },
            this.props.underlineStyle,
          ]}
        />
      </View>
    )
  },
})

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#ccc',
    paddingTop: 10
  }
})

module.exports = DefaultTabBar