/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar} from 'react-native';
import ScrollableTabView, {ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Recommend from "./VideoRecommend";

export default class Video extends React.Component {

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
            <Recommend tabLabel='推荐'/>
            <Recommend tabLabel='小视频'/>
            <Recommend tabLabel='榜单'/>
            <Recommend tabLabel='超级IP季'/>
            <Recommend tabLabel='百年影像'/>
            <Recommend tabLabel='搞笑'/>
            <Recommend tabLabel='影视'/>
            <Recommend tabLabel='综艺'/>
            <Recommend tabLabel='音乐'/>
            <Recommend tabLabel='现场'/>
            <Recommend tabLabel='黑科技'/>
            <Recommend tabLabel='小品'/>
            <Recommend tabLabel='蒙充'/>
            <Recommend tabLabel='军武'/>
            <Recommend tabLabel='猎奇'/>
            <Recommend tabLabel='二次元'/>
            <Recommend tabLabel='涨知识'/>
        </ScrollableTabView>;
    }
}