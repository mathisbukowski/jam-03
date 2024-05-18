import {
    FaGithubSquare,
    FaDatabase
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer2 = () => {
    return (
        <div className="max-w-[1240px] mx-auto py-16 px-4 flex flex-col lg:flex-row items-center text-gray-300">
            <div className="lg:mr-8">
                <h1 className="w-full text-3xl font-bold text-textColor font-kode">Sam.</h1>
                <p className="py-4 text-textColor text-lg">
                    A project made for treating the <a href="https://firms.modaps.eosdis.nasa.gov/api/area/" className="text-[#223240] font-extrabold" target='_blank'>FIRMS Data from NASA</a>
                </p>
            </div>
            <div className="lg:col-span-2 flex justify-center lg:justify-between mt-[16px] mx-[150px]">
                <div className="mr-20">
                    <h6 className="font-extrabold text-textColor text-xl">Support</h6>
                    <ul>
                        <li className="py-2 text-lg text-[#223240]"><Link to="/Documentation">Documentation</Link>
                        </li>
                        <li className="py-2 text-lg text-[#223240]"><Link to="/Documentation#api-status">API
                            Status</Link></li>
                    </ul>
                </div>
                <div className="mr-20">
                    <h6 className="font-extrabold text-textColor text-xl">Company</h6>
                    <ul>
                        <li className="py-2 text-lg text-[#223240]"><Link to="/About">About Us</Link></li>
                        <li className="py-2 text-lg text-[#223240]"><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="flex justify-start md:w-[75%] my-4">
                    <Link to="https://github.com/mathisbukowski/jam-03" target='_blank'>
                        <FaGithubSquare size={30} className="my-[12px] mr-4" color="#223240"/>
                    </Link>
                    <Link to="https://firms.modaps.eosdis.nasa.gov/api/area/" target='_blank'>
                        <FaDatabase size={30} className="my-[12px]" color="#223240"/>
                    </Link>
                </div>
            </div>
        </div>
    );

};

export default Footer2;