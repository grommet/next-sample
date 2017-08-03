
FROM node:alpine

ENV http_proxy http://web-proxy.corp.hp.com:8088
ENV https_proxy http://web-proxy.corp.hp.com:8088

RUN npm install http-server -g

WORKDIR /tmp
COPY package.json /tmp/
RUN yarn install
WORKDIR /var/html/app
COPY . /var/html/app/
RUN cp -a /tmp/node_modules /var/html/app/
RUN npm run dist

WORKDIR /var/html/app/dist

CMD http-server
