import { View, Text, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import CategoryCard from './CategoryCard'
import { useNavigation } from '@react-navigation/native'

const Categories = () => {
  return (
    <ScrollView 
    contentContainerStyle={{paddingHorizontal:15, paddingTop: 10,}} 
    horizontal 
    showsHorizontalScrollIndicator={false}>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing 1"/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing 2"/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing 3"/>
    </ScrollView>
  )
}

export default Categories