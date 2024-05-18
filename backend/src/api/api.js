import Cache from "./cache";

class Api {
	constructor() {
		this.cache = new Cache();
		console.log("Api connection initialized.");
	}

	async makeRequest(url) {
		console.log(process.env.REACT_APP_API_KEY);
	}
}

const api = new Api();
export default api;
