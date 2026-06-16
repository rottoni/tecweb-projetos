FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY prisma ./prisma/
RUN npx prisma generate

EXPOSE 3000

# Roda migrations, seed e inicia o servidor
CMD npx prisma migrate deploy && node prisma/seed.js && node src/server.js