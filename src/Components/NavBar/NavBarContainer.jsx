import NavBar from "./NavBar";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        navBar: state.navBar
    }
}

const NavBarContainer = connect(mapStateToProps)(NavBar);


export default NavBarContainer;