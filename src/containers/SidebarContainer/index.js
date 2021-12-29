import { Fragment, Link } from "libraries";
import { logo } from "libraries/image";
import { AiOutlineHome, AiOutlineTeam, AiTwotoneCalendar } from "libraries/icon";

const SidebarContainer = () => {

    const showMenu = false;

    return (
        <Fragment>
            {showMenu &&
                <div className="overlay" />
            }
            <div className={`sidebar ${showMenu ? 'show' : ''}`}>
                <div className="logo margin__bottom--16px">
                    <img src={logo.image} alt={logo.alt} />
                </div>
                <div className="sidebar__menu">
                    <Link to="/"><AiOutlineHome className="icon" /> Beranda</Link>
                    <Link to="/" className="active"><AiOutlineTeam className="icon" /> Driver Management</Link>
                    <Link to="/"><AiTwotoneCalendar className="icon" /> Pickup</Link>
                </div>
            </div>
        </Fragment>
    );
};

export default SidebarContainer;