
import './App.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Address from './Components/Profile/Address';
import Codephoto from './Components/Profile/Codephoto';
import { Component } from 'react';
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Cart1">
          <ProfilePhoto />
          <FullName />
          <Address />
          <div className="icons">
            <BsFacebook className="fb" />
            <FaTwitter className="fa" />
            <AiFillLinkedin className="ai" />
          </div>
        </div>

        <div className="Cart2">
          <div className="Part1">
            <FullName />
            <Codephoto />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
