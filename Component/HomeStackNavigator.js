import React from 'react'
import {TextInput, StyleSheet} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import Home from "./Home";
import NewsContent from "./NewsContent";

const styles = StyleSheet.create(
    {
        textInputStyle: {
            color:'rgba(255,255,255, 0.7)',
            width: 200,
            borderRadius: 20,
            backgroundColor: 'rgba(255,255,255, 0.7)',
            height: 30,
            marginTop: 10,
            paddingTop: 0,
            paddingBottom: 0 },
    });

export default createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                headerTitle: (
                    <TextInput inlineImageLeft='icon_search'
                               allowFontScaling={true}
                               placeholder={'关键词'}
                               placeholderTextColor={'rgba(255,255,255, 0.7)'}
                               style={styles.textInputStyle}/>
                ),
                headerStyle: {backgroundColor: '#ff1f11', setHeight: 80},
                headerTitleContainerStyle: {paddingEnd: 0, justifyContent: 'center', flex: 1, },
                headerTitleStyle: {flex: 1, textAlign: 'center'},

            },
        },
        NewsContent: {
            screen: NewsContent,
            navigationOptions: {
                headerLeftContainerStyle: {paddingTop: 20},
            }
        }
    },
    {

    }
    );

