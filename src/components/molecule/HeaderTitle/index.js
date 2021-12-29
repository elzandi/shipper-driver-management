import "assets/scss/header.scss";

const HeaderTitle = (props) => {

    return (
        <div className="header">
            <div className="header__title">
                <h1 className="font__size--26 font__weight--700 color__primary text__transform--uppercase">{props.title}</h1>
                <h5 className="font__weight--400">{props.description}</h5>
            </div>
            <div className="header__content">
                {props.children}
            </div>
        </div>
    );
};

export default HeaderTitle;