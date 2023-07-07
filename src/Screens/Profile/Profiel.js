import React, { useRef, useState } from "react";
import { Text, View, SafeAreaView, Image, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import imagePath from "../../constants/imagePath";
import ButtonWithLabel from "../../Components/ButtonWithLabel";
import eng from "../../constants/lang/eng";
import ActionSheet from "react-native-actions-sheet";
import color from "../../styles/color";
import { moderateScale } from "react-native-size-matters";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TextInputWithLable from "../../Components/TextInputWithLabel";

const Profile = () => {
    
    const actionSheetRef = useRef(null);
    const actionClose = () => {
        actionSheetRef.current?.hide()
    }
    const [myTextShow, setMyTextSHow] = useState('');
    return (
        <SafeAreaView style={styles.mainView}>
            <View style={styles.mainView}>
                <KeyboardAwareScrollView>
                    <View style={styles.backgroundProfileView}>
                        <View style={styles.profileBackgroundView}>
                            <Image resizeMode="stretch" style={styles.profileImageStyle} source={imagePath.userBlackColor} />
                        </View>

                        <ButtonWithLabel
                            onPress={() => {
                                actionSheetRef.current?.show()
                            }}
                            btnBackgroundColor={color.profileButtonColor}
                            textColor={color.white}
                            buttonStyle={styles.logigSighnupStyle} btnTextStyle={styles.logigSighnupTextStyle} buttonTextLabel={eng.LOGINSIGNUP} />

                    </View>
                    <View>
                        <ActionSheet
                            containerStyle={styles.containerStyleActionSheet}
                            ref={actionSheetRef}>
                            <View style={styles.actionSheetViewStyle}>
                                <Image style={styles.actionSheetMyntraIcone} source={imagePath.mmm} />
                                <TouchableOpacity onPress={() => actionClose()}>
                                    <Image style={styles.actionSheetCloseButtonStyle} source={imagePath.closeIconBlackCOlor} />
                                </TouchableOpacity>
                            </View>
                            <Image />
                            <View style={styles.actionSheetLoginSignupView}>
                                <Text style={styles.actionSheetLoginSignupTextSTyle}>{eng.LOGIN}</Text>
                                <Text style={styles.actionSheetLoginSignupTextORSTyle}>{eng.OR}</Text>
                                <Text style={styles.actionSheetLoginSignupTextSTyle}>{eng.SIGNUP}</Text>
                            </View>
                            <View>
                                <TextInputWithLable
                                    myTextShow={myTextShow}
                                    value={myTextShow}
                                    onChangeText={text => setMyTextSHow(text)}
                                    keyboardType={"name-phone-pad"} />
                            </View>
                            <View style={styles.actionSheetBYContinueView}>
                                <Text style={styles.actionSheetBYContinueTextSTyle}>{eng.BYCONTINUING}</Text>
                                <Text style={{ ...styles.actionSheetTermsOfUseTextSTyle, }}>{eng.TERMSOFUSE}</Text>
                                <Text style={{ ...styles.actionSheetBYContinueTextSTyle, marginLeft: 1 }}>{eng.and}</Text>
                                <Text style={styles.actionSheetTermsOfUseTextSTyle}>{eng.PRIVACY}</Text>
                            </View>
                            <ButtonWithLabel
                                btnBackgroundColor={color.profileButtonColor}
                                textColor={color.white}
                                buttonStyle={styles.continueButtonStyle}
                                btnTextStyle={styles.logigSighnupTextStyle}
                                buttonTextLabel={eng.CONTINUE} />
                            <View style={styles.actionSheetBYContinueView}>
                                <Text>{eng.HAVINGTROUBLE}</Text>
                                <Text style={{ ...styles.actionSheetTermsOfUseTextSTyle, marginTop: moderateScale(2) }}>{eng.GET}</Text>
                            </View>
                        </ActionSheet>
                    </View>
                </KeyboardAwareScrollView>
            
            </View>
        </SafeAreaView>
    )
}
export default Profile;



