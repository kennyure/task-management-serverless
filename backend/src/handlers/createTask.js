const { v4: uuidv4 } = require('uuid');
const { createItem } = require('../utils/dynamodb');
const { createdResponse, badRequestResponse, serverErrorResponse } = require('../utils/response');

/**
 * Lambda handler to create a new task
 */
exports.handler = async (event) => {
  try {
    // Parse request body
    const body = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!body.title || !body.title.trim()) {
      return badRequestResponse('Title is required');
    }

    // Create task object
    const task = {
      id: uuidv4(),
      title: body.title.trim(),
      description: body.description?.trim() || '',
      status: body.status || 'pending',
      priority: body.priority || 'medium',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Save to DynamoDB
    await createItem(task);

    return createdResponse(task, 'Task created successfully');
  } catch (error) {
    console.error('Error creating task:', error);
    return serverErrorResponse('Failed to create task', error);
  }
};

