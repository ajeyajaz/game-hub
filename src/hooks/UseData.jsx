import { useState, useEffect } from 'react'
import apiClient, { CanceledError } from '../services/api-client';


function useData(endpoint, requestConfig, deps) {
    const [data, setdata] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);

        apiClient.get(endpoint, { signal: controller.signal,  ...requestConfig })
            .then(({ data }) => {
                setdata(data.results);
                setLoading(false);
            })
            .catch(e => {
                if (e instanceof CanceledError) return
                setError(e.message);
                setLoading(false);
            })
        // .finally(()=> setLoading(false))

        return () => controller.abort();
    }, deps ? [...deps] : []);

    return { data, error, isLoading }
}

export default useData