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
                            markers: points
                        });
                        return () => {
                            map.destroy();
                        };
                    });
            });
    }, [])
    return (
        <div className="h-400 w-400 relative">
            <div id="map" style={{width: "100%", height: "80vh"}} className='m-5'></div>
        </div>
    );
}

export default NavigatorComponent;