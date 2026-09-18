# syntax=docker/dockerfile:1

FROM node:24-bookworm-slim AS base
WORKDIR /opt/app

# better-sqlite3 may need to compile a native binding for the target platform.
RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 make g++ \
  && rm -rf /var/lib/apt/lists/*

FROM base AS dependencies
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

FROM dependencies AS build
COPY . .
ENV NODE_ENV=production
RUN npm run build

FROM node:24-bookworm-slim AS production
WORKDIR /opt/app
ENV NODE_ENV=production

COPY --from=build /opt/app/package.json /opt/app/package-lock.json ./
COPY --from=build /opt/app/node_modules ./node_modules
COPY --from=build /opt/app/config ./config
COPY --from=build /opt/app/database ./database
COPY --from=build /opt/app/src ./src
COPY --from=build /opt/app/public ./public
COPY --from=build /opt/app/tsconfig.json ./tsconfig.json
COPY --from=build /opt/app/dist ./dist

RUN mkdir -p .tmp public/uploads \
  && chown -R node:node /opt/app

USER node
EXPOSE 1337
CMD ["npm", "run", "start"]
