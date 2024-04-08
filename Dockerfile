FROM node:21-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npx prisma generate

EXPOSE ${API_PORT}

ENV TSC_WATCHFILE="PriorityPollingInterval"

CMD ["npm", "run", "start:dev"]
