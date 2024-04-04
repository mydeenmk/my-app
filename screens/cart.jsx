
import { View, Text } from 'react-native'
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';

export default function Cart() {
const image= [
  require('../assets/1.jpg'),
  require('../assets/2.jpg'),
  require('../assets/3.jpg'),
  require('../assets/4.jpg'),
]

  return (
    <View>
      <SliderBox images={image}/>

      <Text>Add your Items here !</Text>
    </View>
  )
}