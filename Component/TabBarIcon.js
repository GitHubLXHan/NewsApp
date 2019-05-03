import React from 'react'
import {Image}from 'react-native'

type Props = {
    tintColor: any,
    normalImage: any,
    selectedImage:any,
    horizontal: boolean,
    focused: boolean,
}

export default class TabBarIcon extends React.Component<Props> {

    render() {
        return (
            <Image
            source={this.props.focused
                    ? this.props.selectedImage
                    : this.props.normalImage}
            style={{width: 25, height: 25}}/>

        )
    }

}
