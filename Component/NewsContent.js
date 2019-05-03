import React from 'react'
import {StatusBar, Text, View, ScrollView, Image, StyleSheet} from 'react-native'


export default class NewsContent extends React.Component{

    constructor() {
        super()
        // 设置白底黑字
        StatusBar.setBarStyle('dark-content');
        // 设置’沉浸式‘状态栏；setTranslucent()方法说是使状态栏透明（即状态栏呈现’沉浸式‘），而不是指状态栏背景为透明
        StatusBar.setTranslucent(true);
        // 设置状态栏背景透明
        StatusBar.setBackgroundColor('#ffffff');
    }


    render() {
        return (
            <ScrollView style={{padding: 10}}>
                <Text style={styles.titleFont}>
                    五一期间，潮州这些地方可以免费停车！
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between',margin: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../icon/icon_hongtaoguo.png')} style={{width: 40, height: 40}}/>
                        <View style={{flexDirection: 'column', marginHorizontal: 10}}>
                            <Text>红桃粿</Text>
                            <Text>3 天前 14:02</Text>
                        </View>
                    </View>
                    <Image source={require('../icon/icon_is_attention.png')} style={{width: 66, height: 20, alignSelf: 'center'}} />
                </View>
                <Text style={styles.mainFont}>
                    &emsp;&emsp;五一小长假期间
                </Text>
                <Text style={styles.mainFont}>
                    &emsp;&emsp;全市机关事业单位停车场
                </Text>
                <Text style={styles.mainFont}>
                    &emsp;&emsp;免费对外开放！
                </Text>
                <Text style={styles.mainFont}>
                    &emsp;&emsp;具体情况如下:
                </Text>
                <Image source={require('../NewsImg/newsContent01.png')} style={styles.img} resizeMode={'contain'}/>
                <Text style={styles.mainFont}>
                    &emsp;&emsp;五一小长假已经开始
                </Text>
                <Text style={styles.mainFont}>
                    &emsp;&emsp;相信不少准备出外游玩的朋友
                </Text>
                <Text style={styles.mainFont}>
                    &emsp;&emsp;已经按捺不住蠢蠢欲动
                </Text>
                <Text style={styles.mainFont}>
                    &emsp;&emsp;点击查看原图
                </Text>
                <Text style={styles.mainFont}>
                    &emsp;&emsp;米果君提醒各位
                </Text>
                <Text style={styles.mainFont}>
                    &emsp;&emsp;近期正值强对流天气时期
                </Text>
                <Text style={styles.mainFont}>
                    &emsp;&emsp;外出游玩时，注意饮食安全
                </Text>
                <Text style={styles.mainFont}>
                    &emsp;&emsp;随时注意天气变化
                </Text>
                <Text style={styles.mainFont}>
                    &emsp;&emsp;一、注意饮食安全：在夏季高温时节出游，游客要注意饮食安全，讲究饮食卫生，防止“病从口入”及不科学的饮食习惯造成的身体不适或疾病，尤其是在海滨城市食用海鲜产品时，一定要挑干净新鲜的食用，防止发生食物中毒，吃海鲜时和刚刚吃了海鲜后，不要饮用冰啤、冰水、冷水，不要吃过凉的食物，以防发生腹泻等疾病。
                </Text>
                <Text style={styles.mainFont}>
                    &emsp;&emsp;二、遇恶劣天气远离危险地区：遇到雷雨、台风、热带风暴、泥石流、洪水、海啸等恶劣天气和自然灾害时，应远离危险地段或危险地区，切勿进入景区规定的禁区内，听从带团导游和旅行社的统一安排和调动，及时采取相关的防护措施，不私自随处参观游玩、脱离旅游团队。
                </Text>
                <Text style={styles.mainFont}>
                    &emsp;&emsp;三、海边游泳要在限定区域：到海滨地区参加游泳活动时，在与旅行社约定的区域内或景区限定的区域内游泳，最好结伴而行，有较强的自我保护意识，携带必要的保护救生用品，不私自下水，以防溺水事故发生。
                </Text>
                <Text style={styles.mainFont}>
                    &emsp;&emsp;四、山区旅游要防跌防迷失：到山区或地形复杂的地方旅游，要防滑、防跌、防迷失，要牢记景区规定的行走路线，跟随导游行进，不要去无防护设施的危险地段，最好结伴游览，防止走错路、迷路。
                </Text>
                <Image source={require('../NewsImg/newsContent02.jpeg')}  style={styles.img} resizeMode={'contain'}/>
            </ScrollView>
        );
    }


}



const styles = StyleSheet.create(
    {
        mainFont: {lineHeight: 25, fontSize: 15, color: '#000000'},
        img: {width: 360, height: 500,alignSelf: 'center'},
        titleFont: {fontSize: 25, fontWeight: 'bold', color: '#000000', flexWrap: 'wrap',textAlign: 'auto', lineHeight: 40}
    }
    );

