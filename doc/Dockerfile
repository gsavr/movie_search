FROM node:alpine

ADD . /opt/webapp/
WORKDIR /opt/webapp/

RUN npm run build

RUN adduser -D myuser
USER myuser

CMD ["npm", "start"] --bind 0.0.0.0:$PORT wsgi