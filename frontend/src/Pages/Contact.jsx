import React from 'react';
import Navbar from '../Components/Navbar';
import Footer2 from "../Components/Footer2.jsx";
import {Link} from "react-router-dom";

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center">
                <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-8 text-neutral-950">Contact</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div
                            className="flex flex-col items-center bg-indigo-100 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
                            <img src="/assets/images/contact.png" alt="Contact"
                                 className="w-16 h-16 mb-4 rounded-lg shadow-lg"/>
                            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Nous contacter</h2>
                            <p className="text-gray-700 leading-relaxed text-center">
                                Pour toute question ou pour plus d'informations, n'hésitez pas à nous contacter. Vous
                                pouvez nous joindre par email.
                            </p>
                        </div>

                        <div
                            className="flex flex-col items-center bg-yellow-100 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
                            <img src="/assets/images/support.png" alt="Support"
                                 className="w-16 h-16 mb-4 rounded-lg shadow-lg"/>
                            <h2 className="text-2xl font-semibold text-yellow-600 mb-2">Support</h2>
                            <p className="text-gray-700 leading-relaxed text-center">
                                Si vous avez besoin d'assistance ou de support technique, veuillez consulter notre page
                                de support ou nous contacter directement pour obtenir de l'aide.
                            </p>
                        </div>

                        <div
                            className="flex flex-col items-center bg-red-100 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
                            <img src="/assets/images/feedback.png" alt="Feedback"
                                 className="w-16 h-16 mb-4 rounded-lg shadow-lg"/>
                            <h2 className="text-2xl font-semibold text-red-600 mb-2">Feedback</h2>
                            <p className="text-gray-700 leading-relaxed text-center">
                                Nous apprécions vos retours et suggestions pour améliorer notre plateforme. N'hésitez
                                pas à partager vos idées et commentaires avec nous.
                            </p>
                        </div>
                    </div>
                </div>
                <button className="bg-lineColor w-[200px] rounded-md font-extrabold my-6 py-3 text-textColor mx-[50px] hadow-md transform transition duration-500 hover:scale-110">
                    <Link to="mailto:mathis.bukowski@epitech.eu">Send us an email !</Link>
                </button>
            </div>
            <Footer2/>
        </>
    );
}

export default Contact;
