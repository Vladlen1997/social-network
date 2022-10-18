import './App.css';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import NavBar from "./Components/NavBar/NavBar";

const App = () => {
    return (
        <div className="app">

            <Header/>
            <NavBar/>

            <div className="main-wrapper">
                <Profile/>
            </div>
        </div>
    )
}

export default App;
