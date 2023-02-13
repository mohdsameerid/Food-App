import React from "react";
// import { Outlet } from "react-router-dom";
import Profile from "./Profile";


class About extends React.Component{
    constructor(props){
        super(props);

        console.log("Parent constructor");
    }
    componentDidMount(){
        console.log("Parent - componentDidMount");
    }
    render(){
        console.log("Parent - render");
        return(
            <>
                <h1>This is about us page!!</h1>
                <Profile name={"First child"} />
                {/* <Profile name={"Second child"} /> */}
            </>
          )
    }
}
export default About;