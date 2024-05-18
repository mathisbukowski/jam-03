import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import NavPage from "./Pages/NavPage.jsx";


function App() {
    return  (
        <>
            <BrowserRouter>
                <Routes>
                    <Route key={"Home"} element={<Home />} path={"/"} name={"Home"} middleware={[]}/>
                    <Route key={"About"} element={<About />} path={"/about"} name={"About"} middleware={[]}/>
                    <Route key={"Navigator"} element={<NavPage />} path={"/navigator"} name={"Navigator"} middleware={[]}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
