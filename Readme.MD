Scalable REST API with Authentication & Role-Based Access

Tech Stack Used: 
Node.js
Express
PostgreSQL
JWT Authentication
React

Features: 

User registration and login
JWT authentication
Role-based access
CRUD Notes API
API versioning (/api/v1)

How to do the Setup: 

1) clone repo
2) cd backend
3) npm install
4) create .env

PG_USER=

PG_HOST=

PG_DATABASE=

PG_PASSWORD=

PG_PORT=

JWT_SECRET=


5) npm start

SCALABLITY: 

The project uses modular architecture separating routes,
controllers, middleware, and database configuration.

API versioning allows future upgrades without breaking clients.

JWT authentication enables stateless horizontal scaling.

Future scalability improvements could include: 

• Redis caching

• Docker containerization

• Load balancing

• Microservice architecture
