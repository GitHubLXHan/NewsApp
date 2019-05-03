import {createBottomTabNavigator} from "react-navigation";
import TabBarIcon from "./TabBarIcon";
import Video from "./Video";
import Attention from "./Attention";
import Mine from "./Mine";
import React from "react";
import HomeStackNavigator from "./HomeStackNavigator";

export default createBottomTabNavigator(
    // RouteConfigs - 路由配置对象是从路由名称到路由配置的映射，它告诉导航器该路由呈现的内容。
    {
        // 路由 - 首页
        Home: {
            screen: HomeStackNavigator,
            navigationOptions: { // 用于导航器内部页面
                // 图标
                tabBarIcon: ({focused, horizontal, tintColor}) => (
                    <TabBarIcon tintColor={tintColor} normalImage={require('../icon/icon_home_unchoosed.png')}
                                selectedImage={require('../icon/icon_home_choosed.png')} horizontal={horizontal} focused={focused}/>

                ),
                tabBarLabel: '首页',
            },
        },
        // 路由 - 视频
        Attention: {
            screen: Video,
            navigationOptions: {
                tabBarIcon: ({focused, horizontal, tintColor}) => (
                    <TabBarIcon tintColor={tintColor} normalImage={require('../icon/icon_video_unchoosed.png')}
                                selectedImage={require('../icon/icon_video_choosed.png')} horizontal={horizontal} focused={focused}/>
                ),
                tabBarLabel: '视频',
            },

        },
        // 路由 - 关注
        Message: {
            screen: Attention,
            navigationOptions: {
                tabBarIcon: ({focused, horizontal, tintColor}) => (
                    <TabBarIcon tintColor={tintColor} normalImage={require('../icon/icon_attention_unchoosed.png')}
                                selectedImage={require('../icon/icon_attention_chooosed.png')} horizontal={horizontal} focused={focused}/>
                ),
                tabBarLabel: '关注',
            }
        },
        // 路由 - 我的
        Mine: {
            screen: Mine,
            navigationOptions: {
                tabBarIcon:({focused, horizontal, tintColor}) => (
                    <TabBarIcon tintColor={tintColor} normalImage={require('../icon/icon_mine_unchoosed.png')}
                                selectedImage={require('../icon/icon_mine_choosed.png')} horizontal={horizontal} focused={focused}/>

                ),
                tabBarLabel: '我的',
            }
        }
    },
    // BottomTabNavigatorConfig - 底部导航内容的配置
    {
        tabBarOptions: {
            activeTintColor: '#ff1f11',
            inactiveTintColor: '#959794',
            style: {backgroundColor: '#ffffff',},

        },



    }
);
