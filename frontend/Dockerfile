FROM node:latest

# Create app directory
ADD webpack.common.js /code/webpack.common.js
ADD /src /code/src
ADD /public /code/public
ADD package.json /code/package.json

WORKDIR /code

RUN npm install
CMD ["npm", "run", "start"]
