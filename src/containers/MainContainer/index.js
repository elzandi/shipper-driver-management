import { Fragment } from "libraries";
import "assets/scss/layout.scss";

import NavbarContainer from "containers/NavbarContainer";
import SidebarContainer from "containers/SidebarContainer";

const MainContainer = (props) => {

    return (
        <Fragment>
            <div className="container">
                <SidebarContainer />
                <div className="main__layout">
                    <NavbarContainer />
                </div>
                <div className="main__content">
                    {props.children}
                </div>
            </div>
        </Fragment>
    );
};

export default MainContainer;