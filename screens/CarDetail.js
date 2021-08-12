import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Animated,
    Platform
} from 'react-native';

import { COLORS, FONTS, SIZES, images, icons } from "../constants";

const HEADER_HEIGHT = 450;

const CarDetail = ({navigation, route}) => {

    const [selectedCar, setSelectedCar] = React.useState(null)

    React.useEffect(() => {
        let {car} = route.params
        setSelectedCar(car)
    }, [])

    function renderHeaderBar() {
        return (
            <View style={{
                position: "absolute",
                top: 10,
                left: 0,
                right: 0,
                height: 100,
                paddingHorizontal: SIZES.padding,
            }}>
                <TouchableOpacity style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 35,
                    width: 35,
                    borderRadius: 18,
                    borderWidth: 1,
                    borderColor: COLORS.lightGray,
                    backgroundColor: COLORS.darkBlue   
                }}
                onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.white
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderCarCardHeader() {
        return (
            <View style={{
                alignItems: "center"
            }}>
                <Image
                    source={selectedCar?.image}
                    resizeMode="contain"
                    style={{
                        height: HEADER_HEIGHT,
                        width: "100%"
                    }}
                />
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            <View>
                {renderHeaderBar()}
                {renderCarCardHeader()}
            </View>
            <View 
                style={{
                    flexDirection: "row",
                    paddingHorizontal: 40,
                    marginVertical: 5
                }}
            >
                <Text style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 50,
                    width: "30%",
                    ...FONTS.body3
                }}>Colors: </Text>
                <TouchableOpacity>
                    <Text style={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: 50,
                        width: 50,
                        ...FONTS.body3
                    }}>{selectedCar?.color?.color1}</Text>
                </TouchableOpacity> 
                <TouchableOpacity>  
                    <Text style={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: 50,
                        width: 50,
                        ...FONTS.body3
                    }}>{selectedCar?.color?.color2}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{
                        alignItems: "flex-end",
                        justifyContent: "center",
                        height: 50,
                        width: 60,
                        ...FONTS.body2,
                    }}>{selectedCar?.color?.color3}</Text>
                </TouchableOpacity>
                
            </View>
            <View style={{
                    flexDirection: "row",
                    paddingHorizontal: 40,
                    marginVertical: 5
                }}>
                    <Text style={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: 50,
                        width: "30%",
                        ...FONTS.body3
                    }}>
                        {selectedCar?.feature?.start}
                    </Text>
                    <Text style={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: 50,
                        width: "30%",
                        ...FONTS.body3
                    }}>
                        {selectedCar?.feature?.engine}
                    </Text>
                    <Text style={{
                        alignItems: "center",
                        justifyContent: "center",
                        height: 50,
                        width: 75,
                        ...FONTS.body3,
                    }}>
                        {selectedCar?.feature?.drive}
                    </Text>
            </View>
        </View>
    )
}

export default CarDetail;