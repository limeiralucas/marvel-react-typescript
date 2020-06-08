FROM node:14.4.0

ADD package.json /code/
WORKDIR /code

RUN yarn install

ADD . /code

EXPOSE 3000

CMD yarn start