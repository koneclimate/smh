import React, { Component } from 'react';
import {Container, Content, Text, Header, Left, Button, Icon, Title, Right, Body, Form, Item, Label, Input } from 'native-base';
import {Actions} from "react-native-router-flux";
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { airUpdate } from "../actions";
import { StatusBar } from 'react-native'


class AirForm extends Component{
    onButtonPress(){

    }

    render(){
        return (
            <Container>
                <StatusBar
                    backgroundColor={'transparent'}
                    barStyle="light-content"
                />
                <Header>

                    <Left>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Icon style={{fontSize: 35, color: 'white'}} name='arrow-back' />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                    <Title>Add Airs</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>

                </Content>
                <Content style={{backgroundColor:'red'}}/>
                <Content style={{backgroundColor:'green'}}/>
            </Container>
        );
    }
}

const mapStateToProps =(state)=>{
    const {name, ssid, sspassword} =state.airForm;

    return { name, ssid,sspassword};
};

export default connect(mapStateToProps,{airUpdate})(AirForm);