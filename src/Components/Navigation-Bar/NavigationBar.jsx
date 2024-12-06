import "./navigationBarStyles.css";

const NavigationBar = () => {
    return (
        // <div id="navbar-component">
        <nav id="navbar">
            <div>
                <a
                    href="/"
                    class="logo"
                >
                    FaxService
                </a>
            </div>
            <div>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#support">Support</a>
                <a href="#signup">Sign Up</a>
            </div>
        </nav>
        // </div>
    );
};

export default NavigationBar;
