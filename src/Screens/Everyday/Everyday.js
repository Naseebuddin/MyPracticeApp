import React, { useState, useCallback, useRef } from "react";
import { Text, View, Image, SafeAreaView, ScrollView, FlatList, TouchableOpacity, ImageBackground, Alert } from "react-native";
import HeaderComponent from "../../Components/HeaderComponent";
import eng from "../../constants/lang/eng";
import styles from "./styles";
import imagePath from "../../constants/imagePath";
import HimAndHerBotton from "../../Components/HimAndHerBotton";
import color from "../../styles/color";
import ButtonWithLabel from "../../Components/ButtonWithLabel";
import { moderateScale } from "react-native-size-matters";
import actions from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import navigationStrig from "../../constants/navigationStrig";
import { increment } from "../../redux/reducer/myCountItem";
import { incrementCartItemQuantity } from "../../redux/reducer/mycartItem";
const Everyday = ({ navigation }) => {

    const carTItem = useSelector((state) => state.cartItem)

    const dispatch = useDispatch();
    const calltoAddTheItem = (item, index) => {
        actions.clickTOAddItemTocart(item, index);
        dispatch(incrementCartItemQuantity(item.id))
    }
    const DATA = [
        {
            id: 1,
            name: eng.MEN,
            myImage: imagePath.men
        },
        {
            id: 2,
            name: eng.WOMEN,
            myImage: imagePath.womens
        },
        {
            id: 3,
            name: eng.KIDS,
            myImage: imagePath.kids
        },
        {
            id: 4,
            name: eng.HOME,
            myImage: imagePath.home
        },
        {
            id: 5,
            name: eng.FOOTWEAR,
            myImage: imagePath.footwear
        },
        {
            id: 6,
            name: eng.CATAGORIES,
            myImage: imagePath.diamond
        },
        {
            id: 7,
            name: eng.JEWELLERY,
            myImage: imagePath.jewellery
        },
        {
            id: 8,
            name: eng.MEN,
            myImage: imagePath.men
        },
        {
            id: 9,
            name: eng.WOMEN,
            myImage: imagePath.womens
        },
    ]

    const dataOfDealsOfTheDay = [
        {
            id: 1,
            dealImage: imagePath.zarawomen,
            itemName: eng.ZARA,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offOne,
            sold: eng.SOLDBY1,
            peopleView: eng.PEOPLESEEN,
            return: eng.DAYSRETURN,
            size: 7,
            quantity: 0,
        },
        {
            id: 2,
            dealImage: imagePath.zara3,
            itemName: eng.GETSETRESTOCK,
            deatailOfItem: eng.ZARA,
            cost: eng.PRICE,
            ItemDiscount: eng.offFive,
            sold: eng.SOLDBY1,
            peopleView: eng.PEOPLESEEN,
            return: eng.DAYSRETURN,
            size: 8,
            quantity: 0,
            amount:0,

        },
        {
            id: 3,
            dealImage: imagePath.zarawomen,
            itemName: eng.ADDIDAS,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offFive,
            sold: eng.SOLDBY1,
            peopleView: eng.PEOPLESEEN,
            return: eng.DAYSRETURN,
            size: 8,
            quantity: 0,
            amount:0,
        },
        {
            id: 4,
            dealImage: imagePath.zara3,
            itemName: eng.LIVIES,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offFour,
            sold: eng.SOLDBY1,
            peopleView: eng.PEOPLESEEN,
            return: eng.DAYSRETURN,
            size: 9,
            quantity: 0,
            amount:0,

        },
        {
            id: 5,
            dealImage: imagePath.zarawomen,
            itemName: eng.NIKE,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offOne,
            sold: eng.SOLDBY1,
            peopleView: eng.PEOPLESEEN,
            return: eng.DAYSRETURN,
            size: 8,
            quantity: 0,
            amount:0,

        },
        {
            id: 6,
            dealImage: imagePath.zara3,
            itemName: eng.GETSETRESTOCK,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offTwo,
            sold: eng.SOLDBY2,
            peopleView: eng.PEOPLESEEN,
            return: eng.DAYSRETURN,
            size: 8,
            quantity: 0,
            amount:0,

        },
        {
            id: 7,
            dealImage: imagePath.zarawomen,
            itemName: eng.GETSETRESTOCK,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offThree,
            sold: eng.SOLDBY2,
            peopleView: eng.PEOPLESEEN,
            return: eng.DAYSRETURN,
            size: 10,
            quantity: 0,
            amount:0,
        },
        {
            id: 8,
            dealImage: imagePath.zara3,
            itemName: eng.GETSETRESTOCK,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offFour,
            sold: eng.SOLDBY2,
            peopleView: eng.PEOPLESEEN,
            return: eng.DAYSRETURN,
            size: 9,
            quantity: 0,
             amount:0,

        }
    ]
    const selectItemData = [
        {
            id: 1,
            item: eng.ALL,
            myColor: color.black
        },
        {
            id: 2,
            item: eng.JEANS,
            myColor: color.black
        },
        {
            id: 3,
            item: eng.DRESSES,
            myColor: color.black
        },
        {
            id: 4,
            item: eng.COORDER,
            myColor: color.black
        },
        {
            id: 5,
            item: eng.TROUSERS,
            myColor: color.black
        }
        , {
            id: 6,
            item: eng.JUMSUITE,
            myColor: color.black
        }
    ]

    const [isSelectItem, setIsSelectItem] = useState({ selectItemData })


    const myselectItemData = (id) => {
        let copyArray = selectItemData.map((value) => {
            if (value.id == id) {
                return { ...value, myColor: color.mREd }
            }
            else {
                return value;
            }
        });
        setIsSelectItem({ selectItemData: copyArray })
    }
    const renderDataItemProducts = useCallback(({ item, index }) => {
        return (
            <View style={styles.flatlistViewOdata}>
                <TouchableOpacity>
                    <View style={styles.flatlistDataOfImageView}>
                        <Image style={styles.flatlistDataOfImage} source={item.myImage} />
                    </View>
                    <Text style={styles.flatlistDataOfTextStyle}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }, [DATA]);
    const renderItemOfDataOfDealsOfTheDay = useCallback(({ item, index }) => {
        return (
            <View style={styles.flatlistViewOFdealsOfDay}>

                <ImageBackground
                    imageStyle={{ ...styles.ImageBackgroundReduisMode }}
                    resizeMode="stretch" style={styles.flatlistImageOfDealsOFdayStyle}
                    source={item.dealImage} >
                    <Text style={styles.flatlistDealOfDayTextStyle}>{item.itemName}</Text>
                    <Text style={styles.flatlistDealOfDayTextStyle}>{item.deatailOfItem}</Text>
                    <Text style={styles.flatlistDealOfDayTextPriceStyle}>{item.cost}</Text>
                    <TouchableOpacity onPress={() => { calltoAddTheItem(item, index) }}>
                        <Text style={styles.flatlistDealOfDayTextPriceStyle}>ADDTOCART</Text>
                    </TouchableOpacity>
                </ImageBackground>

            </View>
        )
    }, [dataOfDealsOfTheDay]);
    const renderItemOfDataOfBudgetBuys = useCallback(({ item, index }) => {
        return (
            <View style={styles.flatlistViewOFBudgetBuysStyle}>
                <TouchableOpacity>
                    <ImageBackground
                        imageStyle={{ ...styles.ImageBackgroundReduisModeOfBudgetBuys }}
                        resizeMode="stretch" style={styles.flatlistImageOfBudgetBuysStyle}
                        source={item.dealImage} >
                        <Text style={styles.flatlistBudgetBuysTextStyle}>{item.deatailOfItem}</Text>
                        <Text style={styles.flatlistBudgetOfDaysTextPriceStyle}>Under  {item.cost}</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }, [dataOfDealsOfTheDay]);

    const renderItemOfDataOFTrendingEssentails = useCallback(({ item, index }) => {
        return (
            <View style={styles.flatlistViewOFTrendingEssentialStyle}>
                <TouchableOpacity>
                    <ImageBackground
                        resizeMode="stretch" style={styles.flatlistImageOfTrendingEssentialStyle}
                        source={item.dealImage} >
                        <Text style={styles.flatlistTrendingEssentialStyle}>{item.deatailOfItem}</Text>

                        <Text style={styles.flatlistTrendingEssentialStyle}>Under {item.cost}</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }, [dataOfDealsOfTheDay]);
    const renderItemOfDataOFBestSeller = useCallback(({ item, index }) => {
        return (
            <View style={styles.flatlistViewOFBestSelllerStyle}>
                <TouchableOpacity onPress={() => actions.clickTOAddItemTocart(item, index)}>
                    <ImageBackground
                        resizeMode="stretch" style={styles.flatlistImageOfBestSellerStyle}
                        source={item.dealImage} >
                        <Text style={styles.flatlistTextOfBestSellerOFFLabelStyle}>{item.ItemDiscount}</Text>
                    </ImageBackground>
                    <View style={styles.bestSellerViewStyle}>
                        <View>
                            <Text style={styles.flatlistTextOfBestSellerStyle}>{item.deatailOfItem}</Text>
                            <Text style={styles.flatlistTextBestSelleDescriptionStyle}>{item.deatailOfItem}</Text>
                            <Text style={styles.flatlistTextOfBestSellerStyle}>Under {item.cost}</Text>
                            <Text style={styles.flatlistTextOfBestSellerBottomOFFLabelStyle}>{item.ItemDiscount}</Text>
                        </View>
                        <TouchableOpacity style={styles.flatlistHeartIconeOfBestSellerBtnStyle}>
                            <Image style={styles.flatlistHeartIconeOfBestSellerStyle} source={imagePath.normalHeart} />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }, [dataOfDealsOfTheDay]);

    const renderDataOfSelectItem = useCallback(({ item, index }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => myselectItemData(item.id)}>
                    <Text style={{ ...styles.flatlistTextOfSelectitem, borderColor: item.myColor, color: item.myColor }}>{item.item}</Text>
                </TouchableOpacity>
            </View>
        )
    }, [isSelectItem.selectItemData]);


    const saveCartData = useSelector((state) => state.counter)
    console.log('savetoCarData', saveCartData);
    return (
        <SafeAreaView style={styles.mainView}>
            <View style={styles.mainView}>
                <View>
                    <HeaderComponent
                        basketOnPress={() => navigation.navigate(navigationStrig.BASEKET)}
                        searchOnPress={() => navigation.navigate(navigationStrig.SEARCH)}
                        bellOnpress={() => navigation.navigate(navigationStrig.NOTIFICATIONS)}
                        heartOnPress={() => navigation.navigate(navigationStrig.WESHLIST)}
                        textPropsOne={styles.textStyleOne}
                        myTextOne={eng.MYNTRAEVERDAY}
                        myIcons1={styles.myIcons}
                        myIcons3={styles.myIcons}
                        myIcons4={styles.myIcons}
                        searchIcone={imagePath.search}
                        heartIcone={imagePath.normalHeart}
                        basket={imagePath.basket}
                    />
                </View>
                <ScrollView >
                    <View style={styles.everydayImageBacgroundViewStyle}>
                        <HimAndHerBotton
                            buttonStyle={styles.myImageBackgroundStyle}
                            btnTextStyle={styles.TextOfeverydayStyle}
                            buttonTextLabel={eng.FORHIM}
                            btnImage={imagePath.arrowRight}
                            myImageBackground={imagePath.zaraman}
                            myImageBackgroundStyle={styles.myImageBackgroundStyle}
                            buttonImageStyle={styles.everydayButtonImageStyle}
                            imageViewStyling={styles.myImageBackgroundViewStyle}
                        />
                        <HimAndHerBotton
                            buttonImageStyle={styles.everydayButtonImageStyle}
                            buttonStyle={styles.myImageBackgroundStyle}
                            btnTextStyle={styles.TextOfeverydayStyle}
                            buttonTextLabel={eng.FORHER}
                            btnImage={imagePath.arrowRight}
                            myImageBackground={imagePath.zarawomen}
                            myImageBackgroundStyle={styles.myImageBackgroundStyle}
                            imageViewStyling={styles.myImageBackgroundViewStyle}
                        />
                    </View>
                    <Text style={styles.catogoriesTextStyle}>{eng.CATAGORIESONTHERISE}</Text>
                    <Text style={styles.getTextStyle}>{eng.GETSETRESTOCK}</Text>
                    <FlatList
                        numColumns={5}
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                        data={DATA}
                        renderItem={renderDataItemProducts}
                    />
                    <ImageBackground
                        style={styles.ImageBackgroundViewStyle}
                        source={imagePath.percentage}>
                        <Image resizeMode="stretch" style={styles.dealImageStyle} source={imagePath.deals} />
                        <FlatList
                            horizontal
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            data={dataOfDealsOfTheDay}
                            renderItem={renderItemOfDataOfDealsOfTheDay}
                        />
                    </ImageBackground>
                    <View style={styles.budgetBuysViewStyle}>
                        <Text style={styles.budgetBuysTextStyle}>{eng.BUGETBUYS}</Text>
                        <FlatList
                            numColumns={4}
                            scrollEnabled={false}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            data={dataOfDealsOfTheDay}
                            renderItem={renderItemOfDataOfBudgetBuys}
                        />
                    </View>
                    <View style={styles.trendingEssentialViewStyle}>
                        <Text style={styles.budgetBuysTextStyle}>{eng.TRENDINGESSENTAILS}</Text>
                        <FlatList
                            horizontal
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            data={dataOfDealsOfTheDay}
                            renderItem={renderItemOfDataOFTrendingEssentails}
                        />
                    </View>
                    <View style={styles.bestSelleerViewStyle}>
                        <Image
                            resizeMode="stretch"
                            style={styles.bestSellerImageStyle}
                            source={imagePath.bestseller}
                        />
                        <FlatList
                            horizontal
                            scrollEnabled={true}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            data={isSelectItem.selectItemData}
                            renderItem={renderDataOfSelectItem}
                        />
                        <FlatList
                            horizontal
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            data={dataOfDealsOfTheDay}
                            renderItem={renderItemOfDataOFBestSeller}
                        />
                    </View>
                    <ButtonWithLabel

                        btnBackgroundColor={color.btndarkColor}
                        buttonStyle={styles.ViewMoreButtonStyle}
                        textColor={color.white}
                        buttonTextLabel={eng.VIEWMORE}
                        btnTextStyle={styles.viewMoreTextStyle}
                    />
                    <Text style={styles.flatlistTextIDONTKNOWStyle}>{eng.IDONTKNOW}</Text>
                    <Text style={{ ...styles.flatlistTextIDONTKNOWStyle, marginTop: moderateScale(0) }}>{eng.MARLINMORE}</Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default Everyday;