import { Link } from 'react-router-dom';
import  useSWR from 'swr';

const ApiStatus = () => {
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const {data: api_latency, error, isLoading} = useSWR('/api/status', fetcher);

    if (error) {console.log(error); return <div>Failed to load API status</div>;}
    if (isLoading) return <div>Loading API status...</div>;

    return (
        <span>{api_latency.latency ? api_latency.latency + " ms" : api_latency.error}</span>
    );
};

export default ApiStatus;