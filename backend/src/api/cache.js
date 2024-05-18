import { writeFile, readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';
import DataObject from "./dataObject.js";

export default class Cache {
	constructor() {
		this.data = [];

		const __filename = fileURLToPath(import.meta.url);
		const __dirname = path.dirname(__filename);
		this.pathCacheFile = path.join(__dirname, '../../tmp/cache.json');

		this.restoreCacheFromFile();
		
	}

	saveMultipleData(data) {
		for (const obj of data) {
			this.addData(new DataObject(obj));
		}
		this.saveToFile();
	}

	addData(dataObject) {
		if (!this.isDataObjectAlreadySave(dataObject))
			this.data.push(dataObject);
	}

	isDataObjectAlreadySave(dataObject) {
		return this.data.find(e => e.latitude == dataObject.latitude && e.longitude == dataObject.longitude) != undefined;
	}

	saveToFile() {
		const jsonData = JSON.stringify(this.data, null, 2);

		writeFile(this.pathCacheFile, jsonData, 'utf8', (err) => {
			if (err) {
				console.error('Une erreur est survenue lors de l\'écriture dans le fichier JSON', err);
			} else {
				console.log('Cache saved in tmp/cache.json');
			}
		});
	}

	async restoreCacheFromFile() {
		try {
			const data = await readFile(this.pathCacheFile, 'utf8');
			this.data = JSON.parse(data);
			console.log('Cache loaded from tmp file.');
		} catch (err) {
			console.error("Cannot restore cache from tmp file.");
		}
	}
}
