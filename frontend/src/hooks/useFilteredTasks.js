import { useMemo } from 'react';
import { useUIStore } from '../store/uiStore';

/**
 * Hook to filter and sort tasks based on UI store state
 */
export const useFilteredTasks = (tasks) => {
  const { statusFilter, priorityFilter, searchQuery, sortBy, sortOrder } = useUIStore();

  const filteredAndSortedTasks = useMemo(() => {
    if (!tasks) return [];

    // Filter tasks
    let filtered = tasks.filter((task) => {
      // Status filter
      if (statusFilter !== 'all' && task.status !== statusFilter) {
        return false;
      }

      // Priority filter
      if (priorityFilter !== 'all' && task.priority !== priorityFilter) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = task.title?.toLowerCase().includes(query);
        const matchesDescription = task.description?.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDescription) {
          return false;
        }
      }

      return true;
    });

    // Sort tasks
    filtered.sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case 'title':
          comparison = (a.title || '').localeCompare(b.title || '');
          break;
        
        case 'status':
          comparison = (a.status || '').localeCompare(b.status || '');
          break;
        
        case 'priority':
          const priorityOrder = { low: 1, medium: 2, high: 3 };
          comparison = (priorityOrder[a.priority] || 0) - (priorityOrder[b.priority] || 0);
          break;
        
        case 'updatedAt':
          comparison = new Date(a.updatedAt) - new Date(b.updatedAt);
          break;
        
        case 'createdAt':
        default:
          comparison = new Date(a.createdAt) - new Date(b.createdAt);
          break;
      }

      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [tasks, statusFilter, priorityFilter, searchQuery, sortBy, sortOrder]);

  return filteredAndSortedTasks;
};


