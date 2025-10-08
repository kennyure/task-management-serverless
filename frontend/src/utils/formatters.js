import { format, formatDistanceToNow } from 'date-fns';

/**
 * Format a date to a readable string
 */
export const formatDate = (dateString) => {
  try {
    const date = new Date(dateString);
    return format(date, 'MMM dd, yyyy');
  } catch (error) {
    return dateString;
  }
};

/**
 * Format a date to show relative time (e.g., "2 hours ago")
 */
export const formatRelativeTime = (dateString) => {
  try {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  } catch (error) {
    return dateString;
  }
};

/**
 * Format a date and time
 */
export const formatDateTime = (dateString) => {
  try {
    const date = new Date(dateString);
    return format(date, 'MMM dd, yyyy hh:mm a');
  } catch (error) {
    return dateString;
  }
};

/**
 * Truncate text to a specific length
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Capitalize first letter
 */
export const capitalizeFirst = (text) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Get color for task status
 */
export const getStatusColor = (status) => {
  const colors = {
    pending: 'gray',
    'in-progress': 'blue',
    completed: 'green',
  };
  return colors[status] || 'gray';
};

/**
 * Get color for task priority
 */
export const getPriorityColor = (priority) => {
  const colors = {
    low: 'green',
    medium: 'yellow',
    high: 'red',
  };
  return colors[priority] || 'gray';
};
