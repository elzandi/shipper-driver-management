import { Fragment } from "libraries";
import "assets/scss/layout.scss";

import NavbarContainer from "containers/NavbarContainer";

const MainContainer = (props) => {

    return (
        <Fragment>
            <div className="container">
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