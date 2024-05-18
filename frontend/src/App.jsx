import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/contact.jsx";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


function App() {
    return  (
        <>
            <BrowserRouter>
                <Routes>
                    <Route key={"Home"} element={<Home />} path={"/"} name={"Home"} middleware={[]}/>
                    <Route key={"About"} element={<About />} path={"/about"} name={"About"} middleware={[]}/>
                    <Route key={"Contact"} element={<Contact />} path={"/contact"} name={"Contact"} middleware={[]}/>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
