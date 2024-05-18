import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';
import { useEffect } from "react";
import calcDistance from '../utils/calcDistance.js';

const NavigatorComponent = () => {
    useEffect(() => {
        fetch("/api/getAllData")
            .then((res) => {
                res.json()
                    .then((data) => {
                        const allPoints = data.map(e => ({ coords: [e.latitude, e.longitude], style: { fill: 'steelblue' } }));

                        const points = [allPoints[0]]; 
                        let i = 0;
                        for (const obj of allPoints) {
                            i++;
                            console.log(i)
                            let add = 1;
                            // for (const obj2 of points) {
                            //     if (calcDistance(parseFloat(obj.latitude), parseFloat(obj.longitude), parseFloat(obj2.latitude), parseFloat(obj2.longitude)) < 20)
                            //         add = 0;
                            // }
                            if (add)
                                points.push(obj);
                        }
                        console.log(points.length);
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