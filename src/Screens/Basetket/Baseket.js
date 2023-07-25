import React, { useCallback, useEffect, useRef, useState } from "react";
import { Text, View, SafeAreaView, FlatList, Image, TouchableOpacity, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import actions from "../../redux/actions/actions";
import ButtonWithLabel from "../../Components/ButtonWithLabel";
import color from "../../styles/color";
import eng from "../../constants/lang/eng";
import ActionSheet from "react-native-actions-sheet";
import HeaderComponent from "../../Components/HeaderComponent";
import imagePath from "../../constants/imagePath";
import { IncrementItemSize, incrementByAmountCartItem, incrementByAmountOfSize, incrementCartItemQuantity } from "../../redux/reducer/mycartItem";
import navigationStrig from "../../constants/navigationStrig";
const Baseket = ({ navigation }) => {
    const [selectedProduct, setSelectedProduct] = useState({})
    const [selectedProductOfSzie, setSelectedProductOfSize] = useState({})
    const [isChecked, setIschecked] = useState('');
    const cartSelectdata = useSelector((state) => state.cartItem.cartItems);
    let grandTotalAmount = useSelector((state) => state.cartItem.toThegrandTotal)
    // console.log(grandTotalAmount, 'grandTotalAmountgrandTotalAmountgrandTotalAmount');
    const actionSheetRef = useRef(null);
    const actionClose = () => {
        actionSheetRef.current?.hide()
    }
    const deleltTheCartItem = (itemTodelet) => {
        actions.clickToDeleltItemOfCart(itemTodelet);

        Alert.alert('Selected Item remove it.')
        // console.log(itemTodelet,'>>>>>>>');
        grandTotalAmount =  itemTodelet; 
    }
    const clearAllThecartItemFromStore = () => {
        actions.clearMyAllCartItem();
        Alert.alert('All Item removed from cart')
    }
    const dispatch = useDispatch();

    const incrementtheItem = (item, index) => {
        dispatch(incrementByAmountCartItem(item))
    }
    const incrementSizeOfTheItem = (item) => {
        dispatch(incrementByAmountOfSize(item))
    }
    const _onSelectProductForUpdate = (item) => {
        setSelectedProduct(item)
        actionSheetRef.current?.show()
        setIschecked(true)
    }
    const _onSelectProductForUpdateSize = (item) => {
        setSelectedProductOfSize(item)
        actionSheetRef.current?.show()
        setIschecked(false)
    }
    const IncrementData = [{
        id: 1,
        qty: 1,
        size: 4,
        myBoderColor: color.black

    },
    {
        id: 2,
        qty: 2,
        size: 5,
        myBoderColor: color.black

    },
    {
        id: 3,
        qty: 3,
        size: 6,
        myBoderColor: color.black

    },
    {
        id: 4,
        qty: 4,
        size: 7,
        myBoderColor: color.black

    },
    {
        id: 5,
        qty: 5,
        size: 8,
        myBoderColor: color.black

    },
    {
        id: 6,
        qty: 6,
        size: 9,
        myBoderColor: color.black

    },
    {
        id: 7,
        qty: 7,
        size: 10,
        myBoderColor: color.black

    },
    {
        id: 8,
        qty: 8,
        size: 11,
        myBoderColor: color.black

    },
    {
        id: 9,
        qty: 19,
        size: 12,
        myBoderColor: color.black
    },
    ];
    const dataOfIncrementSize = [

        {
            id: 1,
            size: 4,
            myBoderColor: color.black

        },
        {
            id: 2,
            size: 5,
            myBoderColor: color.black

        },
        {
            id: 3,
            size: 6,
            myBoderColor: color.black

        },
        {
            id: 4,
            size: 7,
            myBoderColor: color.black

        },
        {
            id: 5,
            size: 8,
            myBoderColor: color.black

        },
        {
            id: 6,
            size: 9,
            myBoderColor: color.black

        },
        {
            id: 7,
            size: 10,
            myBoderColor: color.black

        },
        {
            id: 8,
            size: 11,
            myBoderColor: color.black

        },
        {
            id: 9,
            size: 12,
            myBoderColor: color.black
        },


    ]
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
                        <TouchableOpacity onPress={() => _onSelectProductForUpdateSize(item)}>
                            <Text style={styles.qtyTextStyle} >
                                {eng.SIZE}: {item.size} ▾</Text>
                        </TouchableOpacity>
                        <Text style={styles.qtyTextStyle} onPress={() => _onSelectProductForUpdate(item)}
                        >{eng.QTY}: {item.quantity} ▾</Text>
                    </View>
                    <Text style={styles.flatlistDealOfDayTextPriceStyle}> ₹ {item.cost * item.quantity}</Text>
                    <Text style={styles.flatlistDealOfDayTextPriceStyle}> ↻ 12 {item.return}</Text>
                </View>
            </View>
        )
    }, [cartSelectdata]);
    const renderItemOfIncrementData = useCallback(({ item, index }) => {
        return (
            <View style={styles.selectingNoQuantityView}>
                <TouchableOpacity style={styles.selectingNumberBtnStyle} onPress={() => {
                    incrementtheItem({ ...selectedProduct, selectedQuantity: item.qty })
                }} >
                    <Text style={styles.SzieSelectTextStyle}>{item.qty}</Text>
                </TouchableOpacity>
            </View>
        )
    }, [IncrementData])
    const renderItemOfIncrementSize = useCallback(({ item }) => {
        return (
            <View style={styles.selectingNoQuantityView}>
                <TouchableOpacity style={styles.selectingNumberBtnStyle} onPress={() => { incrementSizeOfTheItem({ ...selectedProductOfSzie, selectedSzie: item.size }) }}>
                    <Text style={styles.SzieSelectTextStyle}> {item.size}</Text>
                </TouchableOpacity>
            </View>
        )
    }, [dataOfIncrementSize])
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
                        <Text style={styles.itemSelectTextHeaderStyle}>{cartSelectdata.length}/{cartSelectdata.length}{eng.ITEMISSELECTED} ({grandTotalAmount}) </Text>
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
                    onPress={()=> navigation.navigate(navigationStrig.ORDERTOCONTINUE)}
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
                            {isChecked ? (
                                <Text style={styles.actionSheetSelectquantityTextStyle} > {eng.SELECTQUANTITY}</Text>) :
                                (
                                    <Text style={styles.actionSheetSelectquantityTextStyle}>{eng.SELECTSIZE}</Text>
                                )
                            }
                            <TouchableOpacity onPress={() => actionClose()}>
                                <Text> X</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {isChecked ? (
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            keyExtractor={item => item.id}
                            data={IncrementData}
                            renderItem={renderItemOfIncrementData}
                        />) : (
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            keyExtractor={item => item.id}
                            data={dataOfIncrementSize}
                            renderItem={renderItemOfIncrementSize}
                        />
                    )}
                 
                    <ButtonWithLabel
                     onPress={() => {
                       Alert.alert('ssssss')
                    }}
                        btnBackgroundColor={color.profileButtonColor}
                        textColor={color.white}
                        buttonStyle={styles.DoneButtonStyle}
                        btnTextStyle={styles.logigSighnupTextStyle}
                        buttonTextLabel={eng.DONE} />
                    {/* <TouchableOpacity onPress={()=> {incrementtheItem(item)}}>
                                <Text>click</Text>
                            </TouchableOpacity> */}
                </ActionSheet>
            </View>
        </SafeAreaView>
    )
}
export default Baseket;