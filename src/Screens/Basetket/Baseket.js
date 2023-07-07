import React, { useCallback, useRef, useState } from "react";
import { Text, View, SafeAreaView, FlatList, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import actions from "../../redux/actions/actions";
import ButtonWithLabel from "../../Components/ButtonWithLabel";
import color from "../../styles/color";
import eng from "../../constants/lang/eng";
import ActionSheet from "react-native-actions-sheet";
import HeaderComponent from "../../Components/HeaderComponent";
import imagePath from "../../constants/imagePath";
import { incrementByAmountCartItem, incrementCartItemQuantity } from "../../redux/reducer/mycartItem";
const Baseket = ({ navigation }) => {
    const [incrementbyAmount, setIncrementbyAmount] = useState('');
    const [selectedProduct, setSelectedProduct] = useState({})
    console.log(selectedProduct, 'myProduct')
    const IncrementData = [{
        id: 1,
        amount: 1,
    },
    {
        id: 2,
        amount: 2,
    },
    {
        id: 3,
        amount: 3,
    },
    {
        id: 4,
        amount: 4,
    },
    {
        id: 5,
        amount: 5,
    },
    {
        id: 6,
        amount: 6,
    },
    {
        id: 7,
        amount: 7,
    },
    {
        id: 8,
        amount: 8,
    },
    {
        id: 9,
        amount: 19,
    },
    ]
    const actionSheetRef = useRef(null);
    const actionClose = () => {
        actionSheetRef.current?.hide()
    }
    const cartSelectdata = useSelector((state) => state.cartItem.cartItems)
    // const itemQuantity = useSelector((state) => state.cartItem.cartItems)
    // const item = itemQuantity.find((val) => val)
    // // console.log(item.quantity, '<<<<<quantity');
    const deleltTheCartItem = (itemTodelet) => {
        actions.clickToDeleltItemOfCart(itemTodelet)
    }
    const clearAllThecartItemFromStore = () => {
        actions.clearMyAllCartItem()
    }
    const dispatch = useDispatch();
    const incrementtheItem = (item, index) => {
        console.log(item, "itemitemitemitemitemitem +++++++++++++");
        dispatch(incrementByAmountCartItem(item))
    }
    const _onSelectProductForUpdate = (item) => {
        setSelectedProduct(item)

        actionSheetRef.current?.show()
    }
    const renderItemOfDataOfDealsOfTheDay = useCallback(({ item, index }) => {
        return (
            <View style={styles.flatlistViewOFdealsOfDay}>
                <Image
                    resizeMode="stretch" style={styles.flatlistImageOfDealsOFdayStyle}
                    source={item.dealImage} />
                <View>
                    <View style={styles.flatlistViewOFTextView}>
                        <Text style={styles.flatlistDealOfDayTextStyle}>{item.itemName}</Text>
                        <Text onPress={() => deleltTheCartItem(index)} style={styles.flatlistDeleltItemStyle}>X</Text>
                    </View>
                    <Text style={styles.flatlistDealOfDayTextStyle}>{item.deatailOfItem}</Text>
                    <Text>{eng.SOLDBY}: {item.sold}</Text>
                    <Text style={styles.flatlistDealOfDayTextPriceStyle}>{item.peopleView}</Text>
                    <View style={styles.ietmsQtyandSizeViewStyle}>
                        <Text style={styles.qtyTextStyle} >{eng.SIZE}: {item.size} ▾</Text>
                        <Text style={styles.qtyTextStyle}
                            // onPress={() => {incrementtheItem(item,index)}}
                            onPress={() => _onSelectProductForUpdate(item)}
                        >{eng.QTY}: {item.quantity} ▾</Text>
                    </View>
                    <Text style={styles.flatlistDealOfDayTextPriceStyle}>{item.cost}</Text>
                    <Text> ↻ 12 {item.return}</Text>
                </View>
            </View>
        )
    }, [cartSelectdata]);
    const renderItemOfIncrementData = useCallback(({ item, index }) => {
        return (
            <View>
                <Text onPress={() => incrementtheItem({ ...selectedProduct, selectedQuantity: item.amount })}>{item.amount}</Text>
            </View>
        )
    }, [IncrementData])
    return (
        <SafeAreaView style={styles.mainView}>
            <View style={styles.mainView}>
                <HeaderComponent
                    gobackIconeStyle={styles.myIcons}
                    gobackIcone={imagePath.arrowbackblak}
                    OnPressgoback={() => navigation.goBack()}
                    textPropsOne={styles.textStyleOne}
                    myTextOne={eng.SHOPPINGBAG}
                    myIcons3={styles.myIcons}
                    heartIcone={imagePath.normalHeart}
                />
                <View style={styles.itemView}>
                    <View style={styles.ietmsSelectViewStyle}>
                        <Text style={styles.itemSelectTextHeaderStyle}>{cartSelectdata.length}/{cartSelectdata.length} {eng.ITEMISSELECTED}</Text>
                        <TouchableOpacity onPress={() => clearAllThecartItemFromStore()}>
                            <Image source={imagePath.delet} />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={cartSelectdata}
                        renderItem={renderItemOfDataOfDealsOfTheDay}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={styles.btnViewStyle}>
                    <View style={styles.emptyViewStyle}>
                        <Text style={styles.counterTextStyle}>{cartSelectdata.length} {eng.ITEMISSELECTED}</Text>
                    </View>
                    <ButtonWithLabel
                        btnBackgroundColor={color.profileButtonColor}
                        textColor={color.white}
                        buttonStyle={styles.continueButtonStyle}
                        btnTextStyle={styles.logigSighnupTextStyle}
                        buttonTextLabel={eng.PLACEORDER} />
                </View>
                <ActionSheet
                    containerStyle={styles.containerStyleActionSheet}
                    ref={actionSheetRef} >
                    <View style={styles.actionSheetViewStyle}>
                        <View style={styles.actionSheetSelectQuantityViewStyle}>
                            <Text style={styles.actionSheetSelectquantityTextStyle} >{eng.SELECTQUANTITY}</Text>
                            <TouchableOpacity>
                                <Text> X</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text>working</Text>
                    <FlatList
                        keyExtractor={item => item.id}
                        data={IncrementData}
                        renderItem={renderItemOfIncrementData}
                    />
                    {/* <TouchableOpacity onPress={()=> {incrementtheItem(item)}}>
                                <Text>click</Text>
                            </TouchableOpacity> */}
                </ActionSheet>
            </View>
        </SafeAreaView>
    )
}
export default Baseket;