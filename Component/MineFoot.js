import React from 'react'
import {Text, FlatList, TouchableOpacity, View, StyleSheet} from 'react-native'


export default class MineFoot extends React.Component{

    constructor(){
        super()
        this.state = {
            data:[
                {content: '免流量看新闻', info: '>'},
                {content: '设置', info: '支持调整列表字号啦 >'},

            ]
        }
    }

    _keyExtractor = (item, index)=>{
        return index
    }

    renderRow(rowData) {
        return <TouchableOpacity>
            <View style={styles.listView}>
                <Text style={styles.listFontLeft}>{rowData.item.content}</Text>
                <Text style={styles.listFontRight}>{rowData.item.info}</Text>
            </View>
        </TouchableOpacity>
    }


    render() {
        return (
            <FlatList
                renderItem={this.renderRow}
                data={this.state.data}
                keyExtractor={this._keyExtractor}

                ItemSeparatorComponent={() => { {/* 分割线 */}
                    return <View style={{height: 1, backgroundColor: '#bdbdbd'}}/>
                    }
                }
                style={{marginTop: 10}}
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