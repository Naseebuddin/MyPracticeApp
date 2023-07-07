import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
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
    imageBackgroundStyle: {
        width: scale(350),
        height: verticalScale(160)
    },
    flatlistViewOfAToZStyle: {
        alignSelf: 'center',
        marginHorizontal: moderateScale(12),
        marginTop: moderateScale(6),
        marginLeft: moderateScale(2),
        marginBottom: moderateScale(1)
    },
    ImageBackgroundReduisModeOfAToZ: {
        borderRadius: moderateScale(8)
    },
    flatlistImageOfAToZStyle: {
        width: scale(60),
        justifyContent: 'flex-end',
        height: verticalScale(70),
    },
    flatlistAToZTextStyle: {
        color: color.black,
        fontWeight: '200',
        fontSize: moderateScale(14),
        marginLeft: moderateScale(1),
        alignSelf: 'center',
        marginTop: moderateScale(3)
    },
    budgetBuysViewStyle: {
        paddingLeft: moderateScale(8),
        backgroundColor: color.ligthYellow
    },
    carouselImageStyle: {
        width: scale(320),
        height: verticalScale(280),
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(20),
    },
    brandWeLoveTextStyle: {
        color: color.black,
        fontWeight: '600',
        fontStyle: 'italic',
        letterSpacing: moderateScale(3),
        fontSize: moderateScale(24),
        marginLeft: moderateScale(1),
        alignSelf: 'center',
        marginTop: moderateScale(4)
    },
    flatlistViewOfBrandsWeLoveStyle: {
        alignSelf: 'center',
        marginHorizontal: moderateScale(12),
        marginTop: moderateScale(6),
        marginLeft: moderateScale(20),
        marginBottom: moderateScale(1),
        alignContent: 'center'
    },
    flatlistImageOfBrandsWeLoveStyle: {
        width: scale(140),
        justifyContent: 'flex-end',
        height: verticalScale(190),

    },
    flatlistBrandsWeLoveTextStyle: {
        color: color.mREd,
        fontWeight: 'bold',
        fontSize: moderateScale(18),
        // marginLeft: moderateScale(1),
        textTransform: 'uppercase',
        marginTop: moderateScale(6)
    },
    flatlistBrandsWeLoveTextOfLineStyle: {
        color: color.black,
        fontWeight: '100',
        // fontSize: moderateScale(14),
        marginLeft: moderateScale(-5),
        alignSelf: 'center',

    },
    flatlistBrandsWeLoveLineStyle: {
        color: color.insiderYellow,
        fontWeight: '300',
        // fontSize: moderateScale(14),
        marginLeft: moderateScale(1),
        alignSelf: 'center',
        marginTop: moderateScale(-5)
    },
    flatlistBrandsWeLoveTextOfExploreStyle: {
        color: color.black,
        fontWeight: '100',
        // fontSize: moderateScale(14),
        marginLeft: moderateScale(2),
    },
    exploreViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    exploreDirectionImageStyle: {
        width: scale(20),
        height: verticalScale(20),
    },
    viewOfTheCollecttiveStyle: {
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: color.black,
        marginBottom: moderateScale(1),
        width: scale(325),
        marginTop: moderateScale(-1),

    },
    theCollectiveTextStyle: {
        color: color.white,
        fontWeight: '400',
        paddingTop: moderateScale(10),
        letterSpacing: moderateScale(3),
        fontSize: moderateScale(20),
        marginLeft: moderateScale(2),
    },
    exploreAllTextStyle: {
        color: color.white,
        fontWeight: '400',
        fontSize: moderateScale(14),
        marginLeft: moderateScale(2),
        paddingBottom: moderateScale(12)
    },
    exploreALLViewStyle: {
        flexDirection: 'row',
    },
    collectiveImageStyle: {
        width: scale(325),
        alignSelf: 'center',
        marginTop: moderateScale(15),
        justifyContent: 'flex-end',
        height: verticalScale(240),

    },
})
