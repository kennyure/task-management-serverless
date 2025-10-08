import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTasks, fetchTask, createTask, updateTask, deleteTask } from '../api/tasks';

// Query keys
export const QUERY_KEYS = {
  tasks: ['tasks'],
  task: (id) => ['tasks', id],
};

/**
 * Hook to fetch all tasks
 */
export const useTasks = () => {
  return useQuery({
    queryKey: QUERY_KEYS.tasks,
    queryFn: fetchTasks,
    staleTime: 30000, // Data is fresh for 30 seconds
    cacheTime: 300000, // Cache for 5 minutes
  });
};

/**
 * Hook to fetch a single task
 */
export const useTask = (id) => {
  return useQuery({
    queryKey: QUERY_KEYS.task(id),
    queryFn: () => fetchTask(id),
    enabled: !!id, // Only run query if id exists
  });
};

/**
 * Hook to create a new task
 */
export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      // Invalidate and refetch tasks query
      queryClient.invalidateQueries(QUERY_KEYS.tasks);
    },
  });
};

/**
 * Hook to update an existing task
 */
export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTask,
    onMutate: async (updatedTask) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries(QUERY_KEYS.tasks);

      // Snapshot previous value
      const previousTasks = queryClient.getQueryData(QUERY_KEYS.tasks);

      // Optimistically update to the new value
      queryClient.setQueryData(QUERY_KEYS.tasks, (old) => {
        if (!old) return old;
        return old.map((task) =>
          task.id === updatedTask.id ? { ...task, ...updatedTask } : task
        );
      });

      // Return context with the previous value
      return { previousTasks };
    },
    onError: (err, variables, context) => {
      // Rollback on error
      if (context?.previousTasks) {
        queryClient.setQueryData(QUERY_KEYS.tasks, context.previousTasks);
      }
    },
    onSettled: () => {
      // Always refetch after error or success
      queryClient.invalidateQueries(QUERY_KEYS.tasks);
    },
  });
};

/**
 * Hook to delete a task
 */
export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,
    onMutate: async (taskId) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries(QUERY_KEYS.tasks);

      // Snapshot previous value
      const previousTasks = queryClient.getQueryData(QUERY_KEYS.tasks);

      // Optimistically remove the task
      queryClient.setQueryData(QUERY_KEYS.tasks, (old) => {
        if (!old) return old;
        return old.filter((task) => task.id !== taskId);
      });

      // Return context with the previous value
      return { previousTasks };
    },
    onError: (err, variables, context) => {
      // Rollback on error
      if (context?.previousTasks) {
        queryClient.setQueryData(QUERY_KEYS.tasks, context.previousTasks);
      }
    },
    onSettled: () => {
      // Always refetch after error or success
      queryClient.invalidateQueries(QUERY_KEYS.tasks);
    },
  });
};



