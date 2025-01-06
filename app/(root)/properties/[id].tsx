import { View, Text } from 'react-native'
import React from 'react'
import { useSearchParams } from 'expo-router/build/hooks'

const Property = () => {
    const { id }: any = useSearchParams()
    return (
        <View>
            <Text>Property {id}</Text>
        </View>
    )
}

export default Property