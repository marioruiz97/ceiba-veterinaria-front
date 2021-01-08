# stage 1
FROM node:14.15.4-alpine AS build-stage
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# stage 2
FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /usr/src/app/dist/veterinaria-front /usr/share/nginx/html