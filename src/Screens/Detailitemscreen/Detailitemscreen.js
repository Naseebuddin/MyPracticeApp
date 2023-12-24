import React, { useCallback } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import styels from "./styels";
import HeaderComponent from "../../Components/HeaderComponent";
import eng from "../../constants/lang/eng";
import imagePath from "../../constants/imagePath";
import navigationStrig from "../../constants/navigationStrig";
const Detailitemscreen = ({ navigation, route }) => {
    const mySelectedData = route;
    // console.log(mySelectedData, 'mySelectedDatamySelectedData');
    const renderItemOfRoute = useCallback(({ item }) => {
        return (
            <View>
                <Text>{item.name}</Text>
                <Text>asasasas</Text>
            </View>
        )
    }, [mySelectedData])
    return (
        <View style={styels.mainView}>
            <View>
                <HeaderComponent
                    searchIcone={imagePath.search}
                    heartIcone={imagePath.normalHeart}
                    basket={imagePath.basket}
                    gobackIconeStyle={styels.myIcons}
                    gobackIcone={imagePath.arrowbackblak}
                    OnPressgoback={() => navigation.goBack()}
                    textPropsOne={styels.textStyleOne}
                    myTextOne={eng.SHOPPINGBAG}
                    myIcons3={styels.myIcons}
                    myIcons1={styels.myIcons}
                    myIcons2={styels.myIcons}
                    myIcons4={styels.myIcons}
                    basketOnPress={() => navigation.navigate(navigationStrig.BASEKET)}
                />
            </View>
            <View>
                <Text>{mySelectedData.name}</Text>
                <FlatList
                    data={mySelectedData}
                    renderItem={renderItemOfRoute}
                />
            </View>
        </View>
    )
}
export default Detailitemscreen;