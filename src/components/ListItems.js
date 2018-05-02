
import React,{Component} from 'react';
import { Text, List, ListItem, Left, Thumbnail, Body, Right, Icon } from 'native-base';
import { Image,TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';


class ListItems extends Component{

    onRowPress(){
        Actions.deviceDetail({device:this.props.device});
    }
    checkButton(){
        const { dimmer } = this.props.device;
        if (dimmer == 0){
            return (
                <View style={{flex:0.5,justifyContent: 'center',}}>
                    <TouchableOpacity onPress={this.onButtonPress.bind(this)} >
                        <Icon style={{fontSize: 35, color: '#FF0000'}} name='power' />
                    </TouchableOpacity>
                </View>
            );
        }
        else{
            return (
                <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={{flex:0.5,justifyContent: 'center',}}>
                    <Icon style={{fontSize: 35, color: '#00CC33'}} name='power' />
                </TouchableOpacity>
            )
        }

    }

    onButtonPress(){
        const { dimmer,uid } = this.props.device;
        if (dimmer == 0){
            firebase.database().ref('deviceId/'+uid) .update({dimmer:255,})
        }
        else{
            firebase.database().ref('deviceId/'+uid).update({dimmer:0,})
        }

    }


    render(){
        const { name} = this.props.device;
        return (

            <List>
                <TouchableOpacity onPress={this.onRowPress.bind(this)}>
                    <View style={{flexDirection: 'row',margin:20}}>
                        <View style={{flex:1}}>
                            <Image
                            style={{width:70,height:70}}
                            source={require('../../public/asset/icon/smart-plug.png')}
                        />
                        </View>
                        <View style={{flex:3,justifyContent: 'center',marginLeft:15}}>
                            <Text style={{color:'black'}}>
                                {name}
                            </Text>
                        </View>
                        {this.checkButton()}
                    </View>
                    </TouchableOpacity>
            </List>

        );
    }
}

export default (ListItems);