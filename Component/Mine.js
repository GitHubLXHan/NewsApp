/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View, TextInput, FlatList, Button, TouchableOpacity} from 'react-native';
import MineHeader from "./MineHeader";
import MineFoot from "./MineFoot";


export default class Mine extends React.Component {

    constructor() {
        super();
        this.state = {
            data:[
                {content: '我的关注', info: '用户/主题 >'},
                {content:'我的消息', info:'>'},
                {content:'我的已购', info:'购买的课程/直播 >'},
                {content:'金币商城', info:'嘿，你的500金币，在这里 >'},
                {content:'京东特供', info:'新人领188元红包 >'},
                {content:'扫一扫', info:'>'},
                {content:'阅读公益', info:'>'},
                {content:'我的钱包', info:'>'},
            ]
        }
    }


    renderRow(rowData) {
        return <TouchableOpacity>
            <View style={styles.listView}>
                <Text style={styles.listFontLeft}>{rowData.item.content}</Text>
                <Text style={styles.listFontRight}>{rowData.item.info}</Text>
            </View>
        </TouchableOpacity>
    }

    _keyExtractor = (item, index)=>{
        return index
    }

    render() {
        return (
            <FlatList
                renderItem={this.renderRow}
                data={this.state.data}
                keyExtractor={this._keyExtractor}
                ListHeaderComponent={MineHeader}
                ItemSeparatorComponent={() => {  {/*分割线*/}
                    return <View style={{height: 1, backgroundColor: '#bdbdbd',marginLeft: 25, marginRight: 10}}/>
                    }
                }
                ListFooterComponent={MineFoot}
            />
        );
    }

}


const styles = StyleSheet.create(
    {
        listView: {flexDirection: 'row', justifyContent: 'space-between', flex: 1, paddingLeft: 25, paddingRight: 10, paddingTop: 10, paddingBottom: 10, backgroundColor: '#ffffff'},
        listFontLeft: {fontSize: 15, color: '#333333', fontWeight: 'bold'},
        listFontRight: {fontSize: 12, color: '#999999'},
    });

