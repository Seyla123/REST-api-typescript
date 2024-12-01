FROM node:22-alpine

WORKDIR /app

# Install build dependencies
RUN apk add --no-cache python3 make g++

COPY package*.json ./

RUN npm install

# Rebuild sqlite3 for compatibility
RUN npm rebuild sqlite3

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]
