import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import NavBar from "./Components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import Messages from "./Components/Messages/Messages";

const App = (props) => {
    return (
        <div className="app">

            <Header header={props.state.header}/>
            <NavBar navBar={props.state.navBar}/>

            <div className="main-wrapper">
                <Routes>
                    <Route path='/Profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path='/Messages' element={<Messages messagesPage={props.state.messagesPage} dispatch={props.dispatch}/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
