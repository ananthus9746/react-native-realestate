import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router';
import { categories } from '@/constants/data';

const Fiters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCatagory, setSelectedCatagory] = React.useState(params.filter || 'All')
  const HandleCatagory = (catagory: string) => {
    if (selectedCatagory === catagory) {
      setSelectedCatagory('All')
      router.setParams({ filter: 'All' })
    }
    setSelectedCatagory(catagory);
    router.setParams({ filter: catagory })

  }
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className='mt-3 mb-2'>
      {categories.map((item, index) => (
        <TouchableOpacity onPress={() => HandleCatagory(item.category)} className={`flex fle-col items-start mr-4  px-4 py-2 rounded-full 
        ${selectedCatagory === item.category ? 'bg-primary-300' : 'bg-primary-100 border border-primary-100'}`} key={index}>
          <Text className={`text-sm ${selectedCatagory === item.category ? 'text-white font-rubik-bold mt-0.5' : 'text-black-300 font-rubik'}`}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default Fiters