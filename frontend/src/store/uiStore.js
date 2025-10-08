import { create } from 'zustand';

/**
 * UI Store - Manages UI state like modals, filters, sorting
 */
export const useUIStore = create((set) => ({
  // Modal state
  isTaskModalOpen: false,
  taskModalMode: 'create', // 'create' | 'edit'
  selectedTaskId: null,

  // Filter state
  statusFilter: 'all', // 'all' | 'pending' | 'in-progress' | 'completed'
  priorityFilter: 'all', // 'all' | 'low' | 'medium' | 'high'
  searchQuery: '',

  // Sort state
  sortBy: 'createdAt', // 'createdAt' | 'priority' | 'status' | 'title'
  sortOrder: 'desc', // 'asc' | 'desc'

  // Actions
  openTaskModal: (mode = 'create', taskId = null) =>
    set({
      isTaskModalOpen: true,
      taskModalMode: mode,
      selectedTaskId: taskId,
    }),

  closeTaskModal: () =>
    set({
      isTaskModalOpen: false,
      selectedTaskId: null,
    }),

  setStatusFilter: (filter) => set({ statusFilter: filter }),
  
  setPriorityFilter: (filter) => set({ priorityFilter: filter }),
  
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  setSortBy: (field) => set({ sortBy: field }),
  
  setSortOrder: (order) => set({ sortOrder: order }),
  
  toggleSortOrder: () =>
    set((state) => ({
      sortOrder: state.sortOrder === 'asc' ? 'desc' : 'asc',
    })),

  resetFilters: () =>
    set({
      statusFilter: 'all',
      priorityFilter: 'all',
      searchQuery: '',
      sortBy: 'createdAt',
      sortOrder: 'desc',
    }),
}));



