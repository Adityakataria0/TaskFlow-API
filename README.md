echo "# TaskFlow API  
A simple Node.js + Express + MongoDB backend for managing tasks.  

## Features  
- Full CRUD operations  
- MongoDB Atlas for persistence  
- Environment variables with dotenv  
- Easy deployment to AWS EC2  

## How to Run  
1. Clone the repo and install dependencies  
   \`\`\`bash
   git clone https://github.com/Adityakataria0/TaskFlow-API.git  
   cd TaskFlow-API  
   npm install
   \`\`\`  
2. Create a .env file:  
   \`\`\`
   MONGO_URI=your‑mongodb‑uri
   \`\`\`  
3. Start the server  
   \`\`\`
   node server.js
   \`\`\`

## Endpoints  
| Method | Route | Description |  
|--------|--------|--------------|  
| GET | / | API status check |  
| GET | /tasks | Fetch all tasks |  
| POST | /tasks | Create a new task |  
| PATCH | /tasks/:id | Update task |  
| DELETE | /tasks/:id | Remove task |  

---  
Built with 💙 by Aditya." > README.md
