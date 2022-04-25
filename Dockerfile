FROM node:17-alpine

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "start"]