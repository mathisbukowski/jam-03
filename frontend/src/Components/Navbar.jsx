import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
                <div className="flex items-center mt-2">
                    <img src={"logo-transparent.png"}
                         className="hidden md:block w-auto h-auto max-w-[150px] max-h-[150px]" alt={"Logo"}/>
                    <h1 className="hidden md:block text-3xl font-bold text-textColor font-sans ml-4">
                        <Link to="/">Sam.</Link>
                    </h1>
                </div>
                <ul className="hidden md:flex">
                    <li className="p-4 text-textColor font-bold text-center text-xl hover:text-lineColor">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="p-4 text-textColor font-bold text-center text-xl hover:text-lineColor">
                        <Link to="/about">Navigator</Link>
                    </li>
                    <li className="p-4 text-textColor font-bold text-center text-xl hover:text-lineColor">
                        <Link to="/about">Documentation</Link>
                    </li>
                    <li className="p-4 text-textColor font-bold text-center text-xl hover:text-lineColor">
                        <Link to="/about">Contact</Link>
                    </li>
                </ul>
            </div>

        </>

    );
}

export default Navbar;