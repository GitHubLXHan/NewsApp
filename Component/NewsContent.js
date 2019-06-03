import React from 'react'
import {WebView, StyleSheet} from 'react-native'


export default class NewsContent extends React.Component{

    // 接收 Home 页面传过来的值，也就是传过来的新闻详情页地址
    static navigationOptions  = ({navigation}) =>({
        url: navigation.state.params.url,
    });


    constructor(props) {
        super(props);
    }

    render() {
        const { params } = this.props.navigation.state;
        return (
            <WebView
                source={{uri: params.url}}
                style={styles.webView}
            />
        );
    }
}

const styles = StyleSheet.create(
    {
        webView: {width: '100%', height: '100%'},
    });

