import React, { useState, useCallback, useRef, useEffect } from "react";
import { Text, View, SafeAreaView, Dimensions, FlatList, TouchableOpacity, Image, ScrollView, ImageBackground } from "react-native";
import HeaderComponent from "../../Components/HeaderComponent";
import eng from "../../constants/lang/eng";
import imagePath from "../../constants/imagePath";
import Carousel, { Pagination } from "react-native-snap-carousel";
import styles from "./styles";
import ButtonWithLabel from "../../Components/ButtonWithLabel";
import color from "../../styles/color";
import { moderateScale } from "react-native-size-matters";
import HimAndHerBotton from "../../Components/HimAndHerBotton";
export const slider_Width = Dimensions.get('window').width + 5;
export const ITEM_Width = Math.round(slider_Width * 1);
const Fwd = () => {
    const [millySecond, setMillySecond] = useState(1500);
    const [myTxtOfBeautyColor, setMyTxtOfBeautyColor] = useState();
    const [myTxtColor, setMyTextColor] = useState();
    const [myBackgroundColor, setMyBackgroundColor] = useState()
    const [state, setState] = useState(false);
    const isCarousel = useRef(null);
    const [index, setIndex] = useState(0);
    const [myBackgroundColorOfBeauty, setMyBackgroundColorOfBeauty] = useState();

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
    const dataOfZara = [
        {
            id: 1,
            name: eng.SAVEBIG,
            myImage: imagePath.zara1,
            wishlistIcone: imagePath.whiteHeart,
            shareIcone: imagePath.share,
            basket: imagePath.basket,
            likes: imagePath.ic_notify,
            printedDress: eng.TOKYO,
            price: eng.PRICE

        },
        {
            id: 2,
            name: eng.STOCKUP,
            myImage: imagePath.zara2,
            wishlistIcone: imagePath.whiteHeart,
            shareIcone: imagePath.share,
            basket: imagePath.basket,
            likes: imagePath.ic_notify,
            printedDress: eng.TOKYO,
            price: eng.PRICE
        },
        {
            id: 3,
            name: eng.KIDS,
            myImage: imagePath.zara3,
            wishlistIcone: imagePath.whiteHeart,
            shareIcone: imagePath.share,
            basket: imagePath.basket,
            likes: imagePath.ic_notify,
            printedDress: eng.TOKYO,
            price: eng.PRICE
        },
        {
            id: 4,
            name: eng.SAVEBIG,
            myImage: imagePath.zara4,
            wishlistIcone: imagePath.whiteHeart,
            shareIcone: imagePath.share,
            basket: imagePath.basket,
            likes: imagePath.ic_notify,
            printedDress: eng.TOKYO,
            price: eng.PRICE
        },
        {
            id: 5,
            name: eng.STOCKUP,
            myImage: imagePath.zara5,
            wishlistIcone: imagePath.whiteHeart,
            shareIcone: imagePath.share,
            basket: imagePath.basket,
            likes: imagePath.ic_notify,
            printedDress: eng.HERSHEINDBOX
        },
        {
            id: 6,
            name: eng.SAVEBIG,
            myImage: imagePath.zara6,
            wishlistIcone: imagePath.whiteHeart,
            shareIcone: imagePath.share,
            basket: imagePath.basket,
            likes: imagePath.ic_notify,
            printedDress: eng.TOKYO,
            price: eng.PRICE

        },
        {
            id: 7,
            name: eng.STOCKUP,
            myImage: imagePath.zara,
            wishlistIcone: imagePath.whiteHeart,
            shareIcone: imagePath.share,
            basket: imagePath.basket,
            likes: imagePath.ic_notify,
            printedDress: eng.TOKYO,
            price: eng.PRICE
        },

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
    const DATA = [
        {
            id: 1,
            name: eng.MEN,
            myImage: imagePath.zaraman
        },
        {
            id: 2,
            name: eng.WOMEN,
            myImage: imagePath.zarawomen
        },
        {
            id: 3,
            name: eng.KIDS,
            myImage: imagePath.kids
        },
        {
            id: 4,
            name: eng.HOME,
            myImage: imagePath.zara3
        },
        {
            id: 5,
            name: eng.FOOTWEAR,
            myImage: imagePath.footwear
        },
        {
            id: 6,
            name: eng.CATAGORIES,
            myImage: imagePath.zara5
        },
        {
            id: 7,
            name: eng.JEWELLERY,
            myImage: imagePath.jewellery
        },

    ]
    const renderDataItemProducts = useCallback(({ item, index }) => {
        return (
            <View style={styles.flatlistView}>
                <TouchableOpacity>
                    <View style={styles.flatlistImageView}>
                        <Image resizeMode="stretch" style={styles.flatImage} source={item.myImage} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }, [DATA]);
    const renderDataOfZaraProdecut = useCallback(({ item, index }) => {
        return (
            <View style={styles.flatlistView}>
                <TouchableOpacity>
                    <View >
                        <ImageBackground resizeMode="stretch" style={styles.flatImageDataOfZara} source={item.myImage} >
                            <Text style={styles.flatlistTextOfZara}>{item.name}</Text>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }, [dataOfZara]);
    const renderDataOfZaraProdecutInTrending = useCallback(({ item, index }) => {
        return (
            <View style={styles.flatlistMainViewOfZaraInTredning}>
                <View style={styles.flatlistImageViewOfZaraInTredning}>
                    <TouchableOpacity>
                        <ImageBackground resizeMode="stretch" style={styles.flatImageDataOfZaraInTredning} source={item.myImage} >
                        </ImageBackground>
                        <Text style={styles.flatlistTextOfZaraInTredning}>{item.name}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }, [dataOfZara]);
    const renderDataOfZaraProdecutInfkuencerFaves = useCallback(({ item, index }) => {
        return (
            <View style={styles.flatlistMainViewOfZaraInfluencerfaves}>
                <TouchableOpacity>
                    <ImageBackground
                        imageStyle={{ borderRadius: moderateScale(5) }}
                        resizeMode="stretch" style={styles.flatImageDataOfZaraInfluencerfaves} source={item.myImage} >
                        <Text style={styles.flatlistTextOfZaraInfluencerfaves}>{item.name}</Text>
                        <View style={styles.influncerViewIconStyle}>
                            <Image resizeMode="stretch" style={styles.influncerIconStyle} source={item.wishlistIcone} />
                            <Image resizeMode="stretch" style={styles.influncerIconStyle} source={item.shareIcone} />
                            <Image resizeMode="stretch" style={styles.influncerIconStyle} source={item.likes} />
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }, [dataOfZara]);
    const renderDataOfZaraProdecutOfRushHours = useCallback(({ item, index }) => {
        return (
            <View style={styles.flatlistMainViewRushHour}>
                <TouchableOpacity>
                    <ImageBackground
                        imageStyle={{ borderRadius: moderateScale(5) }}
                        resizeMode="stretch" style={styles.imageStyleOfHushHour} source={item.myImage} >
                        <Text style={styles.flatlistTextOfRushHour}>{item.name}</Text>
                        <Text style={styles.flatlistTextOfRushHour}>{item.printedDress}</Text>
                        <Text style={styles.flatlistTextOfRushHourPrice}>{item.price}</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }, [dataOfZara]);
    const renderDataOfThisMonthandWeek = useCallback(({ item, index }) => {
        return (
            <View style={styles.flatlistMainViewThisMonthAndWeek}>
                <TouchableOpacity>
                    <Image
                        imageStyle={{ borderRadius: moderateScale(1) }}
                        resizeMode="stretch" style={styles.flatlisimageStyleOfThisMonthAndWeek} source={item.myImage} />
                    <Text style={styles.flatlistTextOfThisMonthAndWeek}>{item.name}</Text>
                    <Text style={styles.flatlistTextOfThisMonthAndWeek}>{item.printedDress}</Text>
                    <Text style={styles.flatlistTextOfThisMonthAndWeekPrice}>{item.price}</Text>

                </TouchableOpacity>
            </View>
        )
    }, [dataOfZara]);
    const [isSelectItem, setIsSelectItem] = useState({ selectItemData })
    const renderDataOfSelectItem = useCallback(({ item, index }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => myselectItemData(item.id)}>
                    <Text style={{ ...styles.flatlistTextOfSelectitem, borderColor: item.myColor, color: item.myColor }}>{item.item}</Text>
                </TouchableOpacity>
            </View>
        )
    }, [isSelectItem.selectItemData]);
    const carouselData = [{
        id: 1,
        url: imagePath.zara1,
    },
    {
        id: 2,
        url: imagePath.zara2,
    },
    {
        id: 3,
        url: imagePath.zara3,
    },
    {
        id: 4,
        url: imagePath.zara4,
    },
    {
        id: 5,
        url: imagePath.zara5,
    },
    {
        id: 6,
        url: imagePath.zara6,
    }
    ]
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
    useEffect(() => {
        {
            if (millySecond > 1250) {
                const interval = setInterval(() => {
                    setMillySecond(millySecond => millySecond - 50)
                }, 100)
                return () => clearInterval(interval)
            }
            if (millySecond == 1250) {
                setMillySecond(1500)
            }
        }
    }, [millySecond]);

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
    const renderDataOfSelectTheItems = useCallback(({ item, index }) => {
        return (
            <View style={styles.flatlistMainViewOfSelectItem}>
                <TouchableOpacity>
                    <Image
                        imageStyle={{ borderRadius: moderateScale(1) }}
                        resizeMode="stretch" style={styles.flatlisimageStyleOfSelectItem} source={item.myImage} />
                    <Text style={styles.flatlistTextOfSelectItem}>{item.name}</Text>
                    <Text style={styles.flatlistTextOfSelectItem}>{item.printedDress}</Text>
                    <Text style={styles.flatlistTextOfSelectItemPric}>{item.price}</Text>

                </TouchableOpacity>
            </View>
        )
    }, [dataOfZara]);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <ScrollView>
                    <View >
                        <HeaderComponent
                            textPropsOne={styles.textStyleOne}
                            myTextOne={eng.FWD}
                            myIcons1={styles.myIcons}
                            myIcons3={styles.myIcons}
                            myIcons4={styles.myIcons}
                            searchIcone={imagePath.search}
                            heartIcone={imagePath.normalHeart}
                            basket={imagePath.basket}
                        />
                    </View>
                    <View style={styles.btnViewStyle}>
                        <ButtonWithLabel
                            textColor={myTxtColor}
                            btnBackgroundColor={myBackgroundColor}
                            buttonStyle={styles.buttonStyleLeft}
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
                            buttonStyle={styles.buttonStyleRight}
                            btnImage={imagePath.makeup}
                            buttonTextLabel={eng.BEAUTY}
                            buttonImageStyle={styles.myImageStyle}
                            btnTextStyle={styles.BtnTextStyle}
                        />
                    </View>
                    <View>
                        <FlatList
                            keyExtractor={item => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={DATA}
                            renderItem={renderDataItemProducts}
                        />
                        <Image resizeMode="stretch" style={styles.labelOneImageStyling} source={imagePath.label1} />
                        <Carousel
                            autoplay={true}
                            layout={'stack'}
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
                        <Image resizeMode="stretch" style={styles.labelOneImageAfterCarousel} source={imagePath.zara} />
                        <FlatList
                            horizontal
                            scrollEnabled={false}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            data={dataOfZara.slice(0, 2)}
                            renderItem={renderDataOfZaraProdecut}
                        />
                        <Image resizeMode="stretch" style={styles.trandsImageAfterfaltList} source={imagePath.trands} />
                        <View style={styles.marginLeftViewOfFlatlist}>
                            <FlatList
                                horizontal
                                scrollEnabled={true}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                data={dataOfZara}
                                renderItem={renderDataOfZaraProdecutInTrending}
                            />
                        </View>
                        <Text style={styles.influncerTextStyle}>{eng.INFLUNCER}</Text>
                        <View style={styles.marginLeftViewOfFlatlist}>
                            <FlatList
                                horizontal
                                scrollEnabled={true}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                data={dataOfZara}
                                renderItem={renderDataOfZaraProdecutInfkuencerFaves}
                            />
                            <Text style={styles.TextOfRushHour}>{eng.RUSHHOUR}</Text>
                            <Text style={styles.flatlistTextOfDeals}>{eng.DEALS}</Text>
                            <FlatList
                                horizontal
                                scrollEnabled={true}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                data={dataOfZara}
                                renderItem={renderDataOfZaraProdecutOfRushHours}
                            />
                        </View>
                        <ImageBackground resizeMode="stretch" style={styles.imageStyleOfNewandNow} source={imagePath.zara5}>
                            <Text style={{ ...styles.TextStyleOfNewAndNow }}>{eng.NEWANDNOW}</Text>
                            <Text style={styles.TextStyleOfPriceIncrementDecremnet}>{millySecond}+</Text>
                        </ImageBackground>
                        <Text style={styles.stylesaddesText}>{eng.STYLESADDES}</Text>
                        <View style={styles.thismonthViewStyle}>
                            <HimAndHerBotton
                                btnImage={imagePath.arrowRight}
                                buttonStyle={styles.thisMothButtonStyle}
                                btnTextStyle={styles.TextStyleOfThisMonth}
                                buttonTextLabel={eng.THISMONTH} />
                            <HimAndHerBotton
                                btnImage={imagePath.arrowRight}
                                buttonStyle={styles.thisMothButtonStyle}
                                btnTextStyle={styles.TextStyleOfThisWeek}
                                buttonTextLabel={eng.THISWEEK} />
                        </View>
                        <FlatList
                            horizontal
                            scrollEnabled={true}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            data={dataOfZara.slice(1, 6)}
                            renderItem={renderDataOfThisMonthandWeek}
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
                            numColumns={2}
                            scrollEnabled={false}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            data={dataOfZara.slice(1, 6)}
                            renderItem={renderDataOfSelectTheItems}
                        />

                        <ButtonWithLabel
                            btnBackgroundColor={color.btndarkColor}
                            buttonStyle={styles.ViewMoreButtonStyle}
                            textColor={color.white}
                            buttonTextLabel={eng.VIEWMORE}
                            btnTextStyle={styles.viewMoreTextStyle}
                        />
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default Fwd;