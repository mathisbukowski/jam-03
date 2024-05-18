import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import Hero from "../Components/Hero.jsx";
import ParticlesContainer from "../Components/Particles.jsx";


export default function Home() {
    return (
        <div style={{ position: 'relative', height: '100vh'}}>
            <ParticlesContainer />
            <div style={{ position: 'relative', zIndex: 1 }}>
                <Navbar />
                <Hero />
                <Footer />
            </div>
        </div>
    );
}