import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./Pages/Clients/Landing -Page/LandingPage";
import { ToastContainer } from "react-toastify";
import SignUp from "./Pages/Clients/Sign-Up/SignUp";

function App() {
    return (
        <div>
            <Router>
                <ToastContainer />
                <Routes>
                    {/* Clients routes */}
                    <Route
                        path="/"
                        element={<Layout />}
                    >
                        <Route
                            path="/"
                            element={<LandingPage />}
                        />
                        <Route
                            path="/sign-up"
                            element={<SignUp />}
                        />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
