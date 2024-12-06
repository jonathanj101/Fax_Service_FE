import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./Pages/Clients/Landing -Page/LandingPage";

function App() {
    return (
        <div>
            <Router>
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
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
