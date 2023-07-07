import { FloatingAction } from "react-native-floating-action";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, Dimensions, TextInput, View, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import HeaderComponent from "../../Components/HeaderComponent";
import imagePath from "../../constants/imagePath";
import eng from "../../constants/lang/eng";
import LottieView from 'lottie-react-native';
import navigationStrig from "../../constants/navigationStrig";
import styles from "./styles";
import ButtonWithLabel from "../../Components/ButtonWithLabel";
import Carousel, { Pagination } from "react-native-snap-carousel";
import color from "../../styles/color";
import HimAndHerBotton from "../../Components/HimAndHerBotton";
import { moderateScale, verticalScale } from "react-native-size-matters";
import ActionSheet from "react-native-actions-sheet";
export const slider_Width = Dimensions.get('window').width + 5;
export const ITEM_Width = Math.round(slider_Width * 1);
const Home = ({ navigation }) => {
    const [myTxtColor, setMyTextColor] = useState();
    const [index, setIndex] = useState(0);
    const [myBackgroundColorOfBeauty, setMyBackgroundColorOfBeauty] = useState()
    const [myTxtOfBeautyColor, setMyTxtOfBeautyColor] = useState();
    const [myBackgroundColor, setMyBackgroundColor] = useState()
    const [state, setState] = useState(false);
    const isCarousel = useRef(null);
    const [millySecond, setMillySecond] = useState(60);
    const [minutes, setMinutes] = useState(60);
    const [hour, setHour] = useState(2)
    const buttonState = () => {
        if (state == true) {
            setMyTextColor(color.black);
            setMyBackgroundColor(color.white);
            setMyBackgroundColorOfBeauty(color.darkSilver)
            setMyTxtOfBeautyColor(color.white)
            setState(false)
        }
        if (state == false) {
            setMyTextColor(color.white);
            setMyBackgroundColor(color.darkSilver);
            setMyBackgroundColorOfBeauty(color.white)
            setMyTxtOfBeautyColor(color.black)
            setState(true)
        }
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

    ]
    const carouselData = [{
        id: 1,
        url: imagePath.label1,
    },
    {
        id: 2,
        url: imagePath.label2,
    }]
    const width = Dimensions.get('window').width;
    const renderItem = ({ item }) => {
        return (
            <View style={styles.carouselView}>
                <Image
                    resizeMode="stretch"
                    source={item.url}
                    style={styles.carouselImageStyle}
                />
                <View style={{ marginTop: -15 }}>

                </View>
            </View>

        )
    }
    const continueBrowsingData = [
        {
            id: 1,
            name: eng.NIKE,
            description: eng.FLIPFLOPS,
            itemImage: imagePath.flipflop
        },
        {
            id: 2,
            name: eng.ADDIDAS,
            description: eng.SPORTSHOES,
            itemImage: imagePath.addidas
        },
        {
            id: 3,
            name: eng.LIVIES,
            description: eng.LOUNGSHIRT,
            itemImage: imagePath.livis
        },
        {
            id: 4,
            name: eng.SPORTSHOES,
            description: eng.SPORTSHOES,
            itemImage: imagePath.shoes
        }, {
            id: 5,
            name: eng.HM,
            description: eng.LOUNGSHIRT,
            itemImage: imagePath.femaleShirt
        },
        {
            id: 6,
            name: eng.HOTTEST,
            description: eng.SPORTSHOES,
            itemImage: imagePath.femaleShirt2
        },
        {
            id: 7,
            name: eng.OFFERENDS,
            description: eng.SPORTSHOES,
            itemImage: imagePath.bride,
            price: eng.PRICE
        },

    ]

    useEffect(() => {
        {
            if (millySecond > 0) {
                const interval = setInterval(() => {
                    setMillySecond(millySecond => millySecond - 1)
                }, 1000)
                return () => clearInterval(interval)
            }
            if (millySecond == 0) {
                setMillySecond(60)
            }
        }
    }, [millySecond]);
    useEffect(() => {
        const interval = setInterval(() => {
            setMinutes(minutes => minutes - 1)
        }, 60000)
        return () => clearInterval(interval)
    }, [minutes]);
    useEffect(() => {
        const interval = setInterval(() => {
            setHour(hour => hour - 1)
        }, 360000)
        return () => clearInterval(interval)
    }, [hour])

    const actions = [
        {
            icon: imagePath.basket,
            text: eng.MYFASHIOn,
            image: imagePath.appleIcn,
            name: "bt_accessibility",
            position: 1
        },
        {
            text: eng.MYSTYLIST,
            icon: imagePath.brand,
            name: "bt_language",
            position: 2
        },
        {
            text: eng.Studio,
            icon: imagePath.diamond,
            name: "bt_room",
            position: 3
        },
        {
            text: eng.EXPLORE,
            icon: imagePath.down,
            name: "bt_videocam",
            position: 4
        }
    ];
    const actionSheetRef = useRef(null);
    const renderBrowsingProductsTwoItems = useCallback(({ item, index }) => {
        return (
            <View style={styles.tagViewStyle}>
                <TouchableOpacity>
                    <ImageBackground resizeMode="stretch" style={styles.priceTageFlatList} source={item.itemImage}>
                        <View style={styles.pricTagView}>
                            <Text style={styles.pricTagText} >{item.name}</Text>
                            <Text style={styles.pricTagText}>{item.description}</Text>
                            <Text style={styles.pricTagTextUnder}>{eng.UNDER}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }, [continueBrowsingData]);
    const renderDataItemProducts = useCallback(({ item, index }) => {
        return (

            <View style={styles.flatlistView}>
                <TouchableOpacity>
                    <View style={styles.flatlistImageView}>
                        <Image style={styles.flatImage} source={item.myImage} />
                    </View>
                    <Text style={styles.flatlistText}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }, [DATA]);
    const continueBrowsingTopBrands = useCallback(({ item, index }) => {
        return (
            <View >
                <TouchableOpacity>
                    <View >
                        <ImageBackground resizeMode="stretch" style={styles.startingPriceFlatListImage} source={item.itemImage}>
                            <Text style={styles.brandTextStyles}>{item.name}</Text>
                            <Text>{item.description}</Text>
                            <Text>{item.price}</Text>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            </View>
        )

    }, [continueBrowsingData]);
    //redux


    return (
        <SafeAreaView style={styles.mainView}>
            <View style={styles.mainView}>
                <View>
                    <HeaderComponent logoImage={imagePath.mmm} myTextOne={eng.BECOME}
                        myTextTwo={eng.INSIDER}
                        myInsiderOnpress={() => alert('working')}
                        textPropsOne={styles.textStyleOne}
                        myIcons1={styles.myIcons}
                        myIcons2={styles.myIcons}
                        myIcons3={styles.myIcons}
                        myIcons4={styles.myIcons}
                        textPropsTwo={styles.myTextInsiderStyle}
                        searchIcone={imagePath.search}
                        bellIcone={imagePath.bell}
                        heartIcone={imagePath.normalHeart}
                        basket={imagePath.basket}
                        searchOnPress={() => navigation.navigate(navigationStrig.SEARCH)}
                        bellOnpress={() => navigation.navigate(navigationStrig.NOTIFICATIONS)}
                        heartOnPress={() => navigation.navigate(navigationStrig.WESHLIST)}
                        basketOnPress={() => navigation.navigate(navigationStrig.BASEKET)}
                    />
                </View>
                <ScrollView>
                    <View style={styles.btnViewStyle}>
                        <ButtonWithLabel
                            textColor={myTxtColor}
                            btnBackgroundColor={myBackgroundColor}
                            buttonStyle={styles.buttonStyle}
                            btnImage={imagePath.parents}
                            buttonTextLabel={eng.FASHION}
                            buttonImageStyle={styles.myImageStyle}
                            btnTextStyle={styles.BtnTextStyle}
                            onPress={() => buttonState()}
                        />
                        <ButtonWithLabel
                            onPress={() => buttonState()}
                            textColor={myTxtOfBeautyColor}
                            btnBackgroundColor={myBackgroundColorOfBeauty}
                            buttonStyle={styles.buttonStyle}
                            btnImage={imagePath.makeup}
                            buttonTextLabel={eng.BEAUTY}
                            buttonImageStyle={styles.myImageStyle}
                            btnTextStyle={styles.BtnTextStyle}
                        />
                    </View>
                    <View>
                        <FlatList
                            horizontal
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            data={DATA}
                            renderItem={renderDataItemProducts}
                        />
                        <View>
                            <Carousel
                                layout={'default'}
                                ref={isCarousel}
                                data={carouselData}
                                renderItem={renderItem}
                                sliderWidth={slider_Width}
                                itemWidth={ITEM_Width}
                                onSnapToItem={index => setIndex(index)}
                            />
                            <Pagination
                                dotsLength={carouselData.length}
                                activeDotIndex={index}
                                carouselRef={isCarousel}
                                dotStyle={{
                                    width: 8,
                                    borderRadius: 5,
                                    marginHorizontal: 0,
                                    backgroundColor: color.sliver
                                }}
                                tappableDots={true}
                                inactiveDotStyle={{
                                    backgroundColor: color.darkSky,
                                    // Define styles for inactive dots here
                                }}
                                inactiveDotOpacity={1}
                                inactiveDotScale={1}
                            />

                            <LottieView
                                resizeMode="contain"
                                style={styles.lottieImageStyle}
                                source={require('./../../assets/image/sale.json')}
                                autoPlay
                                loop />
                            <View style={styles.himeAndHerViewStyle}>
                                <HimAndHerBotton
                                    buttonStyle={styles.bottonStyle}
                                    btnTextStyle={styles.himTextStyle}
                                    btnImage={imagePath.arrowRight}
                                    buttonTextLabel={eng.HIM} />
                                <HimAndHerBotton
                                    buttonStyle={styles.bottonStyle}
                                    btnTextStyle={styles.himTextStyle}
                                    btnImage={imagePath.arrowRight}
                                    buttonTextLabel={eng.HER} />
                            </View>
                            <View>
                                <Text style={styles.ContinueTextStyle}>{eng.CONTINUE}</Text>
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{
                                        paddingRight: moderateScale(5),
                                        paddingHorizontal: moderateScale(5),
                                        paddingBottom: moderateScale(10)
                                    }}
                                    horizontal
                                    data={continueBrowsingData}
                                    keyExtractor={item => item.id}
                                    renderItem={renderBrowsingProductsTwoItems}
                                />
                            </View>
                            <View style={styles.timerView}>
                                <Text style={styles.offerEndTextStyle}>{eng.OFFERENDS}</Text>
                                <View style={styles.timerTextView}>
                                    <Text style={styles.timerTextStyle}>0{hour}h</Text>
                                    <Text style={styles.timerColonStyle}>  :</Text>
                                </View>
                                <View style={styles.timerTextView}>
                                    <Text style={styles.timerTextStyle}>{minutes}m</Text>
                                    <Text style={styles.timerColonStyle}>  :</Text>
                                </View>
                                <Text style={styles.timerTextStyle}>{millySecond}s</Text>
                            </View>
                            <FlatList
                                horizontal
                                scrollEnabled={false}
                                data={continueBrowsingData.slice(4, 6)}
                                keyExtractor={item => item.id}
                                renderItem={renderBrowsingProductsTwoItems}
                            />
                            <Image resizeMode="stretch" style={styles.brandFeatureImage} source={imagePath.brand1} />
                            <View style={styles.startingPriceFlatListView}>
                                <FlatList
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    data={continueBrowsingData}
                                    keyExtractor={item => item.id}
                                    renderItem={continueBrowsingTopBrands}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <FloatingAction
                    color={color.floatingBtnColor}
                    floatingIcon={imagePath.mmm}
                    buttonSize={45}
                    actions={actions}
                    onPressItem={name => {
                        console.log(`selected button: ${name}`);
                    }}
                />

            </View>
        </SafeAreaView>
    )
}
export default Home;