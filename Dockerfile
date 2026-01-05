FROM node:24-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install

COPY prisma ./prisma
RUN pnpm run prisma:generate

COPY . .

RUN pnpm run build

CMD ["node", "dist/src/main.js"]
# CMD ["tail", "-f", "/dev/null"]
