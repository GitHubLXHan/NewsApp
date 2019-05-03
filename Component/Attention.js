/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View, TextInput, StatusBar} from 'react-native';
import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";
import AllAttention from "./AllAttention";


export default class Attention extends React.Component {
    constructor() {
        super();
        // 设置白底黑字
        StatusBar.setBarStyle('dark-content');
        // 设置’沉浸式‘状态栏；setTranslucent()方法说是使状态栏透明（即状态栏呈现’沉浸式‘），而不是指状态栏背景为透明
        StatusBar.setTranslucent(true);
        // 设置状态栏背景透明
        StatusBar.setBackgroundColor('#ffffff');


    }


    render() {
        return <ScrollableTabView
            style={{marginTop: 20,backgroundColor: '#ffffff'}}
            initialPage={0}
            renderTabBar={() => <ScrollableTabBar/>}
            tabBarUnderlineStyle={{height: 0}}
            tabBarTextStyle={{fontWeight: 'normal'}}
            tabBarActiveTextColor={'#ff1f11'}
            tabBarInactiveTextColor={'#b2b2b2'}

        >
            <AllAttention tabLabel='全部关注'/>
            <AllAttention tabLabel='专题'/>
            <AllAttention tabLabel='作者'/>
            <AllAttention tabLabel='连载'/>
            <AllAttention tabLabel='文集'/>
            <AllAttention tabLabel='推送更新'/>
        </ScrollableTabView>;
    }
}