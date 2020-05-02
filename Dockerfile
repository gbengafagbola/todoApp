# specify a base image
FROM node:alpine 

WORKDIR /usr/app

# making copy of the files to the container
COPY ./package.json ./

#Install dependencies
RUN npm install

COPY ./ ./


EXPOSE 3000

#Default comand
CMD ["npm", "start", "production"]