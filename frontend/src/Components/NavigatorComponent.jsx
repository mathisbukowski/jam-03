import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';
import { useEffect } from "react";

const NavigatorComponent = () => {
    useEffect(() => {
        fetch("/api/getData/FRA")
            .then((res) => {
                res.json()
                    .then((data) => {
                        const points = data.map(e => ({ coords: [e.latitude, e.longitude], style: { fill: 'steelblue' } }));

                        const map = new jsVectorMap({
                            selector: "#map",
                            markers: points,
                            showTooltip: false,
                            zoomOnScroll: true
                        });
                        return () => {
                            map.destroy();
                        };
                    });
            });
    }, [])
    return (
        <div className="mt-[50px] flex justify-center items-center h-screen">
            <div className="relative" style={{width: '80%', height: '80vh'}}>
                <div id="map" style={{width: "100%", height: "100%"}}></div>
            </div>
        </div>
    );
}

export default NavigatorComponent;