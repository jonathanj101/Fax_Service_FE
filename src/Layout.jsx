/* 
This file is created to ensure the default layout of the app  and having the Header and Footer display acroos all pages 

*/

import { Outlet } from "react-router-dom";

// Client components
import Header from "../src/Components/Header/Header";
import Footer from "../src/Components/Footer/Footer";

const Layout = () => {
    return (
        <div id="layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;