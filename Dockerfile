# build stage
FROM node:lts-alpine as build-stage
RUN npm install -g http-server
WORKDIR /
COPY package*.json ./
RUN npm install && npm run --postinstall
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]