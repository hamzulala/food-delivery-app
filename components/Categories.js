import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import { useNavigation } from '@react-navigation/native'
import sanityClient from '../sanity'

const Categories = () => {
  const[categories, setCategories] = useState([])

  useEffect(() => {
    sanityClient.fetch(`
    *[_type == "category"]
    `).then((data) => {
      setCategories(data)
    })
  }, [])

  console.log(categories)

  return (
    <ScrollView 
    contentContainerStyle={{paddingHorizontal:15, paddingTop: 10,}} 
    horizontal 
    showsHorizontalScrollIndicator={false}>

      {//Category Card fething data from sanity.io
        categories.map((category) => (
          <CategoryCard key={category._id} imgUrl={category.image} title={category.name}/>
        ))
      }
      
    </ScrollView>
  )
}

export default Categories