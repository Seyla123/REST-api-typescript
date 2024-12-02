FROM node:22-alpine

WORKDIR /app

COPY package*.json .env ./

RUN npm install

COPY . .

RUN npm run build

ENV PORT=8000

EXPOSE 8000

CMD ["npm", "run", "start"]
