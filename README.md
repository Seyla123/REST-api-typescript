# Todos REST API with Node.js, TypeScript, Sequelize, and Postgres

This project is designed for **learning how to build a REST API with TypeScript**, using tools like **Node.js**, **Express**, **Sequelize**, and **Postgres**. It demonstrates how to structure a backend project, handle CRUD operations, and integrate TypeScript for type safety.

---

## Deployment

The project is deployed and accessible at the following link:

**[Vercel link](https://rest-api-typescript-three.vercel.app/)**

**[my link](https://rest-api-typescript.seavseyla.site/)** 

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
---

# CI/CD Pipeline Overview

This project includes a **CI/CD pipeline** set up using **GitHub Actions** to automate building and deploying the application.

### Key Features of the Pipeline

1. **Build Job**:
   - Checks out the repository.
   - Installs dependencies using `npm ci`.
   - Builds the project and uploads the `dist/` folder as an artifact.

2. **Deploy Job**:
   - Downloads the built artifact.
   - Deploys the `dist` folder to an EC2 instance using `rsync`.
   - Restarts the application using **PM2**.

### Deployment Setup

The application runs on an EC2 instance with **Nginx** acting as a reverse proxy. SSL is configured using **Certbot** for HTTPS.

## CI/CD Script
```
name: CI/CD

on:
  push:
    branches:
      - main  # Adjust as needed

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      dist-path: ${{ steps.upload-artifact.outputs.artifact-path }}
    steps:
      - name: Repository Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "npm"

      - name: Install Dependencies
        run: npm ci

      - name: Build Project
        run: npm run build

      - name : Show Dictionaries
        run: ls -la
      
      - name: Upload dist Folder as Artifact
        id: upload-artifact
        uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist/
      - name: Verify dist contents
        run: ls -la dist/

  deploy:
    runs-on: ubuntu-latest
    needs: build  # Ensures that this job runs after the 'build' job completes
    steps:
      - name: Download dist artifact
        uses: actions/download-artifact@v4
        with:
          name: dist
          path: dist

      - name: Deploy Application
        env:
          SSH_PRIVATE_KEY: ${{ secrets.EC2_SSH_KEY }}
          DEPLOY_HOST: ${{ secrets.EC2_PUBLIC_IP }}
          DIST_DEPLOY_PATH: /home/ubuntu/deploy/dist
        run: |
          set -e
          
          # Install SSH client and rsync
          sudo apt-get update -y 
          sudo apt-get install -y openssh-client rsync

          # Start SSH agent and add the private key
          eval $(ssh-agent -s)
          echo "$SSH_PRIVATE_KEY" | tr -d '\r' > private_key.pem
          chmod 400 private_key.pem

          # Ensure the .ssh directory exists and set permissions
          mkdir -p ~/.ssh
          chmod 700 ~/.ssh

          # Add the host to known hosts to prevent confirmation prompts
          ssh-keyscan -H $DEPLOY_HOST >> ~/.ssh/known_hosts

          # Verify local directory structure
          echo "Contents of the dist directory:"
          ls -la 
          pwd

          # Deploy the `dist` folder to the EC2 instance
          echo "Deploying to EC2 staging..."
          ls -la /home/runner/work/REST-api-typescript/REST-api-typescript
          rsync -avz -e "ssh -i private_key.pem" ./dist/ ubuntu@$DEPLOY_HOST:$DIST_DEPLOY_PATH

          # Run verification commands on the remote server
          ssh -i "private_key.pem" ubuntu@$DEPLOY_HOST "
            pm2 restart my-node-app
            echo 'Deployment complete!' && 
            ls -l $DIST_DEPLOY_PATH
          "

          # Clean up the private key file
          rm -f private_key.pem
          
          # Stop the SSH agent
          eval $(ssh-agent -k)
```

Thank you for checking out this project! Feedback and suggestions are always welcome.
