import React from 'react'
import {View, Button, Image, Text, StatusBar, TouchableOpacity, StyleSheet} from 'react-native'


export default class MineHeader extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.rowOne}>
                    <TouchableOpacity>
                        <Image source={require('../icon/icon_day_night_change.png')} style={styles.rowOneImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../icon/icon_sign_in.png')} style={styles.rowOneImg}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowTow}>
                    <TouchableOpacity>
                        <Image source={require('../icon/icon_use_phone.png')} style={styles.rowTowImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../icon/icon_use_weibo.png')} style={styles.rowTowImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../icon/icon_use_weixin.png')} style={styles.rowTowImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../icon/icon_use_qq.png')} style={styles.rowTowImg}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowThree}>
                    <TouchableOpacity>
                        <Image source={require('../icon/icon_login_or_register.png')} style={styles.rowThreeImg}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowFour}>
                    <TouchableOpacity>
                        <Image source={require('../icon/icon_follow.png')} style={styles.rowFourImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../icon/icon_collect.png')} style={styles.rowFourImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../icon/icon_history.png')} style={styles.rowFourImg}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {flex: 1, flexDirection: 'column', backgroundColor: '#ffffff', padding: 10, marginBottom: 10},
        rowOne: {flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginBottom: 10, marginRight: 10, marginLeft: 10, },
        rowOneImg: {width: 76, height: 35},
        rowTow: {flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginBottom: 10, marginLeft: 40, marginRight: 40, },
        rowTowImg: {width: 50, height: 50},
        rowThree: {flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 10, marginBottom: 10,},
        rowThreeImg: {width: 120, height: 35, paddingLeft: 0, paddingRight: 0},
        rowFour: {flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginLeft: 40, marginRight: 40, marginTop: 10, marginBottom: 10,},
        rowFourImg: {width: 26, height: 42},
    });