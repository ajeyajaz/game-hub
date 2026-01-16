import platforms from '../Data/platform'
import platformService from '../services/platform-service';
import { useQuery } from '@tanstack/react-query';

export default () => {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: platformService.getAll,
        staleTime: 24 * 60 * 60 * 1000, //24h
        initialData: {count:platforms.length, results: platforms}
    })
};