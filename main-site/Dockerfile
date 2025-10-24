#Stage 1: build
FROM node:20-alpine AS builder
WORKDIR /app

# for private registries or need ca-certificates uncomment
# RUN apk add --no-cache ca-certificates

# copy package files first for caching
COPY package.json ./
COPY next.config.mjs ./
# Use npm ci if you have package-lock.json, otherwise npm install
RUN if [-f package-lock.json ]; then npm ci --silent; else npm install --silent; fi

# copy everything and build
COPY . .
# allow build args to set NEXT_PUBLIC_* envs at build time if needed
ARG NEXT_PUBLIC_SITE_NAME
ENV NEXT_PUBLIC_SITE_NAME=${NEXT_PUBLIC_SITE_NAME:-"SAIT CTF (local)"}

RUN npm run build

# Stage 2: runtime
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# copy only build artifacts + node_modules from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.js

EXPOSE 3000
CMD ["npm", "start"]
