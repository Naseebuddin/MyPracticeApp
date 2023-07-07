import React, { useCallback } from "react";
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import imagePath from "../../constants/imagePath";
import eng from "../../constants/lang/eng";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/reducer/myCountItem";
import actions from "../../redux/actions/actions";

const Weshlist = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.incrementAndDecrement)
    const cartItem = useSelector((state)=>state.cartItem)
    console.log('counting', count,cartItem);
    const dataOfDealsOfTheDay = [
        {
            id: 1,
            dealImage: imagePath.zarawomen,
            itemName: eng.GETSETRESTOCK,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offOne
        },
        {
            id: 2,
            dealImage: imagePath.zara3,
            itemName: eng.GETSETRESTOCK,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offFive

        },
        {
            id: 3,
            dealImage: imagePath.zarawomen,
            itemName: eng.GETSETRESTOCK,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offFive
        },
        {
            id: 4,
            dealImage: imagePath.zara3,
            itemName: eng.GETSETRESTOCK,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offFour

        },
        {
            id: 5,
            dealImage: imagePath.zarawomen,
            itemName: eng.GETSETRESTOCK,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offOne
        },
        {
            id: 6,
            dealImage: imagePath.zara3,
            itemName: eng.GETSETRESTOCK,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offTwo

        },
        {
            id: 7,
            dealImage: imagePath.zarawomen,
            itemName: eng.GETSETRESTOCK,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offThree
        },
        {
            id: 8,
            dealImage: imagePath.zara3,
            itemName: eng.GETSETRESTOCK,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offFour

        }
    ]
    const renderItemOfDataOfDealsOfTheDay = useCallback(({ item, index }) => {
        return (
            <View style={styles.flatlistViewOFdealsOfDay}>
                <TouchableOpacity onPress={() => actions.clickTOAddItemTocart(item, index)}>
                    <ImageBackground
                        imageStyle={{ ...styles.ImageBackgroundReduisMode }}
                        resizeMode="stretch" style={styles.flatlistImageOfDealsOFdayStyle}
                        source={item.dealImage} >
                        <Text style={styles.flatlistDealOfDayTextStyle}>{item.itemName}</Text>
                        <Text style={styles.flatlistDealOfDayTextStyle}>{item.deatailOfItem}</Text>
                        <Text style={styles.flatlistDealOfDayTextPriceStyle}>{item.cost}</Text>
                        <View style={styles.bestSellerViewStyle}>
                            <TouchableOpacity 
                            onPress={()=>dispatch(increment())}
                            style={styles.ViewMoreButtonStyle}>
                                <Text>+</Text>
                            </TouchableOpacity>
                            <Text style={styles.viewMoreTextStyle} >{count.value}</Text>
                            <TouchableOpacity 
                            onPress={()=>dispatch(decrement())}
                            style={styles.ViewMoreButtonStyle}>
                                <Text>-</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }, [dataOfDealsOfTheDay]);
    return (
        <SafeAreaView>
            <View>
                <FlatList
                    numColumns={4}
                    scrollEnabled={false}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    data={dataOfDealsOfTheDay}
                    renderItem={renderItemOfDataOfDealsOfTheDay}
                />
            </View>
        </SafeAreaView>
    )
}
export default Weshlist;