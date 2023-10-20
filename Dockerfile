FROM node:21 as builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

FROM node:lts-alpine AS runner

COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/build /app/build

EXPOSE 8080

CMD ["node", "/app/build/index.js"]
