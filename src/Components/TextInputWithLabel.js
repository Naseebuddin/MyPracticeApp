import React,{useState}from "react";
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
}) => {


    return (
        <View>
            <View style={{...styles.labelContainer,backgroundColor: myTextShow ? color.white : null,}}>
                <Text style={styles.label}>{myTextShow ? eng.MOBILENO : null}</Text>
            </View>
            <View style={{ ...styles.mainView }}>
                <Text style={styles.textStyle}>{eng.CODE}</Text>
                <TextInput 
                
                value={value}
                onChangeText={onChangeText}
                style={styles.TextInputStyle}
                    keyboardType={keyboardType}
                    placeholder={eng.MOBILENO} />
            </View>
        </View>
    )
}
export default TextInputWithLable;
const styles = StyleSheet.create({
    mainView: {
        flexDirection: "row",
        borderWidth: moderateScale(0.25),
        borderRadius: moderateScale(2),
        marginHorizontal: moderateScale(15),
        padding: moderateScale(15)
    },
    startIconeStye: {
        width: 7,
        height: 7,
        margin: moderateScale(1),
    },
    TextInputStyle: {
        marginLeft: moderateScale(8),
        width: scale(260),
        paddingVertical: moderateScale(0),
        zIndex: 0,
    },
    textStyle: {
        fontSize: moderateScale(14),
        fontWeight: '200',
        paddingVertical: moderateScale(0)
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