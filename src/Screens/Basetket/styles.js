import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import color from "../../styles/color";
export default StyleSheet.create({

    mainView: {
        flex: moderateScale(1)
    },
    textStyleOne: {
        fontWeight: '600',
        marginTop: moderateScale(13),
        fontSize: moderateScale(14),
        fontWeight: '500',
    },
    myIcons: {
        width: 30,
        height: 30,
        marginVertical: moderateScale(7),
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
    qtyTextStyle: {
        fontWeight: '500',
        marginLeft: moderateScale(4),
        backgroundColor: color.sliver,
        paddingVertical: moderateScale(3),
        paddingHorizontal: moderateScale(8)
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
    itemSelectTextHeaderStyle: {
        fontSize: moderateScale(14),
        marginVertical: moderateScale(5),
        marginHorizontal: moderateScale(12)
    },
    ietmsSelectViewStyle: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: moderateScale(5)
    },
    ietmsQtyandSizeViewStyle: {
        flexDirection: 'row',
        padding: moderateScale(8),
        backgroundColor: color.creame,
        width: scale(220)
    },
    flatlistViewOFTextView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginRight: moderateScale(0),
        paddingTop: moderateScale(15)
    },
    flatlistViewOFdealsOfDay: {
        height: verticalScale(200),
        width: '100%',
        backgroundColor: color.white,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flex: moderateScale(1),
        marginTop: moderateScale(6),
        marginBottom: moderateScale(3)
    },
    flatlistViewOFItems: {
        // alignSelf: 'center',
        backgroundColor: color.white,
        marginHorizontal: moderateScale(2),
        marginTop: moderateScale(6),
        marginLeft: moderateScale(5),
        marginBottom: moderateScale(3),
        flex: moderateScale(0.7)
    },
    flatlistImageOfDealsOFdayStyle: {
        width: scale(95),
        marginLeft: moderateScale(5),
        marginTop: moderateScale(14),
        height: verticalScale(145),
        margin: moderateScale(8)
    },

    flatlistDealOfDayTextStyle: {
        color: color.black,
        fontWeight: 'bold',
        fontSize: moderateScale(14),
        marginHorizontal: moderateScale(0)
    },
    flatlistDeleltItemStyle: {
        color: color.black,
        fontWeight: 'bold',
        fontSize: moderateScale(14),

    },
    flatlistDealOfDayTextPriceStyle: {
        color: color.black,
        fontWeight: '400',
        fontSize: moderateScale(14),
    },


    itemView: {
        flex: moderateScale(0.9)
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
    emptyViewStyle: {
        backgroundColor: color.ligthOrange
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

    counterStyle: {
        alignSelf: 'center',
        marginLeft: moderateScale(6),
        marginBottom: moderateScale(2),
        marginTop: moderateScale(15),
    },
    continueButtonStyle: {
        marginTop: moderateScale(5),
        height: verticalScale(45),
        // width: scale(190),
        backgroundColor: color.profileButtonColor,
        alignItems: 'center',
        paddingHorizontal: moderateScale(65),
        marginHorizontal: moderateScale(8),
        borderRadius: moderateScale(4)
    },
    counterTextStyle: {
        color: color.black,
        alignSelf: 'center',
        fontSize: moderateScale(14),
        paddingVertical: moderateScale(2)
    },
    btnViewStyle: {
        justifyContent: 'flex-end',
        flex: moderateScale(0.2),
    },
    logigSighnupTextStyle: {
        color: color.white,
        fontSize: moderateScale(15),
        fontWeight: 'bold',
    },
    actionSheetViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: moderateScale(25),
        alignItems: 'center',
   
    },
    actionSheetSelectQuantityViewStyle: {
        flexDirection: 'row',
        // alignSelf: 'center',
        justifyContent:'space-between',
        backgroundColor:color.GreenMix,
        width:'100%',
        paddingHorizontal:moderateScale(14),
    
    },
    actionSheetSelectquantityTextStyle: {
        fontSize: moderateScale(15),
        fontWeight: 'bold',
    },

})
