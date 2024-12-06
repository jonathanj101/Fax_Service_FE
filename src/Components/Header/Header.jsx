import "./headerStyles.css";

import NavigationBar from "../Navigation-Bar/NavigationBar";

const Header = () => {
    return (
        <div id="header-component">
            {/* <!-- Header --> */}
            <header>
                <NavigationBar />
            </header>
        </div>
    );
};

export default Header;
