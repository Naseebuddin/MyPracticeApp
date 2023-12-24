import ButtonWithLabel from "../../Components/ButtonWithLabel";
import eng from "../../constants/lang/eng";
import color from "../../styles/color";
import React, { useState } from "react";
import { Text, View, Image, } from "react-native";
import styles from "./styles";
import { moderateScale } from "react-native-size-matters";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TextInputWithLable from "../../Components/TextInputWithLabel";
import imagePath from "../../constants/imagePath";
import AsyncStorage from '@react-native-async-storage/async-storage';
import actions from "../../redux/actions/actions";
import actionsOfApis from "../../redux/actions/actionsOfApis";
const Loginscreen = () => {
    const [loginUsername, setLoginUsername] = useState();
    const [loginPassword, setLoginPassword] = useState();
    const emailVlidation = () => {
        var regForEmailFormatChicker = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!loginUsername.match(regForEmailFormatChicker)) {
            console.log('first================')
            hit_User_Login()
            alert('Fill your email properly !')
        }
        else {
            alert('welecome')
        }
    }
    const handleToChaneg = (text) => {
        const sanitizedText = removeEmojis(text);
        setLoginUsername(sanitizedText)
    }
    const hit_User_Login = async () => {
        let loginData = {
            username: loginUsername,
            password: loginPassword,
        }
        console.log('loginData=================>', loginData)
        actionsOfApis.postActionLoginUser(loginData)?.then(async (res) => {
            actions.appStateStatusAction(res)
            console.log(res, "Hello");
            try {
                await AsyncStorage.setItem('key', value)
            } catch (e) {
                // save error
            }
        }).catch((error) => {
            console.log(error, "Hello error");
            console.log(error);
        })
    }
    // const storeData = async (myStateStatus) => {
    //     try {
    //         await AsyncStorage.setItem('my-State-Value', myStateStatus);
    //     } catch (e) {
    //         // saving error
    //     }
    // };

    return (
        <View style={styles.mainView}>
            <KeyboardAwareScrollView>
                <View style={styles.actionSheetViewStyle}>
                    <Image style={styles.actionSheetMyntraIcone} source={imagePath?.mmm} />
                </View>
                <View style={styles.actionSheetLoginSignupView}>
                    <Text style={styles.actionSheetLoginSignupTextSTyle}>{eng.LOGIN}</Text>
                    <Text style={styles.orTextSTyle}>{eng.OR}</Text>
                    <Text style={styles.actionSheetLoginSignupTextSTyle}>{eng.SIGNUP}</Text>
                </View>
                <View>
                    <TextInputWithLable
                        myTextShow={loginUsername}
                        value={loginUsername}
                        movePlaceHolder={eng.Email}
                        placeholder={eng.Email}
                        onChangeText={handleToChaneg}
                        keyboardType={"email-address"}
                    />
                    <View style={styles.emptyView} />
                    <TextInputWithLable
                        secureTextEntry={true}
                        movePlaceHolder={eng.PASSWORD}
                        placeholder={eng.PASSWORD}
                        myTextShow={loginPassword}
                        value={loginPassword}
                        onChangeText={text => setLoginPassword(text)}
                        keyboardType={"name-phone-pad"} />
                </View>
                <View style={styles.actionSheetBYContinueView}>
                    <Text style={styles.actionSheetBYContinueTextSTyle}>{eng.BYCONTINUING}</Text>
                    <Text style={{ ...styles.actionSheetTermsOfUseTextSTyle, }}> {eng.TERMSOFUSE}</Text>
                    <Text style={{ ...styles.actionSheetBYContinueTextSTyle, marginLeft: 1 }}> {eng.and}</Text>
                    <Text style={styles.actionSheetTermsOfUseTextSTyle}> {eng.PRIVACY}</Text>
                </View>
                <ButtonWithLabel
                    onPress={() => hit_User_Login()}
                    btnBackgroundColor={color.profileButtonColor}
                    textColor={color.white}
                    buttonStyle={styles.continueButtonStyle}
                    btnTextStyle={styles.logigSighnupTextStyle}
                    buttonTextLabel={eng.CONTINUE} />
                <View style={styles.actionSheetBYContinueView}>
                    <Text style={styles.havingTroubleTextSTyle}>{eng.HAVINGTROUBLE}</Text>
                    <Text style={{ ...styles.getHelpTextSTyle }}> {eng.GET}</Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}
export default Loginscreen;
const removeEmojis = (input) => {
    var result = '';
    if (input?.length == 0)
        return input;
    for (var indexOfInput = 0, lengthOfInput = input?.length; indexOfInput < lengthOfInput; indexOfInput++) {
        var charAtSpecificIndex = input[indexOfInput].charCodeAt(0);
        if ((32 <= charAtSpecificIndex) && (charAtSpecificIndex <= 126)) {
            result += input[indexOfInput];
        }
    }
    return result;
}