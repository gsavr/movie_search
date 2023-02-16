FROM node:alpine

WORKDIR /movie-search

COPY . .

RUN npm install

RUN npm run build

RUN adduser -D myuser
USER myuser

CMD ["npm", "start"]