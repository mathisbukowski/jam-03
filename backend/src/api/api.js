import csv from "csvtojson";
import Cache from "./cache.js";

class Api {
	constructor() {
		this.cache = new Cache();

		this.default_source = "VIIRS_SNPP_NRT";
		this.responseFormat = "csv";
		this.defaultDayRange = 1;
	}

	build_request_url(...reqParams) {
		let requestUrl = process.env.API_URL;
		
		for (const param of reqParams) {
			requestUrl += `${param}/`;
		}
		return requestUrl;
	}

	make_request(url) {
		return new Promise(async (resolve, reject) => {
			const res = await fetch(url)
			if (res.ok) {
				let result = await res.text();
				csv()
				.fromString(result)
				.then((csvRow)=>{
					resolve(csvRow);
				})
			} else {
				console.log(`Error when fetching ${url}`);
				reject({});
			}
		});
	}

	// /api/country/csv/af59decb78207e9ad43d06166b433fe9/VIIRS_SNPP_NRT/FRA/1
	async get_country_data(countryCode) {
		let currentDate = new Date().toISOString().split('T')[0]
		let cachedData = this.cache.data.filter(e => e.countryId == countryCode && e.acq_date == currentDate)

		if (cachedData.length != 0)
			return cachedData;

		let requestUrl = this.build_request_url("country", this.responseFormat, process.env.API_KEY, this.default_source, countryCode, this.defaultDayRange);
		const res = await this.make_request(requestUrl)
		this.cache.saveMultipleData(res);
		return res;
	}
	
	// /api/area/csv/af59decb78207e9ad43d06166b433fe9/VIIRS_SNPP_NRT/world/1
	async get_all_data() {
		let currentDate = new Date().toISOString().split('T')[0]
		let cachedData = this.cache.data.filter(e => e.countryId == "ALL" && e.acq_date == currentDate)

		if (cachedData.length != 0)
			return cachedData;
		let requestUrl = this.build_request_url("area", this.responseFormat, process.env.API_KEY, this.default_source, "world", this.defaultDayRange);
		const res = await this.make_request(requestUrl)
		res.map(e => ( e.country_id = "ALL"))
		
		this.cache.saveMultipleData(res);
		return res;
	}
}

const api = new Api();
export default api;
