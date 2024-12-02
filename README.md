# Todos REST API with Node.js, TypeScript, Sequelize, and Postgres

This project is designed for **learning how to build a REST API with TypeScript**, using tools like **Node.js**, **Express**, **Sequelize**, and **Postgres**. It demonstrates how to structure a backend project, handle CRUD operations, and integrate TypeScript for type safety.

---

## Learning Objectives

- Understand how to build a RESTful API with **Node.js** and **Express**.
- Learn how to use **TypeScript** for better type safety in backend development.
- Use **Sequelize** as an ORM to interact with an Postgres database.
- Practice building CRUD operations for managing resources.

---

## Features

- Create, read, update, and delete (CRUD) todos.
- TypeScript integration for enhanced code quality.
- Organized project structure for maintainability.
- Postgres database setup for development.
- Sequelize ORM for database interactions.

---

## Project Structure

```plaintext
REST-API-TYPESCRIPT
├── src
│   ├── config
│   │   └── database.config.ts     # Database configuration
│   ├── controller
│   │   └── todoController.ts      # Controller logic for todos
│   ├── model
│   │   └── index.ts               # Sequelize models definition
│   ├── routes
│   │   ├── index.ts               # Entry point for routes
│   │   └── todoRoute.ts           # Routes for todos
│   ├── app.ts                     # Express app setup
│   └── server.ts                  # Server entry point
├── .env                           # Environment variables
├── package.json                   # Project dependencies
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # Documentation
```

Thank you for checking out this project! Feedback and suggestions are always welcome.
