# 1: build
FROM node:latest AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# 2: execucao
RUN npm run build

# 3: prod
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
