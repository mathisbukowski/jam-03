import DataObject from "./dataObject";

export default class Cache {
	constructor() {
		this.data = [];
	}

	addData(dataObject) {
		if (!this.isDataObjectAlreadySave(dataObject))
			this.data.push(dataObject);
	}

	isDataObjectAlreadySave(dataObject) {
		for (const data of this.data) {
			if (DataObject.equal(data, dataObject))
				return 1;
		}
		return 0;
	}
}