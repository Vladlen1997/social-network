import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import NavBar from "./Components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import MessagesContainer from "./Components/Messages/MessagesContainer";

const App = (props) => {
    return (
        <div className="app">

            <Header header={props.state.header}/>
            <NavBar navBar={props.state.navBar}/>

            <div className="main-wrapper">
                <Routes>
                    <Route path='/Profile' element={<Profile store={props.store}/>}/>
                    <Route path='/Messages' element={<MessagesContainer store={props.store}/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
