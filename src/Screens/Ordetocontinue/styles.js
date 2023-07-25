import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import color from "../../styles/color";
export default StyleSheet.create({
    mainView: {
        flex: moderateScale(1)
    },
    myIcons: {
        width: 30,
        height: 30,
        marginVertical: moderateScale(7),
    },
    textStyleOne: {
        fontWeight: '600',
        marginTop: moderateScale(13),
        fontSize: moderateScale(14),
        fontWeight: '500',
    },
    continueButtonStyle: {
        marginTop: moderateScale(5),
        height: verticalScale(45),
        // width: scale(190),
        backgroundColor: color.profileButtonColor,
        alignItems: 'center',
        paddingHorizontal: moderateScale(65),
        marginHorizontal: moderateScale(8),
        borderRadius: moderateScale(4),
        marginBottom: moderateScale(10)
    },
    chnageOrAddButtonStyle: {
        marginTop: moderateScale(45),
        height: verticalScale(45),
        borderWidth: moderateScale(1),
        backgroundColor: color.profileButtonColor,
        alignItems: 'center',
        paddingHorizontal: moderateScale(65),
        marginHorizontal: moderateScale(8),
        borderRadius: moderateScale(4),
        marginBottom: moderateScale(10)
    },
    logigSighnupTextStyle: {
        fontSize: moderateScale(15),
        fontWeight: '500',
    },
    chnageOraddAddresTextStyle: {
        fontSize: moderateScale(15),
        fontWeight: '600',
    },

    btnViewStyle: {
        borderTopWidth: moderateScale(1),
        borderColor: color.sliver,
        justifyContent: 'flex-end',
        flex: moderateScale(.1),
    },
    itemView: {
        flex: moderateScale(0.85)
    },
    addresstextStyle: {
        fontWeight: '200',
        marginLeft: moderateScale(8),
    },
    phoneNumbertextStyle: {
        fontWeight: '600',
        marginLeft: moderateScale(8),
        marginTop: moderateScale(20)
    },
    deliveryEstimateView: {
        flex: moderateScale(0.6)
    },
    homeDeatailStyleView: {
        borderBottomLeftRadius: moderateScale(1),
        borderTopWidth: moderateScale(1),
        marginTop: moderateScale(20),
        borderColor: color.sliver,
        flex: moderateScale(.2)
    },
    cartImagestyle: {
        width: scale(40),
        height: verticalScale(60),
        marginVertical: moderateScale(9),
        resizeMode: 'stretch',
        marginHorizontal: moderateScale(5),
        marginLeft: moderateScale(12)
    },
    flatlistView: {
        marginTop: moderateScale(1),
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.3,
        borderStyle: "dotted",
        marginBottom: moderateScale(1)

    },
    flatlistTextStyle: {
        fontWeight: '200',
        marginLeft: moderateScale(12)
    },
    estimatedevliveryTextStyle: {
        marginLeft: moderateScale(10),
        fontSize: moderateScale(12),
        color: color.darkSilver,
        marginVertical: moderateScale(3)
    }

})