import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import color from "../styles/color";
const HimAndHerBotton = ({
    buttonTextLabel,
    buttonStyle,
    buttonImageStyle,
    btnTextStyle,
    btnImage,
    onPress,
    myImageBackground,
    myImageBackgroundStyle,
    imageViewStyling
}) => {
    return (

   <TouchableOpacity onPress={onPress} style={{ ...buttonStyle, }}>
           
            <ImageBackground resizeMode="stretch" source={myImageBackground} style={{ ...myImageBackgroundStyle, ...styles.myBtnStyle, }} >  
                   <View style={{...imageViewStyling,...styles.imageViewStyle}}>
                     {!!buttonTextLabel &&
                    <Text style={{ ...btnTextStyle }}>{buttonTextLabel}</Text>
                }
                {!!btnImage &&
                    <Image source={btnImage} resizeMode="stretch" style={{ ...buttonImageStyle, ...styles.myImageStyle }} />
                }
                </View>
            </ImageBackground>
        </TouchableOpacity>
     

    )
}
export default React.memo(HimAndHerBotton);
const styles = StyleSheet.create({
    mainView: {
    },
    myBtnStyle: {
        flexDirection: 'row',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // paddingTop: moderateScale(4),
        // width: scale(60),
        backgroundColor: color.black,
    },
    myImageStyle: {
        width: scale(18),
        height: verticalScale(18)
    },
    imageViewStyle:{
        flexDirection:'row'
    }
})