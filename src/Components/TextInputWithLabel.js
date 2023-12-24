import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";
import eng from "../constants/lang/eng";
import imagePath from "../constants/imagePath";
import color from "../styles/color";

const TextInputWithLable = ({

    keyboardType,
    myTextShow,
    onChangeText,
    value,
    countryCOde,
    movePlaceHolder,
    placeholder,
    secureTextEntry
}) => {
    return (
        <View>
              {!!myTextShow &&
            <View style={{ ...styles.labelContainer, backgroundColor: myTextShow ? color.white : null, }}>
              
                    <Text style={styles.label}>{myTextShow ? movePlaceHolder : null}</Text>
              
            </View>
              }
            <View style={{ ...styles.mainView }}>
                {!!countryCOde &&
                    <Text style={styles.textStyle}>{countryCOde}</Text>
                }
                {!!
                    { onChangeText, value, placeholder } &&
                    <TextInput
                    secureTextEntry={secureTextEntry}
                        value={value}
                        onChangeText={onChangeText}
                        style={styles.TextInputStyle}
                        keyboardType={keyboardType}
                        placeholder={placeholder} />
                }
            </View>
        </View>
    )
}
export default TextInputWithLable;
const styles = StyleSheet.create({
    mainView: {
        flexDirection: "row",
        borderWidth: moderateScale(0.25),
        borderRadius: moderateScale(4),
        marginHorizontal: moderateScale(15),
        padding: moderateScale(0)
    },
    startIconeStye: {
        width: 7,
        height: 7,
        margin: moderateScale(1),
    },
    TextInputStyle: {
        marginLeft: moderateScale(8),
        height:scale(40),
        width:scale(310),
        paddingVertical: moderateScale(0),
        zIndex: 0,
    },
    textStyle: {
        fontSize: moderateScale(14),
        fontWeight: '200',
        paddingVertical: moderateScale(10),
        marginLeft:moderateScale(4)
    },
    label: {

        fontSize: moderateScale(12),
        backgroundColor: color.white,
    },
    labelContainer: {
        backgroundColor: "white",
        paddingHorizontal: moderateScale(5),
        zIndex: 1,
        shadowColor: "white",
        position: "absolute",
        top: -12,
        marginLeft: moderateScale(60),
    },

})