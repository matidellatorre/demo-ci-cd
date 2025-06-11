FROM kerngkjerngkjenrt

# Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn install && yarn build

# Minimun image for deployment
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["yarn", "start"]