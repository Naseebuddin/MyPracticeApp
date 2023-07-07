import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import color from "../../styles/color";
export default StyleSheet.create({

    mainView: {
        flex: moderateScale(1)
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
    everydayImageBacgroundViewStyle: {
        flexDirection: 'row',
        marginTop: moderateScale(12),
    },
    TextOfeverydayStyle: {
        fontSize: moderateScale(14),
        color: color.black,

        marginHorizontal: moderateScale(5)


    },
    everydayButtonImageStyle: {

        paddingHorizontal: moderateScale(8),


    },
    myImageBackgroundStyle: {
        width: scale(180),
        height: verticalScale(210)
    },
    myImageBackgroundViewStyle: {
        alignSelf: 'flex-end',
        paddingVertical: moderateScale(2),
        backgroundColor: color.insiderYellow,
        paddingHorizontal: moderateScale(6),
        borderRadius: moderateScale(5),
        marginBottom: moderateScale(2)
    },
    catogoriesTextStyle: {
        fontWeight: 'bold',
        marginTop: moderateScale(25),
        marginLeft: moderateScale(12)
    },
    getTextStyle: {
        fontWeight: '300',
        marginLeft: moderateScale(12)
    },
    flatlistViewOdata: {
        alignItems: 'center',
        marginHorizontal: moderateScale(1),
        marginTop: moderateScale(15),
        marginLeft: moderateScale(4),
    },
    flatlistDataOfImageView: {
        alignItems: 'center',
        width: scale(60),
        height: verticalScale(60),
        backgroundColor: color.sliver,
        borderRadius: moderateScale(100),
        marginLeft: moderateScale(2),
    },
    flatlistDataOfImage: {
        width: scale(52),
        height: verticalScale(52),
        marginTop: 4,
        // position:'absolute',
    },
    flatlistDataOfTextStyle: {
        fontSize: moderateScale(14),
        marginTop: moderateScale(2),
        alignSelf: 'center',
        marginLeft: moderateScale(1)
    },
    dealImageStyle: {
        width: scale(72),
        height: verticalScale(72),
        alignSelf: 'center',
        marginTop: moderateScale(12),
        marginLeft: moderateScale(1)
    },
    flatlistViewOFdealsOfDay: {
        alignSelf: 'center',
        marginHorizontal: moderateScale(2),
        marginTop: moderateScale(12),
        marginLeft: moderateScale(5),
        marginBottom: moderateScale(15)
    },
    flatlistImageOfDealsOFdayStyle: {
        width: scale(160),
        marginLeft: moderateScale(5),
        justifyContent: 'flex-end',
        height: verticalScale(212),
    },
    ImageBackgroundViewStyle: {
        marginTop: moderateScale(8)
    },
    flatlistDealOfDayTextStyle: {
        color: color.white,
        fontWeight: 'bold',
        fontSize: moderateScale(14),
        justifyContent: 'flex-end',
        marginLeft: moderateScale(8)
    },
    flatlistDealOfDayTextPriceStyle: {
        color: color.white,
        fontWeight: '400',
        fontSize: moderateScale(14),
        justifyContent: 'flex-end',
        marginLeft: moderateScale(8),
        marginBottom: moderateScale(8)
    },
    ImageBackgroundReduisMode: {
        borderRadius: moderateScale(6)
    },
    flatlistViewOFBudgetBuysStyle: {
        alignSelf: 'center',
        marginHorizontal: moderateScale(2),
        marginTop: moderateScale(6),
        marginLeft: moderateScale(2),
        marginBottom: moderateScale(1)
    },
    flatlistImageOfBudgetBuysStyle: {
        width: scale(81),

        justifyContent: 'flex-end',
        height: verticalScale(140),
    },
    ImageBackgroundReduisModeOfBudgetBuys: {
        borderRadius: moderateScale(8)
    },
    flatlistBudgetBuysTextStyle: {
        color: color.white,
        fontWeight: 'bold',
        fontSize: moderateScale(10),
        justifyContent: 'flex-end',
        marginLeft: moderateScale(5),
        alignSelf: 'center'
    },
    flatlistBudgetOfDaysTextPriceStyle: {
        color: color.white,
        fontWeight: '600',
        fontSize: moderateScale(10),
        justifyContent: 'flex-end',
        marginLeft: moderateScale(8),
        marginBottom: moderateScale(4),
        alignSelf: 'center'
    },
    budgetBuysTextStyle: {
        fontWeight: 'bold',
        marginTop: moderateScale(12),
        marginLeft: moderateScale(5)
    },
    budgetBuysViewStyle: {
        paddingLeft: moderateScale(6),
        backgroundColor: color.ligthYellow
    },
    trendingEssentialViewStyle: {
        paddingLeft: moderateScale(6),
        backgroundColor: color.ligthYellow
    },
    flatlistImageOfTrendingEssentialStyle: {
        width: scale(145),
        justifyContent: 'flex-end',
        height: verticalScale(210),
    },
    flatlistViewOFTrendingEssentialStyle: {
        alignSelf: 'center',
        marginHorizontal: moderateScale(2),
        marginTop: moderateScale(6),
        marginLeft: moderateScale(8),
        marginBottom: moderateScale(15)
    },
    flatlistTrendingEssentialStyle: {
        color: color.insiderYellow,
        fontWeight: 'bold',
        fontSize: moderateScale(18),
        justifyContent: 'flex-end',
        marginLeft: moderateScale(6),
        marginBottom: moderateScale(2)
    },
    bestSelleerViewStyle: {
        color: color.creame,
        backgroundColor: color.creame
    },
    bestSellerImageStyle: {
        height: verticalScale(40),
        width: scale(140),
        alignSelf: 'center',
        marginTop: moderateScale(12)
    },
    flatlistTextOfSelectitem: {
        fontSize: moderateScale(14),
        color: color.black,
        marginTop: moderateScale(20),
        marginHorizontal: moderateScale(8),
        borderRadius: moderateScale(14),
        borderWidth: moderateScale(.5),
        paddingHorizontal: moderateScale(12),
        paddingVertical: moderateScale(5),
        marginBottom: moderateScale(4)
    },
    flatlistViewOFBestSelllerStyle: {
        alignSelf: 'center',
        marginHorizontal: moderateScale(2),
        marginTop: moderateScale(10),
        marginLeft: moderateScale(2),
        marginBottom: moderateScale(15),
        backgroundColor: color.white,

    },
    flatlistTextOfBestSellerStyle: {
        color: color.black,
        fontWeight: '600',
        fontSize: moderateScale(12),
        justifyContent: 'flex-end',
        marginLeft: moderateScale(6),
        marginBottom: moderateScale(2),
        marginTop: moderateScale(1)
    },
    flatlistImageOfBestSellerStyle: {
        width: scale(140),
        height: verticalScale(210),
        margin: moderateScale(1),
        borderWidth: moderateScale(1),
        borderColor: color.white,
    },
    flatlistTextBestSelleDescriptionStyle: {
        color: color.sliver,
        fontWeight: 'bold',
        fontSize: moderateScale(12),
        justifyContent: 'flex-end',
        marginLeft: moderateScale(6),
        marginBottom: moderateScale(2)
    },
    flatlistTextOfBestSellerOFFLabelStyle: {
        color: color.white,
        fontSize: moderateScale(12),
        backgroundColor: color.offColor,
        width: moderateScale(45),
        paddingLeft: moderateScale(6),
        marginTop: moderateScale(5)
    },
    flatlistTextOfBestSellerBottomOFFLabelStyle: {
        color: color.mREd,
        fontSize: moderateScale(12),
        width: moderateScale(45),
        paddingLeft: moderateScale(6),
        marginTop: moderateScale(5),
        paddingBottom: moderateScale(4)
    },
    bestSellerViewStyle: {
        flexDirection: 'row',
    },
    flatlistHeartIconeOfBestSellerStyle: {
        width: scale(20),
        height: verticalScale(20),
    },
    flatlistHeartIconeOfBestSellerBtnStyle: {
        margin: moderateScale(10),
        marginLeft: moderateScale(35)
    },
    ViewMoreButtonStyle: {
        height: verticalScale(20),
        width:scale(20),
        backgroundColor: color.GreenMix,
        alignItems: 'center',
        marginHorizontal: moderateScale(12),
        borderRadius:moderateScale(5),
    },
    viewMoreTextStyle: {
        color: color.white,
        fontSize: moderateScale(12),
        fontWeight: '700',
    },
    flatlistTextIDONTKNOWStyle: {
        color:color.black,
        fontWeight: '300',
        fontSize: moderateScale(10),
        marginHorizontal:moderateScale(15),
        alignSelf:'center',
        marginLeft: moderateScale(6),
        marginBottom: moderateScale(2),
        marginTop:moderateScale(15),
    },

})
