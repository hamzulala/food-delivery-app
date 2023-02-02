import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
  return (
    <SafeAreaView>
      <Text className='text-red-500'>HomeScreen</Text>
      {/* Header */}
      <View>
        <Image source={{uri: 'https://links.papareact.com/wru'}} className='' />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen