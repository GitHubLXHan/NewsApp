import React from 'react'
import {FlatList, Dimensions, TouchableOpacity, View, StyleSheet, Image} from 'react-native'


// 定义常量

// 屏幕宽度
const screenWidth = Dimensions.get('window').width;
// 列数
const cols = 2;
// 图片大小
const imageWidth = screenWidth / cols;
const imageHeight = (imageWidth / 3) + imageWidth;


export default class  Recommend extends React.Component {

    constructor() {
        super();
        this.state = {
            data:[
                {image: require('../VideoImg/small_video01.png')},
                {image: require('../VideoImg/small_video02.png')},
                {image: require('../VideoImg/small_video03.png')},
                {image: require('../VideoImg/small_video04.png')},
                {image: require('../VideoImg/small_video05.png')},
                {image: require('../VideoImg/small_video06.png')},
                {image: require('../VideoImg/small_video07.png')},
                {image: require('../VideoImg/small_video08.png')},
                {image: require('../VideoImg/small_video09.png')},
                {image: require('../VideoImg/small_video10.png')},
                {image: require('../VideoImg/small_video11.png')},
                {image: require('../VideoImg/small_video12.png')},
            ]
        }

    }

    _keyExtractor = (item, index)=>{
        return item.imag + index
    }


    renderRow(rowData){
        return(
            <TouchableOpacity>
                <View style={styles.innerViewStyle}>
                    <Image source={rowData.item.image} style={styles.imgStyle}/>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <FlatList
                renderItem={this.renderRow}
                data={this.state.data}
                keyExtractor={this._keyExtractor}
                numColumns={cols}
                horizontal={false}
            />
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        innerViewStyle: {
            width: imageWidth,
            height: imageHeight,
            alignItems: 'center'
        },
        imgStyle: {
            borderWidth: 1, borderColor: '#ffffff',
            width: imageWidth,
            height: imageHeight,
        }
    }
)
