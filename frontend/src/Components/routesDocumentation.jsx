import useSWR from 'swr';
import ApiStatus from './apiStatus';

const DocRoute = () => {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-4xl w-full">
                <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900">API Documentation</h1>
                <section className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">Route 1: Get Data from a country</h2>
                    <p><strong>Endpoint:</strong> <code className="bg-gray-200 rounded px-2 py-1">/getData/:countryCode</code></p>
                    <p><strong>Method:</strong> GET</p>
                    <p><strong>Description:</strong> Return an array with wildfires of a country.</p>
                    <p><strong>Response:</strong></p>
                    <pre className="bg-gray-100 border border-gray-300 p-4 rounded shadow-inner mt-2"><code>{`{
    "object": "{
    "countryId": "FRA",
    "latitude": "43.43806",
    "longitude": "4.892",
    "bright_ti4": "317.04",
    "scan": "0.5",
    "track": "0.49",
    "acq_date": "2024-05-18",
    "acq_time": "102",
    "satellite": "N",
    "instrument": "VIIRS",
    "confidence": "n",
    "version": "2.0NRT",
    "bright_ti5": "281.63",
    "frp": "2.14",
    "daynight": "N"
  },"
}`}</code></pre>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">Route 2: Get the cached data</h2>
                    <p><strong>Endpoint:</strong> <code className="bg-gray-200 rounded px-2 py-1">/getCachedData</code></p>
                    <p><strong>Method:</strong> GET</p>
                    <p><strong>Description:</strong> Return an array with the cached data.</p>
                    <p><strong>Response:</strong></p>
                    <pre className="bg-gray-100 border border-gray-300 p-4 rounded shadow-inner mt-2"><code>{`{
    "object": "{
    "countryId": "FRA",
    "latitude": "43.43806",
    "longitude": "4.892",
    "bright_ti4": "317.04",
    "scan": "0.5",
    "track": "0.49",
    "acq_date": "2024-05-18",
    "acq_time": "102",
    "satellite": "N",
    "instrument": "VIIRS",
    "confidence": "n",
    "version": "2.0NRT",
    "bright_ti5": "281.63",
    "frp": "2.14",
    "daynight": "N"
  },"
}`}</code></pre>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">Route 3: Get All Data of World</h2>
                    <p><strong>Endpoint:</strong> <code className="bg-gray-200 rounded px-2 py-1">/getAllData</code></p>
                    <p><strong>Method:</strong> GET</p>
                    <p><strong>Description:</strong> Return an array with wildfires of all the world.</p>
                    <p><strong>Response:</strong></p>
                    <pre className="bg-gray-100 border border-gray-300 p-4 rounded shadow-inner mt-2"><code>{`{
    "object": "{
    "countryId": "FRA",
    "latitude": "43.43806",
    "longitude": "4.892",
    "bright_ti4": "317.04",
    "scan": "0.5",
    "track": "0.49",
    "acq_date": "2024-05-18",
    "acq_time": "102",
    "satellite": "N",
    "instrument": "VIIRS",
    "confidence": "n",
    "version": "2.0NRT",
    "bright_ti5": "281.63",
    "frp": "2.14",
    "daynight": "N"
  },"
}`}</code></pre>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">Status: API Status</h2>
                    <p><strong>Endpoint:</strong> <code className="bg-gray-200 rounded px-2 py-1">/api/status</code></p>
                    <p><strong>Method:</strong> GET</p>
                    <p><strong>Description:</strong> This endpoint returns the status of the API.</p>
                    <p><strong>Latency: </strong><ApiStatus /></p>
                </section>
            </div>
        </div>
    );
}

export default DocRoute;
