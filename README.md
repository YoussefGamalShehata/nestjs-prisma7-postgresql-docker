# nestjs-prisma7-postgresql-docker

A professional example project demonstrating how to use **Prisma 7.2.0** (released just 3 weeks ago, after 6.9.1, with breaking changes) in a modern **NestJS** application with **TypeScript** and **PostgreSQL**. All running in Docker.

## Story & Motivation

As the technical manager of an engineering team, I noticed that upgrading to Prisma 7.2.0 was a challenge for many developers due to its breaking changes. To help my team (and the community), I created this repository as a clear, working example: **Upgrading Prisma is easy—like a piece of cake!**

## Features
- Prisma 7.2.0 integration (with breaking changes handled)
- NestJS 10.x, TypeScript
- PostgreSQL database
- Dockerized for easy local development
- Customizable ports for both API and database

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/BaseMax/nestjs-prisma7-postgresql-docker.git
cd nestjs-prisma7-postgresql-docker
```

### 2. Build and run with Docker Compose

```bash
docker compose up --build
```

- API will be available at [http://localhost:4000](http://localhost:4000)
- PostgreSQL will be available at `localhost:5433`

### 3. Custom Ports

- Change ports in `docker-compose.yml` and `src/main.ts` as needed.

## Prisma 7.2.0 Notes

- Prisma 7+ introduces a new client generation and import style. This repo uses the generated client from `src/generated/prisma`.
- See [Prisma 7 upgrade guide](https://www.prisma.io/docs/orm/prisma-client/upgrade-guides/upgrade-guide-7) for more details.

## License

MIT © Seyyed Ali Mohammadiyeh
