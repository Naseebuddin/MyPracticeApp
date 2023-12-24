import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import color from "../../styles/color";
export default StyleSheet.create({
    mainView: {
        flex: 1
    },
    // headerView: {
    //     flex: .1
    // },
    textStyleOne: {
        marginLeft: moderateScale(5),
        marginTop: moderateScale(6),
        fontSize: moderateScale(10),
        marginTop: moderateScale(10),
    },
    myTextInsiderStyle: {
        fontSize: moderateScale(14),
        marginTop: moderateScale(4),
        color: color.insiderYellow,
        marginLeft: moderateScale(-44)
    },
    myIcons: {
        width: 30,
        height: 30,
        margin: moderateScale(7)
    },
    myImageStyle: {
        marginBottom: moderateScale(-1.5)

    },
    btnViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(5),
        marginTop: moderateScale(12),
        
    },
    BtnTextStyle: {
        
        marginBottom: moderateScale(2),
        fontSize: moderateScale(14),
        fontWeight: '800',
        marginLeft: moderateScale(4),
    },
    buttonStyle:
    {
        borderWidth:moderateScale(1),
        borderRadius: moderateScale(20),
        width: moderateScale(170)
    },
    flatlistView: {
        alignItems: 'center',
        marginHorizontal: moderateScale(5),
        marginTop: moderateScale(15),
        marginLeft: moderateScale(10),
    },
    flatImage: {
        width: scale(52),
        height: verticalScale(52),
        marginTop: 12,
    },
    flatlistText: {
        fontSize: moderateScale(14),
        marginTop: moderateScale(2),
        alignSelf: 'center',
        marginLeft: moderateScale(5)
    },
    flatlistImageView: {
        alignItems: 'center',
        width: scale(70),
        height: verticalScale(70),
        backgroundColor: color.waterSky,
        borderRadius: moderateScale(100),
        marginLeft: moderateScale(10),
    },
    carouselView: {
        marginTop: moderateScale(20)
    },
    carouselImageStyle: {
        width: 380,
        height: 60,
    },
    lottieImageStyle: {
        marginTop: moderateScale(-5),
        height: 190,
    },
    himTextStyle: {
        color: color.white,
        marginHorizontal: moderateScale(5),
        marginVertical: moderateScale(1)
    },
    bottonStyle: {
        marginTop: moderateScale(-50)
    },
    himeAndHerViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(60)
    },
    continueFlatListView: {
        marginTop: moderateScale(8),
        alignItems: 'center',
        borderWidth: moderateScale(.3),
        marginHorizontal: moderateScale(5),
        padding: moderateScale(2),

    },
    continueFlatListImageStyle: {
        width: scale(130),
        height: verticalScale(140),
    },
    continueFlatListText: {
        fontWeight: 'bold',
        marginTop: moderateScale(6)
    },
    ContinueTextStyle: {
        fontWeight: '700',
        marginTop: moderateScale(12),
        marginHorizontal: moderateScale(12),
    },
    timerView: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    timerTextStyle: {
        marginHorizontal: moderateScale(1),
        backgroundColor: color.ligthOrange,
        color: color.orange,
        // padding: moderateScale(2),
        fontWeight: 'bold',
        borderWidth: moderateScale(0.1)
    },
    offerEndTextStyle: {
        // marginTop: moderateScale(5),
        marginHorizontal: moderateScale(5)
    },
    timerTextView: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    timerColonStyle: {
        // marginTop: moderateScale(5),
        marginRight: moderateScale(2)
    },
    tagViewStyle: {
        alignSelf: 'center'
    },
    priceTageFlatList: {
        width: scale(165),
        height: verticalScale(190),
        marginHorizontal: moderateScale(5),
        marginTop: moderateScale(10)
    },
    pricTagView: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    pricTagText: {
        color: color.white,
        marginHorizontal: moderateScale(5),
        fontWeight: 'bold',
    },
    pricTagTextUnder: {
        color: color.brown,
        marginHorizontal: moderateScale(5),
        fontWeight: 'bold',
    },
    brandFeatureImage: {
        marginTop: moderateScale(15),
        width: scale(350),
        height: verticalScale(60)
    },
    startingPriceFlatListView: {
        backgroundColor: color.skyColor,
        height: verticalScale(260),
        paddingLeft: moderateScale(12),
        marginTop: moderateScale(10),
    },
    startingPriceFlatListImage: {
        width: scale(180),
        alignItems: 'center',
        height: verticalScale(240),
        marginHorizontal: moderateScale(5),
    },
    brandTextStyles: {
        marginTop: moderateScale(180),

    },
   
})
