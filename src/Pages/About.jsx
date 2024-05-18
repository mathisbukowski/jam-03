import React from 'react';
import Navbar from '../Components/Navbar';

const About = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto p-6 font-sans">
                <h1 className="text-4xl font-bold text-center mb-8 text-neutral-950">À propos de Sam</h1>

                <section className="mb-8 flex items-center bg-indigo-100 p-4 rounded-lg shadow-md">
                    <img src="/assets/images/forest_fire.png" alt="Illustration de feux de forêt" className="w-32 h-32 mr-4 rounded-lg shadow-lg"/>
                    <div>
                        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Introduction</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Bienvenue sur Sam, votre source d'information fiable et actualisée sur les feux de forêt dans le monde. Notre mission est de fournir des informations précises et en temps réel sur les feux de forêt afin de sensibiliser le public et d'aider à la prévention et à la gestion des risques.
                        </p>
                    </div>
                </section>

                <section className="mb-8 flex items-center bg-yellow-100 p-4 rounded-lg shadow-md">
                    <img src="/assets/images/fire_protection.png" alt="Illustration de prévention des incendies" className="w-32 h-32 mr-4 rounded-lg shadow-lg"/>
                    <div>
                        <h2 className="text-2xl font-semibold text-yellow-600 mb-2">Mission et Objectifs</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Notre mission est de sensibiliser le public aux dangers des feux de forêt, de fournir des informations cruciales pour la prévention et de soutenir les efforts de lutte contre les incendies. Nous visons à être une ressource incontournable pour les citoyens, les pompiers et les autorités locales.
                        </p>
                    </div>
                </section>

                <section className="mb-8 flex items-center bg-red-100 p-4 rounded-lg shadow-md">
                    <img src="/assets/images/historical_context.png" alt="Illustration d'histoire et de contexte" className="w-32 h-32 mr-4 rounded-lg shadow-lg"/>
                    <div>
                        <h2 className="text-2xl font-semibold text-red-600 mb-2">Histoire et Contexte</h2>
                        <p className="text-gray-700 leading-relaxed">
                            L'idée de Sam est née après un été particulièrement destructeur en 2021, où de nombreux feux de forêt ont ravagé notre région. Nous avons constaté un besoin urgent d'informations centralisées et accessibles pour aider à prévenir de telles catastrophes à l'avenir.
                        </p>
                    </div>
                </section>

                <section className="mb-8 flex items-center bg-green-100 p-4 rounded-lg shadow-md">
                    <img src="/assets/images/technology.png" alt="Illustration de technologie" className="w-32 h-32 mr-4 rounded-lg shadow-lg"/>
                    <div>
                        <h2 className="text-2xl font-semibold text-green-600 mb-2">Technologie et Méthodologie</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Nous utilisons des données satellites, des rapports des services de pompiers et des contributions de citoyens pour assurer la précision et l'actualité de nos informations. Nos algorithmes analytiques nous permettent de détecter rapidement les nouveaux foyers d'incendie.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}

export default About;
