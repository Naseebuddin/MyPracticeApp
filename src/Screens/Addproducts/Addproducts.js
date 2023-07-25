import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import eng from "../../constants/lang/eng";
import { moderateScale, verticalScale } from "react-native-size-matters";
import imagePath from "../../constants/imagePath";
import actionsOfApis from "../../redux/actions/actionsOfApis";
import { postApiAddNewProducts } from "../../utils/utils";
const Addproducts = () => {
    const [myProductId, setMyProductId] = useState('');
    const [myProductTitle, SetMyProductTitle] = useState('');
    const [myProcutsPrice, setMyProcutsPrice] = useState('');
    const [myProductCategory, setMyProductCategory] = useState('');
    const [myProductDescription, setMyProductDescription] = useState('');
    const [myProductImage, setMyProductImage] = useState('');
    const myApiData = {
        id: myProductId,
        title: myProductTitle,
        price: myProcutsPrice,
        category: myProductCategory,
        description: myProductDescription,
        image: imagePath.brand1,
    }
    const _hit_Add_Product = () => {
        let data = {
            myApiData
        }
        console.log(myApiData, 'aaaaaaaworking');
        postApiAddNewProducts(data).then((res) => {
            console.log(res, 'aaaaaaaworking');

        }).catch((error) => {
            console.log(error, '>>>>>>?erro');
        })
    }
    return (
        <SafeAreaView>
            <View>
                <Text>{eng.FILLTOADDPRODUCT}</Text>
                <TextInput
                    value={myProductId}
                    onChangeText={value => setMyProductId(value)}
                    placeholder={eng.ID}
                    style={styles.inputStyle} />
                <TextInput
                    value={myProductTitle}
                    onChangeText={value => SetMyProductTitle(value)}
                    placeholder={eng.TITLE}
                    style={styles.inputStyle} />
                <TextInput
                    value={myProcutsPrice}
                    onChangeText={value => setMyProcutsPrice(value)}
                    placeholder={eng.PLACEORDERTIOPRICE}
                    style={styles.inputStyle} />
                <TextInput
                    value={myProductCategory}
                    onChangeText={value => setMyProductCategory(value)}
                    placeholder={eng.CATAGORIES}
                    style={styles.inputStyle} />
                <TextInput
                    value={myProductDescription}
                    onChangeText={value => setMyProductDescription(value)}
                    placeholder={eng.DESCRIPTION}
                    style={styles.inputStyle} />
                <TouchableOpacity onPress={() => _hit_Add_Product()}>
                    <Text>Upload The data</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default Addproducts;
const styles = StyleSheet.create(
    {
        inputStyle: {
            borderRadius: moderateScale(5),
            marginVertical: moderateScale(4),
            padding: moderateScale(6),
            height: verticalScale(40),
            borderWidth: moderateScale(1),
            marginHorizontal: moderateScale(12)

        }
    })