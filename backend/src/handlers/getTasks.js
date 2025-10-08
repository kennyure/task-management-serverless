const { getAllItems } = require('../utils/dynamodb');
const { successResponse, serverErrorResponse } = require('../utils/response');

/**
 * Lambda handler to get all tasks
 */
exports.handler = async (event) => {
  try {
    // Get all tasks from DynamoDB
    const tasks = await getAllItems();

    // Sort by createdAt descending (newest first)
    tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return successResponse(tasks, 'Tasks retrieved successfully');
  } catch (error) {
    console.error('Error getting tasks:', error);
    return serverErrorResponse('Failed to retrieve tasks', error);
  }
};

