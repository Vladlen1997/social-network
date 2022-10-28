import './App.css';
import Profile from "./Components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import MessagesContainer from "./Components/Messages/MessagesContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import NavBarContainer from "./Components/NavBar/NavBarContainer";
import UsersContainer from "./Components/Users/Users";

const App = () => {
    return (
        <div className="app">

            <HeaderContainer/>
            <NavBarContainer/>

            <div className="main-wrapper">
                <Routes>
                    <Route path='/Profile' element={<Profile/>}/>
                    <Route path='/Messages' element={<MessagesContainer/>}/>
                    <Route path='/Users' element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
