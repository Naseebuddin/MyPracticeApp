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
        marginHorizontal:moderateScale(5)
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
})