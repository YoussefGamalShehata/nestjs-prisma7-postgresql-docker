FROM node:24-alpine

WORKDIR /app

COPY prisma .
COPY package*.json ./
RUN npm install
RUN npm run prisma:generate

COPY . .
RUN npm run build

# CMD ["node", "dist/main.js"]
CMD ["tail", "-f", "/dev/null"]
