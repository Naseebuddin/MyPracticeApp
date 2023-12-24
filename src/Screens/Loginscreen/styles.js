import { moderateScale, scale, verticalScale } from "react-native-size-matters"
import color from "../../styles/color"

const { StyleSheet } = require("react-native")

export default StyleSheet.create({
    mainView: {
        flex: moderateScale(1),
        backgroundColor: color.white
    },
    backgroundProfileView: {
        backgroundColor: color.profileBackgroundColor,
        height: verticalScale(180),
        flexDirection: 'row',
        flex: 0.21
    },
    profileImageStyle: {
        height: verticalScale(60),
        width: scale(60),
        position: 'absolute',
    },
    profileBackgroundView: {
        borderWidth: moderateScale(0.2),
        borderRadius: moderateScale(5),
        width: scale(100),
        justifyContent: 'center',
        alignItems: 'center',
        height: verticalScale(110),
        marginTop: moderateScale(60),
        backgroundColor: color.white,
        marginLeft: moderateScale(10),

    },
    logigSighnupStyle: {
        marginTop: moderateScale(120),
        height: verticalScale(42),
        // width: scale(190),
        backgroundColor: color.profileButtonColor,
        alignItems: 'center',
        paddingHorizontal: moderateScale(65),
        marginHorizontal: moderateScale(12)

    },

    logigSighnupTextStyle: {
        color: color.white,
        fontSize: moderateScale(12),
        fontWeight: '700',
    },
    containerStyleActionSheet: {
        width: '100%', height: verticalScale(450),
        borderRadius: moderateScale(0)
    },
    actionSheetViewStyle: {
        // flexDirection: 'row',
        marginHorizontal: moderateScale(25),
        marginTop: moderateScale(25),
    },
    actionSheetCloseButtonStyle: {
        width: scale(26),
        height: verticalScale(26),

    },
    actionSheetMyntraIcone: {
        width: scale(46),
        height: verticalScale(46),

    },
    actionSheetLoginSignupView: {
        flexDirection: 'row',
        marginHorizontal: moderateScale(8),
        marginTop: moderateScale(25),
        marginBottom: moderateScale(20)
    },
    actionSheetLoginSignupTextSTyle: {
        fontSize: moderateScale(18),
        marginHorizontal: moderateScale(8),
        fontWeight: 'bold'
    },
    orTextSTyle: {
        fontSize: moderateScale(14),
        marginTop: verticalScale(4),
        fontWeight: '200',
        color: color.darkSilver
    },
    actionSheetLoginSignupTextORSTyle: {
        fontSize: moderateScale(14),
        marginTop: moderateScale(6)
    },
    actionSheetBYContinueTextSTyle: {
        fontSize: moderateScale(11),
        marginLeft: moderateScale(8),
        fontWeight: '300',
        color: color.darkSilver
    },
    havingTroubleTextSTyle: {
        fontSize: moderateScale(11),
        marginLeft: moderateScale(8),
        fontWeight: '400',
        color: color.darkSilver
    },
    actionSheetTermsOfUseTextSTyle: {
        fontSize: moderateScale(11),
        color: color.profileButtonColor,
        fontWeight: 'bold',
    },
    getHelpTextSTyle: {
        fontSize: moderateScale(12),
        color: color.profileButtonColor,
        fontWeight: 'bold',
    },
    actionSheetBYContinueView: {
        flexDirection: 'row',
        marginHorizontal: moderateScale(6),
        marginTop: moderateScale(25),
        marginBottom: moderateScale(20)
    },
    continueButtonStyle: {
        marginTop: moderateScale(30),
        height: verticalScale(45),
        // width: scale(190),
        backgroundColor: color.profileButtonColor,
        alignItems: 'center',
        paddingHorizontal: moderateScale(65),
        marginHorizontal: moderateScale(16),
    },
    emptyView: {
        marginTop: verticalScale(18)
    }
})