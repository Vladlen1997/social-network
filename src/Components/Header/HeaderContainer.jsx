import Header from "./Header";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        header: state.header
    }
}

const HeaderContainer = connect(mapStateToProps)(Header);
export default HeaderContainer;