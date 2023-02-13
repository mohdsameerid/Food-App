import React from "react"; 
import { useState } from "react";
import { json } from "react-router-dom";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "dummy",
                bio: "dummy",
            }
        }
        console.log(" Constructor "+ this.props.name);
    }
    async componentDidMount(){
        // best place to call API.
        const data = await fetch("https://api.github.com/users/mohdsameerid");
        const json  = await data.json();
        // const {name, bio } = json;
        console.log(json);
        this.setState({
            userInfo: json,
        });
        console.log(" componentDidMount "+ this.props.name);
    }
    render(){
        // const { name, bio } = json;
        console.log(" Render "+ this.props.name);
        // console.log(json.bio);
        return(
            <>
                <h1> this is the profile components: Details ....</h1>
                <p> Name: {this.state.userInfo.name}</p>
                <p>BIO: {this.state.userInfo.bio}</p>
                <img src={this.state.userInfo.avatar_url} />
            </>
        );
    }
}
export default Profile;