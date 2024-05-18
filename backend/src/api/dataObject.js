import { isEqual } from "lodash";

export default class DataObject {
    constructor({
        latitude,
        longitude,
        bright_ti4,
        scan,
        track,
        acq_date,
        acq_time,
        satellite,
        instrument,
        confidence,
        version,
        bright_ti5,
        frp,
        daynight
    }) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.bright_ti4 = bright_ti4;
        this.scan = scan;
        this.track = track;
        this.acq_date = acq_date;
        this.acq_time = acq_time;
        this.satellite = satellite;
        this.instrument = instrument;
        this.confidence = confidence;
        this.version = version;
        this.bright_ti5 = bright_ti5;
        this.frp = frp;
        this.daynight = daynight;
    }

	static equal(dataObject1, dataObject2) {
		return isEqual(dataObject1, dataObject2);
	}
}
