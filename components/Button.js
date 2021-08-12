import React from 'react'
import {
  TouchableOpacity,
  Text
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { COLORS, FONTS } from "../constants";

const Button = ({ buttonText, buttonContainerStyle, colors, onPress }) => {
  return (   
    <TouchableOpacity 
    onPress={onPress}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors}
        style={{
          ...buttonContainerStyle
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            color: COLORS.darkBlue,
            ...FONTS.h2,
            fontWeight: "bold"
          }}
        >
          {buttonText}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default Button;