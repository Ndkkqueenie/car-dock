import { Video } from 'expo-av';
import React from 'react';
import { Animated, StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { images, COLORS, SIZES, FONTS } from "../constants";
import { Button } from '../components';

const LandingScreen = ({ navigation }) => {

    const opacity = React.useMemo(() => new Animated.Value(0), []);

    function renderHeader() {
        return (
            <View
                style={{
                    height: SIZES.height > 700 ? "75%" : "70%"
                }}
            >
                    <Video
                        isLooping
                        isMuted
                        positionMillis={400}
                        onLoad={() => {
                        // https://facebook.github.io/react-native/docs/animated#timing
                        Animated.timing(opacity, {
                            toValue: 1,
                            useNativeDriver: true,
                        }).start();
                        }}
                        resizeMode="cover"
                        shouldPlay
                        source={images.loginBackground}
                        style={{
                            flex: 1,
                            justifyContent: 'flex-end'
                        }}
                        resizeMode="cover"
                    />
                    <LinearGradient
                        // Background Linear Gradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={[
                            COLORS.transparent,
                            COLORS.black
                        ]}
                        style={{
                            height: 100,
                            justifyContent:'flex-end',
                            paddingHorizontal: SIZES.padding
                        }}
                    >
                        <Text
                            style={{
                                width: "90%",
                                color: COLORS.white,
                                ...FONTS.largeTitle,
                                fontWeight: "bold",
                                lineHeight: 45
                            }}
                        >
                            Premium cars. Enjoy the luxury
                        </Text>
                    </LinearGradient>
            </View>
        )
    }

    function renderDetail() {
        return (
            <View
            style={{
                flex: 1,
                paddingHorizontal: SIZES.padding
            }}
            >
                {/* Description */}
                <Text
                    style={{
                        marginTop: SIZES.radius,
                        width: "85%",
                        color: COLORS.gray,
                        ...FONTS.body4
                    }}
                >
                    Premium and prestige car for your lifestyle.
                    Experience the thrill at affordable rate
                </Text>
                {/* Button */}
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center'
                    }}
                >
                    {/* Login */}
                    <Button 
                        buttonText="Let's Go"
                        buttonContainerStyle={{
                            paddingVertical: 16,
                            borderRadius: 25
                        }}
                        colors={[COLORS.white, COLORS.white]}
                        onPress={() => navigation.replace("HomeScreen")}
                    />
                </View>
            </View>
        )
    }

  return (
    <View
        style={{
            flex: 1,
            backgroundColor: COLORS.black
        }}
    >
        <StatusBar barStyle="light-content"/>
        {/* Header */}
        {renderHeader()}

        {/* Detail */}
        {renderDetail()}
    </View>
  );
}

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center'
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black'
  },
  backgroundViewWrapper: {
    ...StyleSheet.absoluteFillObject
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginTop: 90,
    paddingHorizontal: 20,
    textAlign: 'center'
  }
});