############### DEPENDENCIES
FROM docker.io/node:15-alpine as dep

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile 

############### BUILD
FROM docker.io/node:15-alpine as builder
WORKDIR /usr/src/app
COPY . .
COPY --from=dep /usr/src/app/node_modules ./node_modules
RUN yarn build

RUN rm -rf node_modules
RUN yarn install --production --frozen-lockfile --ignore-scripts --prefer-offline

############### RUN 
FROM docker.io/node:15-alpine as runner
WORKDIR /usr/src/app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder --chown=nextjs:nodejs /usr/src/app/next.config.js ./
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/public ./public
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/yarn.lock ./yarn.lock

USER nextjs

EXPOSE 3000
CMD ["yarn", "start"]
