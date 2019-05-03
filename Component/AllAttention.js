import React from 'react'
import {Image, FlatList, Text, View, TouchableOpacity} from 'react-native'


export default class AllAttention extends React.Component {


    constructor() {
        super();
        this.state = {
            // 列表数据
            data:[
                {imgPath: require('../icon/icon_profile_photo01.png'), title: '大雨时行', brief: '知常曰明--《中国哲学简史》读书笔记'},
                {imgPath: require('../icon/icon_profile_photo02.png'), title: '内乡老彭友', brief: '5.2曹全隶书练习21和22'},
                {imgPath: require('../icon/icon_profile_photo03.png'), title: '何鲸洛', brief: '三行情诗0502《你要知道就像是分手，每一场雨...'},
                {imgPath: require('../icon/icon_profile_photo04.png'), title: '职场解忧铺', brief: '日更056 宝妈计划玩法揭秘2.0'},
                {imgPath: require('../icon/icon_profile_photo05.png'), title: '罗锦书', brief: '读美句|奥尔罕·帕慕克：不是我爱上了你。是你终...'},
                {imgPath: require('../icon/icon_profile_photo06.png'), title: '万能的船长', brief: '中国移动查网领送流量，背后是什么？'},
                {imgPath: require('../icon/icon_profile_photo07.png'), title: '寻虎纯文学', brief: '长篇连载《失心疯》04'},
                {imgPath: require('../icon/icon_profile_photo08.png'), title: '西山居客', brief: '想要出国的宝宝看过来（之十）'},
                {imgPath: require('../icon/icon_profile_photo09.png'), title: '北京社豆豆', brief: '万卷好书186《城市意象》2:5年研究，徒步3大'},
                {imgPath: require('../icon/icon_profile_photo10.png'), title: '肖国龙淼', brief: '敬畏生死'},
                {imgPath: require('../icon/icon_profile_photo11.png'), title: 'zidea', brief: 'c++基础（模板）'},
                {imgPath: require('../icon/icon_profile_photo12.png'), title: '龙门村夫', brief: '左传笔记025|鲁成公18年（7）：民受天地之中而生'},
                {imgPath: require('../icon/icon_profile_photo13.png'), title: '思维导图实战派_汪志鹏', brief: '思考力的三个基本要素'},
                {imgPath: require('../icon/icon_profile_photo14.png'), title: '潜光', brief: '#D119-关于未来方向上的一点点思考'},
            ]
        }
    }


    // 渲染的内容
    renderRow(rowData) {
        return (
            <TouchableOpacity>
                <View style={{flexDirection: 'row', margin: 10}}>
                    <Image source={rowData.item.imgPath} style={{width: 50, height: 50,}}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between',flex: 1, marginLeft: 10}}>
                        <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#333333'}}>{rowData.item.title}</Text>
                            <Text style={{fontSize: 12, color: '#999999'}}>{rowData.item.brief}</Text>
                        </View>
                        <Text style={{alignSelf:'center'}}>></Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }


    // 生成 keyExtractor 参数
    _keyExtractor = (item, index)=>{
        return item.imgPath + index
    };

    render() {
        return (
            <FlatList
                renderItem={this.renderRow}
                data={this.state.data}
                keyExtractor={this._keyExtractor}
                ItemSeparatorComponent={() => {
                    return <View style={{height: 1, backgroundColor: '#bdbdbd',marginLeft:60, marginRight: 10}}/>
                }
                }
            />


        );
    }




}