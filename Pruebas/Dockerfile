FROM node:20-alpine3.17

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

EXPOSE 3000

RUN npm i

CMD ["npm", "start"]
