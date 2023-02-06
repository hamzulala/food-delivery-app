import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/core'

const PreparingOrderScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Basket')
        }, 3000)
    })
  return (
    <SafeAreaView className='bg-[#CFDABA] flex-1 justify-center items-center'>
      <Animatable.Image source={require('../assets/orderLoading.gif')} animation="slideInUp" iterationCount={1} className='h-96 w-96' />
      <Animatable.Text animation='slideInUp' iterationCount={1} className='text-lg my-10 text-white font-bold text-center'>Waiting for Restaurant to accept your order!</Animatable.Text>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen