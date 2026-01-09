# 1) Build step
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build
RUN npm run export

# 2) Nginx step
FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
