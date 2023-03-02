import React from "react";
import UserContext from "../context/UserContext";
// import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClas from "./ProfileClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent constructor");
  }
  componentDidMount() {
    // console.log("Parent - componentDidMount");
  }
  render() {
    // console.log("Parent - render");
    return (
      <div className="m-4 p-3  font-bold">
        <h1 className="font-extrabold text-4xl"> This Data come via Lazy Load!!!</h1>
        <h1>This is about us page!!</h1>
        
        <ProfileClas name={"first child"} />

        {/* // using context central data in Class Base Component */}
        <UserContext.Consumer>
          {({ user }) => 
            <span>
              Name: {user.name} Email: {user.email}
            </span>
          }
        </UserContext.Consumer>

        {/* <Profile name={"Second child"} />
                <Profile name={"third child"} /> */}
      </div>
    );
  }
}
export default About;
