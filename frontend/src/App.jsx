import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
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
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
