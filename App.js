/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar}from 'react-native';
import {createAppContainer} from 'react-navigation';

import MyBottomTabNavigator from "./Component/MyBottomTabNavigator";

export default class HelloWorldApp extends React.Component {
    constructor() {
        super();
        // 设置白底黑字，但是状态栏还是存在
        StatusBar.setBarStyle('light-content');
        // 设置’沉浸式‘状态栏；setTranslucent()方法说是使状态栏透明（即状态栏呈现’沉浸式‘），而不是指状态栏背景为透明
        StatusBar.setTranslucent(true);
        // 设置状态栏背景透明
        StatusBar.setBackgroundColor('transparent');
    }


    render() {
        return (
            <AppContainer/>
        );
    }
}



const AppContainer = createAppContainer(MyBottomTabNavigator);
