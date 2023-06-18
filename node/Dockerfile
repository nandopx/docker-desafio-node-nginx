FROM node:15

WORKDIR /usr/src/app

RUN npm install express --save
RUN npm install mysql --save
RUN npm install gerador-nome --save

COPY index.js .

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]