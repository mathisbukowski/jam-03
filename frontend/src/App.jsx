import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import NavPage from "./Pages/NavPage.jsx";
import Documentation from "./Pages/Documentation.jsx";


function App() {
    return  (
        <>
            <BrowserRouter>
                <Routes>
                    <Route key={"Home"} element={<Home />} path={"/"} name={"Home"} middleware={[]}/>
                    <Route key={"About"} element={<About />} path={"/about"} name={"About"} middleware={[]}/>
                    <Route key={"Navigator"} element={<NavPage />} path={"/navigator"} name={"Navigator"} middleware={[]}/>
                    <Route key={"Contact"} element={<Contact />} path={"/contact"} name={"Contact"} middleware={[]}/>
                    <Route key={"Documentation"} element={<Documentation />} path={"/documentation"} name={"Documentation"} middleware={[]}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
