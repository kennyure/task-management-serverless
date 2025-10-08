# API Endpoints - Task Management Backend

## 🌐 Base URL
```
https://b9xjrr67lf.execute-api.us-east-1.amazonaws.com/dev
```

## 📍 Available Endpoints

### 1. Create Task
**POST** `/tasks`

**Request Body:**
```json
{
  "title": "Task title (required)",
  "description": "Task description (optional)",
  "status": "pending | in-progress | completed",
  "priority": "low | medium | high"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Task created successfully",
  "data": {
    "id": "uuid",
    "title": "string",
    "description": "string",
    "status": "string",
    "priority": "string",
    "createdAt": "ISO-8601 timestamp",
    "updatedAt": "ISO-8601 timestamp"
  }
}
```

---

### 2. Get All Tasks
**GET** `/tasks`

**Response:**
```json
{
  "success": true,
  "message": "Tasks retrieved successfully",
  "data": [
    {
      "id": "uuid",
      "title": "string",
      "description": "string",
      "status": "string",
      "priority": "string",
      "createdAt": "ISO-8601 timestamp",
      "updatedAt": "ISO-8601 timestamp"
    }
  ]
}
```

---

### 3. Get Single Task
**GET** `/tasks/{id}`

**Response:**
```json
{
  "success": true,
  "message": "Task retrieved successfully",
  "data": {
    "id": "uuid",
    "title": "string",
    "description": "string",
    "status": "string",
    "priority": "string",
    "createdAt": "ISO-8601 timestamp",
    "updatedAt": "ISO-8601 timestamp"
  }
}
```

---

### 4. Update Task
**PUT** `/tasks/{id}`

**Request Body:**
```json
{
  "title": "Updated title (optional)",
  "description": "Updated description (optional)",
  "status": "pending | in-progress | completed (optional)",
  "priority": "low | medium | high (optional)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Task updated successfully",
  "data": {
    "id": "uuid",
    "title": "string",
    "description": "string",
    "status": "string",
    "priority": "string",
    "createdAt": "ISO-8601 timestamp",
    "updatedAt": "ISO-8601 timestamp"
  }
}
```

---

### 5. Delete Task
**DELETE** `/tasks/{id}`

**Response:**
```json
{
  "success": true,
  "message": "Task deleted successfully",
  "data": {
    "id": "uuid"
  }
}
```

---

## 🧪 Test Examples

### Using cURL:

**Create Task:**
```bash
curl -X POST https://b9xjrr67lf.execute-api.us-east-1.amazonaws.com/dev/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"My Task","description":"Task description","status":"pending","priority":"medium"}'
```

**Get All Tasks:**
```bash
curl https://b9xjrr67lf.execute-api.us-east-1.amazonaws.com/dev/tasks
```

**Get Single Task:**
```bash
curl https://b9xjrr67lf.execute-api.us-east-1.amazonaws.com/dev/tasks/{task-id}
```

**Update Task:**
```bash
curl -X PUT https://b9xjrr67lf.execute-api.us-east-1.amazonaws.com/dev/tasks/{task-id} \
  -H "Content-Type: application/json" \
  -d '{"status":"completed"}'
```

**Delete Task:**
```bash
curl -X DELETE https://b9xjrr67lf.execute-api.us-east-1.amazonaws.com/dev/tasks/{task-id}
```

---

## ✅ Verified Working

All endpoints have been tested and are fully functional:
- ✅ CREATE - Task creation working
- ✅ READ - Get all tasks working
- ✅ READ - Get single task working
- ✅ UPDATE - Task update working
- ✅ DELETE - Task deletion working

## 🔒 CORS Configuration

All endpoints have CORS enabled with:
- `Access-Control-Allow-Origin: *`
- `Access-Control-Allow-Credentials: true`

This allows the frontend to make requests from any domain.

---

**Deployment Date:** October 2, 2025  
**Environment:** Development (dev)  
**Region:** us-east-1


