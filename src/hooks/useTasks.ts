import { useQuery } from '@tanstack/react-query';
import { TaskRow } from '@/types/task';

export function useTasks() {
    return useQuery<TaskRow[]>({
        queryKey: ['tasks'],
        queryFn: async () => {
            const response = await fetch('/api/tasks');
            return response.json();
        },
        staleTime: 1000 * 60, // 1 minute
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
    });
}