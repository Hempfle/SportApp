FROM node:13.6
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 5000
CMD [ "node", "server.js" ]