/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import NewsContent from './NewsContent'

export default class Home extends React.Component {

    constructor() {
        super()
        this.state = {
            //  列表数据
            data: [
                {title: '为何会选小24岁妻子？台媒曝光郭台铭12字回应', source: require('../pic/flatlisttest.png')},
                {title: '为何会选小24岁妻子？台媒曝光郭台铭12字回应', source: require('../pic/flatlisttest.png')},
                {title: '为何会选小24岁妻子？台媒曝光郭台铭12字回应', source: require('../pic/flatlisttest.png')},
                {title: '为何会选小24岁妻子？台媒曝光郭台铭12字回应', source: require('../pic/flatlisttest.png')},
                {title: '为何会选小24岁妻子？台媒曝光郭台铭12字回应', source: require('../pic/flatlisttest.png')},
                {title: '为何会选小24岁妻子？台媒曝光郭台铭12字回应', source: require('../pic/flatlisttest.png')},
                {title: '为何会选小24岁妻子？台媒曝光郭台铭12字回应', source: require('../pic/flatlisttest.png')},
            ]
        }
    }

    renderRow(rowData){
        return <TouchableOpacity style={{flexDirection: 'row', flex:1, margin: 10}} onPress={() => {
        this.props.navigation.navigate('NewsContent')}
        }  >
            <Image source={rowData.item.source} style={{width: 50, height:100,  flex:1}}/>
                <View style={{flex: 3, flexDirection: 'column', justifyContent: 'space-between', margin: 10}}>
                    <Text style={styles.item}>{rowData.item.title}</Text>
                    <View style={{flexDirection: 'row',alignItems: 'flex-end', flex: 1,}}>
                        <Text style={{marginRight: 10}}>郭台铭</Text>
                        <Text style={{marginRight: 10}}>曾馨莹</Text>
                        <Text style={{marginRight: 10}}>赖清德</Text>
                    </View>
                </View>
        </TouchableOpacity>

    }

    _keyExtractor = (item, index)=>{
        return item.source + index
    }


    render() {
        return (
            <FlatList
                renderItem={(item, index)=>this.renderRow(item, index)}
                data={this.state.data}
                keyExtractor={this._keyExtractor}
            />
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        fontSize: 20,
        lineHeight: 26,
        fontFamily: 'Microsoft Yahei',
        color: '#404040',
        fontWeight: 'normal'
    },
})
