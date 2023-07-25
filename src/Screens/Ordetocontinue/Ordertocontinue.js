import React, { useCallback } from "react";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import HeaderComponent from "../../Components/HeaderComponent";
import imagePath from "../../constants/imagePath";
import eng from "../../constants/lang/eng";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import ButtonWithLabel from "../../Components/ButtonWithLabel";
import color from "../../styles/color";
import { useSelector } from "react-redux";
export default function Ordertocontinue({ navigation }) {
    const myCartItem = useSelector((state) => state.cartItem.cartItems);
    const renderItemOfmyCartItem = useCallback(({ item }) => {
        return (
            <View>
                <View style={{...styles.flatlistView, borderStyle:'dotted'}}>
                <Image style={{...styles.cartImagestyle}} source={item.dealImage} />
                <Text style={styles.flatlistTextStyle}>{eng.ESTIMATEdDEVLIVERY}</Text>
                </View>
            </View>
        )
    }, [myCartItem])
    return (
        <SafeAreaView style={styles.mainView}>
            <View style={styles.mainView}>
                <View style={styles.itemView}>
                    <HeaderComponent
                        gobackIconeStyle={styles.myIcons}
                        gobackIcone={imagePath.arrowbackblak}
                        OnPressgoback={() => navigation.goBack()}
                        textPropsOne={styles.textStyleOne}
                        myTextOne={eng.SHOPPINGBAG}
                        myIcons3={styles.myIcons}
                    />
                    <View style={styles.homeDeatailStyleView}>
                        <Text style={styles.phoneNumbertextStyle}>{eng.CUSTOMERNAME} <Text style={styles.addresstextStyle}>({eng.DEFAULT})</Text></Text>
                        <Text style={styles.addresstextStyle}>{eng.HOMEADDRESEE}</Text>
                        <Text style={styles.addresstextStyle}>{eng.Mobile}: <Text style={styles.phoneNumbertextStyle}>{eng.MOBILECOTANCTNUMBER}</Text> </Text>
                    </View>

                    <ButtonWithLabel
                        btnBackgroundColor={color.white}
                        textColor={color.black}
                        buttonStyle={styles.chnageOrAddButtonStyle}
                        btnTextStyle={styles.chnageOraddAddresTextStyle}
                        buttonTextLabel={eng.CHANGEORADDADDRESS} />

                
                <Text style={styles.estimatedevliveryTextStyle}>{eng.DEVLIVERYESTIMATES}</Text>
                <View style={styles.itemView}>

                    <FlatList
                    data={myCartItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={renderItemOfmyCartItem} />

                </View>
                </View>
                <View style={styles.btnViewStyle}>
                    <ButtonWithLabel
                        btnBackgroundColor={color.profileButtonColor}
                        textColor={color.white}
                        buttonStyle={styles.continueButtonStyle}
                        btnTextStyle={styles.logigSighnupTextStyle}
                        buttonTextLabel={eng.CONTINUE} />
                </View>

            </View>
        </SafeAreaView>
    )
}
