FROM node:21

WORKDIR /src/app

COPY package.json .

#install all dependencies
RUN npm install 

#copy all files that not ignored
COPY . .
#port number
EXPOSE 5001

#npm run start:dev
CMD [ "npm", "run", "start:dev" ]
