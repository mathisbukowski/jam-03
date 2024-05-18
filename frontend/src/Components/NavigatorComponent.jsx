import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';
import { useEffect } from "react";

const NavigatorComponent = () => {
    useEffect(() => {
        const map = new jsVectorMap({
            selector: "#map",
        });
        map.setBackgroundColor("#FFFFFF")
        return () => {
            map.destroy();
        };
    }, [])
    return (
        <div className="h-400 w-400 relative">
            <div id="map" style={{width: "100%", height: "100%"}}></div>
        </div>
    );
}

export default NavigatorComponent;