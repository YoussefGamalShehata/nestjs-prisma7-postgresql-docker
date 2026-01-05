FROM node:24-alpine

WORKDIR /app

RUN apk update
RUN apk add nano wget curl

RUN npm install -g pnpm

COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install

COPY prisma .
RUN pnpm run prisma:generate

COPY . .

RUN pnpm run build

ENV MAIN_JS=dist/src/main.js
# CMD ["sh", "-c", "if [ -f $MAIN_JS ]; then node $MAIN_JS; else echo 'Error: $MAIN_JS not found.'; exit 1; fi"]
CMD ["tail", "-f", "/dev/null"]
