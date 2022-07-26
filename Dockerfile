FROM node:16-alpine
LABEL maintainer="geonil2@gmail.com"
WORKDIR /app
COPY . .
RUN cd ./frontend && npm install && npm run build
RUN npm install && npm run build
CMD ["node", "./backend/dist/app.js"]
