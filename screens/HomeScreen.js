import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    SafeAreaView
} from 'react-native';
import { ListItem } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';

import { COLORS, images, SIZES, FONTS, icons, CarData } from "../constants";
import { HelloAnimator, CarsCard } from '../components';

const HomeScreen = ({ navigation }) => {

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 50
                }}
            >
                {/* Text */}
                <TouchableOpacity
                    style={{
                        width: "40%",
                        height: "100%",
                        paddingLeft: SIZES.padding,
                        justifyContent: 'center',
                        marginLeft: SIZES.padding,
                        marginTop: SIZES.padding,
                        backgroundColor: COLORS.white,
                        borderRadius: SIZES.radius *2,
                        borderColor: COLORS.darkBlue,
                        borderWidth: 4
                    }}
                >
                    <Text 
                        style={{
                            color: COLORS.darkBlue,
                            ...FONTS.body3,
                            fontWeight: "300"
                        }}
                    > 
                        Information
                    </Text>
                </TouchableOpacity>
                    {/* Text */}
                <TouchableOpacity
                    style={{
                        width: "40%",
                        height: "100%",
                        paddingLeft: SIZES.padding,
                        justifyContent: 'center',
                        alignContent: 'center',
                        marginLeft: SIZES.padding,
                        marginTop: SIZES.padding,
                        backgroundColor: COLORS.white,
                        borderRadius: SIZES.radius *2,
                        borderColor: COLORS.darkBlue,
                        borderWidth: 4
                    }}
                >
                    <Text 
                        style={{
                            color: COLORS.darkBlue,
                            ...FONTS.body3,
                            fontWeight: "300",
                        }}
                    > 
                        Notification
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    function renderGreeting() {
        return (
            <View style={{
                width: "90%",
                paddingVertical: SIZES.padding,
                paddingHorizontal: SIZES.padding,
                borderRadius: SIZES.radius *2,
                backgroundColor: COLORS.darkBlue,
                marginTop: SIZES.padding *2,
                marginLeft: 20
            }}>
                <HelloAnimator 
                    content="Hello, Welcome to premium cars! We are thrilled to have someone with such impeccable taste amongst us ❤️️️️" 
                    textStyle={styles.textStyle}
                    style={styles.containerStyle}
                    timing={500}
                />
            </View>
        )
    }

    function renderCarsSection() {
        return (
            <View>
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text
                    style={{
                        marginHorizontal: SIZES.padding,
                        ...FONTS.h2
                    }}
                >
                    Tesla Cars
                </Text>
                <FlatList 
                    data={CarData.teslaCars}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item, index }) => {
                        return (
                            <View>
                                <CarsCard 
                                    carItem={item}
                                    onPress={() => navigation.navigate("CarDetail", {car: item})}
                                />
                            </View>
                        )
                    }}
                />
            </View>
            <View
            style={{
                marginTop: SIZES.padding
            }}
        >
            <Text
                style={{
                    marginHorizontal: SIZES.padding,
                    ...FONTS.h2
                }}
            >
                Audi Cars
            </Text>
            <FlatList 
                data={CarData.audiCars}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item, index }) => {
                    return (
                        <View>
                            <CarsCard 
                                carItem={item}
                                onPress={() => navigation.navigate("CarDetail", {car: item})}
                            />
                        </View>
                    )
                }}
            />
        </View>
        <View
            style={{
                marginTop: SIZES.padding
            }}
        >
            <Text
                style={{
                    marginHorizontal: SIZES.padding,
                    ...FONTS.h2
                }}
            >
                BMW Cars
            </Text>
            <FlatList 
                data={CarData.bmwCars}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item, index }) => {
                    return (
                        <View>
                            <CarsCard 
                                carItem={item}
                                onPress={() => navigation.navigate("CarDetail", {car: item})}
                            />
                        </View>
                    )
                }}
            />
        </View>
        </View>
        )
    }

    return (
        <SafeAreaView
            style={styles.container}
        >
            <FlatList 
                data={CarData.CarCategory}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode="on-drag"
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/* Header */}
                        {renderHeader()}
                        {/* Greeting */}
                        {renderGreeting()}
                        {/* Car Section */}
                        {renderCarsSection()}
                    </View>
                }
                ListFooterComponent={
                    <View 
                        style={{
                            marginBottom: 100
                        }}
                    />
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.lightGray4
    },
    containerStyle: {
        marginTop: 5
    },
    textStyle: {
        color: COLORS.white,
        ...FONTS.body3,
        fontWeight: "300"
    },
});

export default HomeScreen;