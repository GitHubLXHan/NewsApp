/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image, StatusBar} from 'react-native';
import NewsContent from './NewsContent'

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null, // 列表数据
            refreshing: false,  // 是否是刷新操作
            loadingMore: false, // 是否是加载更多操作
            itemNum: 0, // 目前列表数据数目
        }

        // 设置白底黑字
        StatusBar.setBarStyle('dark-content');
        // 设置’沉浸式‘状态栏；setTranslucent()方法说是使状态栏透明（即状态栏呈现’沉浸式‘），而不是指状态栏背景为透明
        StatusBar.setTranslucent(true);

        // 注册 willBlur监听事件，在该页面失去焦点时触发
        // props.navigation.addListener('willBlur', this._setStatusBarOnWillBlur)

        // 注册 willFocus监听事件，在该页面获取焦点时触发
        props.navigation.addListener('willFocus', this._setStatusBarOnWillFocus)
    }

    // 该页面失去焦点时触发
    _setStatusBarOnWillBlur = ()=> {
        StatusBar.setBackgroundColor('transparent');
    }

    // 该页面获取焦点时触发
    _setStatusBarOnWillFocus = ()=> {
        // 设置状态栏背景透明
        StatusBar.setBackgroundColor('transparent');
    }

    /**
     * 获取json数据
     */
    getData = (isRefresh) => {
        // 是否是刷新
        if (isRefresh) {
            this.setState({
                refreshing: true,
                loadingMore: false,
                itemNum: 0,
            });
        } else {
            this.setState({
                refreshing: false,
                loadingMore: true,
            });
        }
        // 获取数据
        fetch('https://3g.163.com/touch/nc/api/user/recommend/GuessLike/1-' + this.state.itemNum + '-10-' + this.state.itemNum)
            .then((response) =>response.json())
            .then((responseJson)=>{
                console.log("刷新数据");
                if (this.state.refreshing) { // 刷新数据
                    this.setState({
                        data: responseJson.list,
                        refreshing: false,
                        itemNum: 10,
                    });
                } else {
                    console.log("加载数据");
                    this.setState({
                        data: this.state.data.concat(responseJson.list),
                        loadingMore: false,
                        itemNum: this.state.itemNum + 10, // 如果是加载数据 ，则预先将 itemNum属性加 10，用于下次加载数据时生成url
                    });

                }
            })
            .catch((error) => {
                console.log("获取失败");
                console.log(error);
        });
    }

    /**
     * 下拉刷新数据
     */
    onRefresh = () => {
        // 传参为 true代表刷新数据
        this.getData(true);
    }

    /**
     * 上拉加载数据
     */
    onEndReached = () => {
        // 传参为 false代表加载数据
        this.getData(false);
    }

    /**
     * 该页面可见时执行
     */
    componentDidMount() {
        // 将第一次获取数据当做刷新数据，传参为 true
        this.getData(true);
        console.log("第一次执行");
    }

    /**
     * 如果json数据中有图片链接则返回Image组件
     * @param item json数据
     * @returns {返回Image组件}
     */
    isNeedImage(item) {
        if (item.picInfo[0]) {
            return <Image source={{uri: item.picInfo[0].url}} style={{width: 50, height:100,  flex:1}}/>
        } else {
            return null;
        }
    }

    renderRow(rowData){
        return <TouchableOpacity style={{flexDirection: 'row', flex:1, margin: 10}} onPress={() => {
        this.props.navigation.navigate('NewsContent', {url: rowData.item.link})}}>
            {this.isNeedImage(rowData.item)}
                <View style={{flex: 3, flexDirection: 'column', justifyContent: 'space-between', margin: 10}}>
                    <Text style={styles.item}>{rowData.item.title}</Text>
                    <View style={{flexDirection: 'row',alignItems: 'flex-end', flex: 1,}}>
                        <Text style={styles.sub_title}>{rowData.item.source}</Text>
                        <Text style={styles.sub_title}>{rowData.item.tcount}跟帖</Text>
                        <Text style={styles.sub_title}>{rowData.item.ptime}</Text>
                    </View>
                </View>
        </TouchableOpacity>
    }

    _keyExtractor = (item, index)=>{
        return item.source + index
    }

    render() {
        if (this.state.data) {
            return (
                <FlatList
                    renderItem={(item, index)=>this.renderRow(item, index)}
                    data={this.state.data}
                    keyExtractor={this._keyExtractor}
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={0.4}
                />
            );
        }
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        fontSize: 18,
        lineHeight: 26,
        fontFamily: 'Microsoft Yahei',
        color: '#404040',
        fontWeight: 'normal'
    },
    sub_title: {
        marginRight: 10,
        fontSize: 10,
    }
});
