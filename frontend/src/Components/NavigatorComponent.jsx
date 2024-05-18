import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';
import { useEffect } from "react";
import calcDistance from '../utils/calcDistance.js';
import simplify from "simplify-js";

const NavigatorComponent = () => {
    useEffect(() => {
        fetch("/api/getAllData")
            .then((res) => {
                res.json()
                    .then((data) => {
                        const allPoints = data.map(e => ({x: +e.latitude, y: +e.longitude}));

                        const points = simplify(allPoints, 0.5, 1).map(e => ({ coords: [e.x, e.y], style: { fill: 'steelblue' } }));    
                        const map = new jsVectorMap({
                            selector: "#map",
                            showTooltip: false,
                            zoomOnScroll: true,
                            markers: points
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