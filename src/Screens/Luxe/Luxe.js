import React, { useCallback, useEffect, useRef, useState } from "react";
import { Text, View, SafeAreaView, Image, Dimensions, TouchableOpacity, ImageBackground, FlatList, ScrollView } from "react-native";
import styles from "./styles";
import HeaderComponent from "../../Components/HeaderComponent";
import eng from "../../constants/lang/eng";
import imagePath from "../../constants/imagePath";
import Carousel, { Pagination } from "react-native-snap-carousel";
import color from "../../styles/color";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import actionsOfApis from "../../redux/actions/actionsOfApis";
import { getProductsDescendingApi } from "../../utils/utils";
import TextInputWithLable from "../../Components/TextInputWithLabel";
export const slider_Width = Dimensions.get('window').width + 5;
export const ITEM_Width = Math.round(slider_Width * 1);
const Luxe = () => {
    const isCarousel = useRef(null);
    const [index, setIndex] = useState(0);
    const [apiData, setApiData] = useState();
    const [singleProduct, setSingleProduct] = useState();
    var ApiDataForCarousel = [];
    ApiDataForCarousel = apiData;
    // console.log(ApiDataForCarousel, 'ApiDataForCarousel.image>>>');
    const Get_products = async () => {
        await actionsOfApis.getActionsProductsApi().then((res) => {
            setApiData(res)
        }).catch((error) => {
            // console.log(error, "err");
        })
    }
    const Get_Products_In_Descending = async () => {
        await actionsOfApis.getActionProductsDescendingApi().then((res) => {
            setApiData(res)
            // console.log(apiData, 'DESCENDIN>>>>>>');
        }).catch((error) => {
            // console.log(error, 'error');
        })
    }
    const Get_Product_Of_Single = async () => {
        await actionsOfApis.getActionSingleProdcuts().then((res) => {
            setSingleProduct(res)
            console.log(res);
        }).catch((error) => {
            console.log(error, 'error');
        })
    }
    console.log(singleProduct, 'ssss');
    useEffect(() => {
        Get_products()
        Get_Products_In_Descending()
        Get_Product_Of_Single();
    }, [])
    const dataOfDealsOfTheDay = [
        {
            id: 1,
            dealImage: imagePath.zarawomen,
            itemName: eng.GETSETRESTOCK,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offOne,
            explore: eng.EXPLOREARROW,
        },
        {
            id: 2,
            dealImage: imagePath.zara3,
            itemName: eng.GETSETRESTOCK,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offFive,
            explore: eng.EXPLOREARROW,

        },
        {
            id: 3,
            dealImage: imagePath.zarawomen,
            itemName: eng.GETSETRESTOCK,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offFive,
            explore: eng.EXPLOREARROW,
        },
        {
            id: 4,
            dealImage: imagePath.zara3,
            itemName: eng.GETSETRESTOCK,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offFour,
            explore: eng.EXPLOREARROW,

        },
        {
            id: 5,
            dealImage: imagePath.zarawomen,
            itemName: eng.GETSETRESTOCK,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offOne,
            explore: eng.EXPLOREARROW,
        },
        {
            id: 6,
            dealImage: imagePath.zara3,
            itemName: eng.GETSETRESTOCK,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offTwo,
            explore: eng.EXPLOREARROW,

        },
        {
            id: 7,
            dealImage: imagePath.zarawomen,
            itemName: eng.GETSETRESTOCK,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offThree,
            explore: eng.EXPLOREARROW,
        },
        {
            id: 8,
            dealImage: imagePath.zara3,
            itemName: eng.GETSETRESTOCK,
            deatailOfItem: eng.DRESSES,
            cost: eng.PRICE,
            ItemDiscount: eng.offFour,
            explore: eng.EXPLOREARROW,

        }
    ]
    const renderItemOfDataOfBudgetBuys = useCallback(({ item, index }) => {
        // console.log(item.image, 'image render ---=-');
        return (
            <View style={styles.flatlistViewOfAToZStyle}>
                <TouchableOpacity>
                    <Image
                        resizeMode="stretch" style={styles.flatlistImageOfAToZStyle}
                        source={{ uri: item?.image }} />
                    <Text style={styles.flatlistAToZTextStyle}  >{item?.title.substring(0, 12)}...</Text>
                </TouchableOpacity>
            </View>
        )
    });
    const renderItemOfDataOfBrandsWeLove = ({ item, index }) => {
        return (
            <View style={styles.flatlistViewOfBrandsWeLoveStyle}>
                <TouchableOpacity>
                    <Image
                        resizeMode="stretch" style={styles.flatlistImageOfBrandsWeLoveStyle}
                        source={{ uri: item?.image }} />
                    <Text style={styles.flatlistBrandsWeLoveTextStyle}>{item?.title.substring(5, 14)}</Text>
                </TouchableOpacity>
                <Text style={styles.flatlistBrandsWeLoveTextOfLineStyle}>___________________</Text>
                <View style={styles.exploreViewStyle}>
                    <Text style={styles.flatlistBrandsWeLoveTextOfExploreStyle}>{item?.category}</Text>
                    <Image style={styles.exploreDirectionImageStyle} source={imagePath?.directio} />
                </View>
            </View>
        )
    };
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
            <View >
                <Image
                    resizeMode="center"
                    source={{ uri: item?.image }}
                    style={styles.carouselImageStyle}
                />
                <View style={{ marginTop: -10 }}>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.flatlistViewOFdealsOfDay}>
            <View style={styles.flatlistViewOFdealsOfDay}>
                <View>
                    <HeaderComponent
                        textPropsOne={styles.textStyleOne}
                        myTextOne={eng.MYNTRALUXE}
                        myIcons1={styles.myIcons}
                        myIcons3={styles.myIcons}
                        myIcons4={styles.myIcons}
                        searchIcone={imagePath.search}
                        heartIcone={imagePath.normalHeart}
                        basket={imagePath.basket}
                    />
                </View>
                <ScrollView
                    contentContainerStyle={{ paddingBottom: moderateScale(120), }}
                >
                    <View>
                        <Image resizeMode="stretch" style={styles.imageBackgroundStyle} source={{ uri: singleProduct?.image }} />
                        <View style={styles.budgetBuysViewStyle}>
                            <FlatList
                                horizontal
                                scrollEnabled={true}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                data={apiData}
                                renderItem={renderItemOfDataOfBudgetBuys}
                            />
                        </View>
                        <Carousel
                            autoplay={true}
                            layout={'stack'}
                            ref={isCarousel}
                            data={ApiDataForCarousel}
                            renderItem={renderItem}
                            sliderWidth={slider_Width}
                            itemWidth={ITEM_Width}
                            onSnapToItem={index => setIndex(index)}
                        />
                        <Pagination
                            dotsLength={carouselData?.length}
                            activeDotIndex={index}
                            carouselRef={isCarousel}
                            containerStyle={{ paddingVertical: 10, }}
                            dotStyle={{
                                width: scale(5),
                                height: 5,
                                borderRadius: 5,
                                marginHorizontal: 0,
                                backgroundColor: color.darkSky
                            }}
                            tappableDots={true}
                            inactiveDotStyle={{
                                backgroundColor: color.sliver,
                                // Define styles for inactive dots here
                            }}
                            inactiveDotOpacity={1}
                            inactiveDotScale={1}
                        />
                    </View>
                    <Text style={styles.brandWeLoveTextStyle}>{eng.BRANDWELOVE}</Text>
                    <Text style={styles.flatlistBrandsWeLoveLineStyle}>_________▼_________</Text>
                    <View style={styles.ascendingAndDescending}>
                        <TouchableOpacity onPress={() => Get_products()}>
                            <Text>{eng.ASCENDING}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Get_Products_In_Descending()}>
                            <Text>{eng.DESCENDING}</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        numColumns={2}
                        scrollEnabled={false}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        data={apiData}
                        renderItem={renderItemOfDataOfBrandsWeLove}
                    />
                    <TouchableOpacity >
                        <Image resizeMode="stretch" style={styles.collectiveImageStyle} source={{uri:singleProduct?.image}} />
                        <View style={styles.viewOfTheCollecttiveStyle}>
                            <Text style={styles.theCollectiveTextStyle}>{eng.THECOLLECTIVE}</Text>
                            <View style={styles.exploreALLViewStyle}>
                                <Text style={styles.exploreAllTextStyle}>{eng.EXPLOREALL}</Text>
                                <Image style={styles.exploreDirectionImageStyle} source={imagePath.whiteDirection} />
                            </View>
                        </View>
                    </TouchableOpacity>


                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default Luxe;