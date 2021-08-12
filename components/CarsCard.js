import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  Platform,
  StyleSheet
} from 'react-native';

import { SIZES, COLORS, FONTS, icons } from '../constants';

const CarsCard = ({ containerStyle, carItem, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        height: 250,
        width: 250,
        marginTop: SIZES.radius,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: SIZES.radius,
        ...containerStyle
      }}
      onPress={onPress}
    >
      { /* Background Image */}
      <Image 
        source={carItem.image}
        resizeMode="contain"
        style={{
          width: 250,
          height: 200,
          borderRadius: SIZES.radius *2,
        }}
      />
      <View style={{
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.darkBlue,
        marginBottom: 20
      }}>
        <Text style={{ 
          color: COLORS.white,
          ...FONTS.body3,
          marginLeft: 15
        }}>
          {carItem.name},   {carItem.year}
        </Text>
        <Text style={{ 
        color: COLORS.white,
        ...FONTS.body3,
        marginLeft: 15
      }}>{carItem.cost}</Text>
        
        
      </View>
    </TouchableOpacity>
  )
}

export default CarsCard;