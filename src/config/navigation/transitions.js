import { Easing, Animated } from 'react-native'

export const t1 = () => ({
    transitionSpec: {
        duration: 550,
        easing: Easing.out(Easing.poly(3)),
        timing: Animated.timing,
        useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps

        const thisSceneIndex = scene.index
        const width = layout.initWidth

        const translateX = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex],
            outputRange: [width, 0],
        })

        const opacity = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex],
            outputRange: [0.8, 1],
        })

        return { opacity, transform: [{ translateX }] }
    }
})

export const t2 = () => ({
    transitionSpec: {
        duration: 350,
        easing: Easing.out(Easing.poly(3)),
        timing: Animated.timing,
        useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
        const { position, layout, scene, index, scenes } = sceneProps
        const toIndex = index
        const thisSceneIndex = scene.index
        const height = layout.initHeight
        const width = layout.initWidth

        const translateX = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
            outputRange: [width, 0, 0]
        })

        const opacity = position.interpolate({
            inputRange: [thisSceneIndex - 1, thisSceneIndex],
            outputRange: [0.8, 1],
        })

        return { opacity, transform: [{ translateX }] }
    }
})