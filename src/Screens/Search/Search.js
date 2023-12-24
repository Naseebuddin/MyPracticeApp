import React, { useState } from "react";
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from "react-native";
import actions from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import color from "../../styles/color";
import { increment } from "../../redux/reducer/myCountItem";
const Search = () => {
    const [inputText, setInputText] = useState('');
    const myTododata = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    // console.log("appdata", myTododata);
    const deletingItem = (itemToDelet) => {
        actions.deleteMyActionUserData(itemToDelet)
    }

    const count = useSelector((state)=>state.incrementAndDecrement.value)
    // console.log('value',count);
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo App</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={{ ...styles.textInputStyle }}
                    placeholder="Enter a todo..."
                    value={inputText}
                    onChangeText={(text) => setInputText(text)}
                />
                <TouchableOpacity
                    onPress={() => {
                        actions.addMyActionUserData({ inputText })
                    }}
                    style={{ ...styles.addBtnStyle }} >
                    <Text style={{ alignSelf: 'center', justifyContent: 'center' }}>Add</Text>
                </TouchableOpacity>
                <FlatList
                    data={myTododata}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.flatlistViewStyle}>
                                <TouchableOpacity
                                    onPress={() => deletingItem(index)} >
                                    <Text style={styles.deleltBtnTextStyle}>delete</Text>
                                </TouchableOpacity>
                                <Text>{index + 1}</Text>
                                <Text>{item.inputText}</Text>
                            </View>
                        );
                    }}
                />
                <TouchableOpacity onPress={()=>dispatch(increment())}>
                    <Text>+INCREMENT</Text>
                    </TouchableOpacity>
                <Text>{count}</Text>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    textInputStyle: {
        alignSelf: 'center', height: 40, borderWidth: 1, marginTop: 20, width: 340

    },
    addBtnStyle: {
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'center',
        width: 200,
        height: 40,
        backgroundColor: color.GreenMix
    },
    flatlistViewStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    deleltBtnTextStyle: {
        color: "red",
        margin: 10
    }
})
export default Search;