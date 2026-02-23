# ====== STAGE 1: BUILD ======
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files trước để cache dependency
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build specific service
ARG SERVICE_NAME
RUN npm run build $SERVICE_NAME

# ====== STAGE 2: RUN ======
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

ARG SERVICE_NAME
ENV SERVICE_NAME=$SERVICE_NAME

CMD ["sh", "-c", "node dist/apps/$SERVICE_NAME/main.js"]