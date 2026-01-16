import platforms from '../Data/platform'
import axios from '../services/api-client'
import { useQuery } from '@tanstack/react-query';

export default () => {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: () => (
            axios.get('/platforms/lists/parents')
            .then(res => res.data)
        ),
        staleTime: 24 * 60 * 60 * 1000, //24h
        initialData: {count:platforms.length, results: platforms}
    })
};