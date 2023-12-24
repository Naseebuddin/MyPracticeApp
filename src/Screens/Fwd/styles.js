import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale, scale, verticalScale } from "react-native-size-matters";
import color from "../../styles/color";
export default StyleSheet.create({

    mainView: {
        marginTop: moderateScale(12)
    },
    textStyleOne: {
        fontWeight: '600',
        marginTop: moderateScale(8),
        marginLeft: moderateScale(-22),
        marginTop: moderateScale(15),
        fontSize: moderateScale(14),
        fontWeight: '500'
    },
    myIcons: {
        width: 30,
        height: 30,
        margin: moderateScale(7)
    },
    btnViewStyle: {
        flexDirection: 'row',
        marginHorizontal: moderateScale(8),
        marginTop: moderateScale(12),
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(20),
        backgroundColor: 'color.black',

    },
    BtnTextStyle: {
        marginBottom: moderateScale(2),
        fontSize: moderateScale(14),
        fontWeight: '800',
        marginLeft: moderateScale(4),
    },
    buttonStyleLeft:
    {
        zIndex: 1,
        borderRadius: moderateScale(20),
        width: moderateScale(180)
    },
    buttonStyleRight:
    {
        position: 'absolute',
        zIndex: 1,
        marginLeft: (-28),
        borderRadius: moderateScale(22),
        width: moderateScale(191)
    },
    flatlistView: {
        alignItems: 'center',
        // marginHorizontal: moderateScale(1),
        marginTop: moderateScale(15),
        marginLeft: moderateScale(6),
    },
    flatImage: {
        width: scale(72),
        height: verticalScale(110),
        marginTop: 12,
    },
    flatlistText: {
        fontSize: moderateScale(14),
        marginTop: moderateScale(12),
        alignSelf: 'center',
        marginLeft: moderateScale(5)
    },
    flatlistImageView: {
        alignItems: 'center',
        width: scale(74),
        height: verticalScale(122),
        backgroundColor: color.ligthYellow,
        borderRadius: moderateScale(1),
    },
    labelOneImageStyling: {
        width: 370,
        marginHorizontal: moderateScale(1),
        height: 50,
        marginTop: moderateScale(15)
    },
    carouselImageStyle: {
        width: scale(320),
        height: verticalScale(270),
        marginHorizontal: moderateScale(15)
    },
    labelOneImageAfterCarousel: {
        width: scale(325),
        marginHorizontal: moderateScale(12),
        height: 100,
        borderRadius: moderateScale(10),
        marginTop: moderateScale(15)
    },
    flatImageDataOfZara: {
        width: scale(150),
        height: verticalScale(270),
        marginTop: 6,

        justifyContent: 'flex-end',
        borderWidth: moderateScale(.25),
        marginHorizontal: moderateScale(3)
    },
    flatlistTextOfZara: {
        fontSize: moderateScale(20),
        paddingHorizontal: moderateScale(8),
        backgroundColor: color.black,
        color: color.white,
        fontWeight: 'bold'

    },

    trandsImageAfterfaltList: {
        width: scale(345),
        height: 100,
        marginTop: moderateScale(20)
    },
    flatImageDataOfZaraInTredning: {
        width: scale(180),
        alignSelf: 'center',
        height: verticalScale(272),
        // justifyContent: 'flex-end',
        marginHorizontal: moderateScale(1)
    },
    flatlistTextOfZaraInTredning: {
        fontSize: moderateScale(20),
        paddingHorizontal: moderateScale(22),
        backgroundColor: color.black,
        color: color.white,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        width: scale(180)
    },
    flatlistImageViewOfZaraInTredning: {
        alignItems: 'center',
        backgroundColor: color.mREd,
        width: scale(180),
        height: verticalScale(300),
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(1),
        marginHorizontal: moderateScale(2)
    },
    flatlistMainViewOfZaraInTredning: {
        alignItems: 'center',
        width: scale(200),
        backgroundColor: color.mREd,
        marginTop: moderateScale(15),
        marginLeft: moderateScale(8),

    },
    influncerTextStyle: {
        fontSize: moderateScale(14),
        marginTop: moderateScale(12),
        marginLeft: moderateScale(18),
        fontWeight: '600',
    },
    marginLeftViewOfFlatlist: {
        marginLeft: moderateScale(10)
    },

    flatlistMainViewOfZaraInfluencerfaves: {
        marginTop: moderateScale(15),
        marginLeft: moderateScale(15),
    },
    flatlistTextOfZaraInfluencerfaves: {
        fontSize: moderateScale(20),
        color: color.white,
        fontWeight: 'bold',
        alignSelf: 'center',
        width: scale(180),
    },
    flatImageDataOfZaraInfluencerfaves: {
        width: scale(190),
        height: verticalScale(160),
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    influncerViewIconStyle: {
        alignItems: 'flex-end',
        flexDirection: 'row',

    },
    influncerIconStyle: {
        width: scale(28),
        height: verticalScale(28),
        marginHorizontal: moderateScale(5)
    },
    TextOfRushHour: {
        fontSize: moderateScale(24),
        color: color.black,
        fontWeight: '900',
        alignSelf: 'center',
        marginTop: moderateScale(18),

    },
    flatlistTextOfDeals: {
        fontSize: moderateScale(22),
        alignSelf: 'center',
        marginTop: moderateScale(1),
        letterSpacing: 4,
    },
    imageStyleOfHushHour: {
        width: scale(135),
        height: verticalScale(210),
        justifyContent: 'flex-end',
    },
    flatlistMainViewRushHour: {
        marginTop: moderateScale(8),
        marginLeft: moderateScale(15),
    },
    flatlistTextOfRushHour: {
        fontSize: moderateScale(14),
        color: color.white,
        marginHorizontal: moderateScale(6),

    },
    flatlistTextOfRushHourPrice: {
        fontSize: moderateScale(14),
        color: color.darkgreen,
        marginHorizontal: moderateScale(6),
    },
    imageStyleOfNewandNow: {
        width: scale(350),
        marginTop: moderateScale(25),
        height: verticalScale(220),
        // alignContent: 'flex-end',
        justifyContent: 'flex-end',

    },
    TextStyleOfNewAndNow: {
        fontSize: moderateScale(24),
        color: color.black,
        fontWeight: '900',
        // alignSelf: 'flex-end',
        justifyContent: 'center',
        alignSelf: 'center',

    },
    TextStyleOfPriceIncrementDecremnet: {
        fontSize: moderateScale(52),
        color: color.insiderYellow,
        fontWeight: '900',
        alignSelf: 'flex-end',
        alignSelf: 'center',
    },
    stylesaddesText: {
        fontSize: moderateScale(20),
        color: color.black,
        alignSelf: 'center',
        marginTop: moderateScale(5),
        fontWeight: '900',
    },
    TextStyleOfThisMonth: {
        fontSize: moderateScale(14),
        color: color.white,
        marginHorizontal: moderateScale(8),
        fontWeight: '600',
    },
    TextStyleOfThisWeek: {
        fontSize: moderateScale(14),
        color: color.white,
        marginHorizontal: moderateScale(8),
        fontWeight: '600',
    },
    thismonthViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: moderateScale(8),
        borderRadius: moderateScale(10)
    },
    thisMothButtonStyle: {
        width: scale(140),
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(4),
        marginHorizontal: moderateVerticalScale(12)
    },
    flatlistMainViewThisMonthAndWeek: {
        marginTop: moderateScale(8),
        marginLeft: moderateScale(15),
        height: moderateScale(270),
        borderWidth: moderateScale(0.25)
    },
    flatlistTextOfThisMonthAndWeek: {
        fontSize: moderateScale(14),
        color: color.black,
        marginTop: moderateScale(5),
        marginHorizontal: moderateScale(6),

    },
    flatlistTextOfThisMonthAndWeekPrice: {
        fontSize: moderateScale(14),
        color: color.darkgreen,
        marginHorizontal: moderateScale(6),
    },
    flatlisimageStyleOfThisMonthAndWeek: {
        width: scale(150),
        height: verticalScale(210),
        justifyContent: 'flex-end',
    },
    flatlistTextOfSelectitem: {
        fontSize: moderateScale(14),
        color: color.black,
        marginTop: moderateScale(10),
        marginHorizontal: moderateScale(8),
        borderRadius:moderateScale(14),
        borderWidth:moderateScale(.5),
        paddingHorizontal:moderateScale(12),
        paddingVertical:moderateScale(5),
        marginBottom:moderateScale(4)
        

    },
    flatlistMainViewOfSelectItem: {
        marginTop: moderateScale(8),
        marginLeft: moderateScale(0),
        height: moderateScale(280),
        marginHorizontal:moderateScale(1)
    },
    flatlistTextOfSelectItem: {
        fontSize: moderateScale(14),
        color: color.black,
        marginTop: moderateScale(5),
        marginHorizontal: moderateScale(6),

    },
    flatlistTextOfSelectItemPric: {
        fontSize: moderateScale(14),
        color: color.darkgreen,
        marginHorizontal: moderateScale(6),
    },
    flatlisimageStyleOfSelectItem: {
        width: scale(180),
        height: verticalScale(210),
        justifyContent: 'flex-end',
    },
    ViewMoreButtonStyle: {
        height: verticalScale(42),
        backgroundColor: color.GreenMix,
        alignItems: 'center',
        marginHorizontal: moderateScale(12),
        borderRadius:moderateScale(5)
    },
    viewMoreTextStyle: {
        color: color.white,
        fontSize: moderateScale(12),
        fontWeight: '700',
    },






})
