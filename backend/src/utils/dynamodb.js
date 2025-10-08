const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, PutCommand, GetCommand, UpdateCommand, DeleteCommand, ScanCommand } = require('@aws-sdk/lib-dynamodb');

// Initialize DynamoDB Client
const client = new DynamoDBClient({ region: process.env.AWS_REGION || 'us-east-1' });
const dynamoDb = DynamoDBDocumentClient.from(client);

const TABLE_NAME = process.env.TASKS_TABLE;

/**
 * Create a new item in DynamoDB
 */
const createItem = async (item) => {
  const params = {
    TableName: TABLE_NAME,
    Item: item,
  };

  await dynamoDb.send(new PutCommand(params));
  return item;
};

/**
 * Get a single item from DynamoDB
 */
const getItem = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  };

  const result = await dynamoDb.send(new GetCommand(params));
  return result.Item;
};

/**
 * Get all items from DynamoDB
 */
const getAllItems = async () => {
  const params = {
    TableName: TABLE_NAME,
  };

  const result = await dynamoDb.send(new ScanCommand(params));
  return result.Items || [];
};

/**
 * Update an item in DynamoDB
 */
const updateItem = async (id, updates) => {
  // Build update expression dynamically
  const updateExpressionParts = [];
  const expressionAttributeNames = {};
  const expressionAttributeValues = {};

  Object.keys(updates).forEach((key) => {
    updateExpressionParts.push(`#${key} = :${key}`);
    expressionAttributeNames[`#${key}`] = key;
    expressionAttributeValues[`:${key}`] = updates[key];
  });

  const params = {
    TableName: TABLE_NAME,
    Key: { id },
    UpdateExpression: `SET ${updateExpressionParts.join(', ')}`,
    ExpressionAttributeNames: expressionAttributeNames,
    ExpressionAttributeValues: expressionAttributeValues,
    ReturnValues: 'ALL_NEW',
  };

  const result = await dynamoDb.send(new UpdateCommand(params));
  return result.Attributes;
};

/**
 * Delete an item from DynamoDB
 */
const deleteItem = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
    ReturnValues: 'ALL_OLD',
  };

  const result = await dynamoDb.send(new DeleteCommand(params));
  return result.Attributes;
};

module.exports = {
  createItem,
  getItem,
  getAllItems,
  updateItem,
  deleteItem,
};

