FROM node:14 as build

WORKDIR /app

COPY react-portfolio/package*.json ./

RUN npm install

COPY react-portfolio/ .

RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
