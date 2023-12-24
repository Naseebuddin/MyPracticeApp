import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import color from "../styles/color";
import imagePath from "../constants/imagePath";
const HeaderComponent = ({
    myTextOne,
    myTextTwo,
    logoImage,
    myInsiderOnpress,
    searchIcone,
    bellIcone,
    heartIcone,
    basket,
    searchOnPress,
    bellOnpress,
    heartOnPress,
    basketOnPress,
    textPropsOne,
    textPropsTwo,
    myIcons1,
    myIcons2,
    myIcons3,
    myIcons4,
    OnPressgoback,
    gobackIcone,
    gobackIconeStyle
}) => {
    return (

        <View style={styles.mainViwe}>
            <View style={styles.elemtsView}>
                {!!OnPressgoback &&
                    <TouchableOpacity onPress={OnPressgoback}>
                        <Image style={{ ...gobackIconeStyle }} source={gobackIcone} />
                    </TouchableOpacity>
                }
                {!!{ myTextOne, myTextTwo } &&
                    <TouchableOpacity style={{ ...styles.rowDirecttion }} onPress={myInsiderOnpress} >
                        <Image resizeMode="cover" style={{ ...styles.mLogoStyle }} source={logoImage} />
                        <Text style={{ ...textPropsOne, }}>{myTextOne}</Text>
                        <Text style={{ ...textPropsTwo, }}>{myTextTwo}</Text>
                    </TouchableOpacity>
                }
            </View>
            <View style={{ ...styles.elemtsView }}>
                {!!searchIcone &&
                    <TouchableOpacity onPress={searchOnPress}>
                        <Image style={{ ...myIcons1 }} source={searchIcone} />
                    </TouchableOpacity>
                }
                {!!bellIcone &&
                    <TouchableOpacity onPress={bellOnpress}>
                        <Image style={{ ...myIcons2 }} source={bellIcone} />
                    </TouchableOpacity>
                }
                {!!heartIcone &&
                    <TouchableOpacity onPress={heartOnPress}>
                        <Image style={{ ...myIcons3 }} source={heartIcone} />
                    </TouchableOpacity>
                }
                {!!basket &&
                    <TouchableOpacity onPress={basketOnPress}>
                        <Image style={{ ...myIcons4, marginRight: moderateScale(15) }} source={basket} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}
export default React.memo(HeaderComponent);
const styles = StyleSheet.create({
    mainViwe: {
        flexDirection: 'row',
        marginTop: moderateScale(12),
        justifyContent: 'space-between',
        borderBottomWidth: moderateScale(.25),
        borderBottomColor: color.darkBlack,
    },
    mLogoStyle: {
        height: 28,
        width: 28,
        marginLeft: 8,
        marginTop: moderateScale(10)
    },
    rowDirecttion: {
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    elemtsView: {
        flexDirection: 'row',
    },


})