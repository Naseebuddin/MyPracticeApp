import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
const ButtonWithLabel = ({
    buttonTextLabel,
    buttonStyle,
    buttonImageStyle,
    btnTextStyle,
    btnImage,
    textColor,
    btnBackgroundColor,
    onPress,
}) => {
    return (
        <View style={styles.mainView}>
            <TouchableOpacity onPress={onPress} style={{ ...buttonStyle, ...styles.myBtnStyle, backgroundColor: btnBackgroundColor }}>
                {!!btnImage &&
                    <Image source={btnImage} resizeMode="stretch" style={{ ...buttonImageStyle, ...styles.myImageStyle }} />
                }
                {!!buttonTextLabel &&
                    <Text style={{ ...btnTextStyle, color: textColor }}>{buttonTextLabel}</Text>
                }

            </TouchableOpacity>
        </View>
    )
}
export default React.memo(ButtonWithLabel);

const styles = StyleSheet.create({
    mainView: {

    },
    myBtnStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: moderateScale(4)
    },
    myImageStyle: {
        height: moderateScale(36),
        width: moderateScale(32),

    }
})