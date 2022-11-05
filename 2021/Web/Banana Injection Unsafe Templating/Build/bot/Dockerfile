FROM docker.io/node:15-alpine

ENV CHROME_BIN="/usr/bin/chromium-browser" \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true"
RUN set -x \
    && apk update \
    && apk upgrade \
    && apk add --no-cache \
    udev \
    ttf-freefont \
    chromium 

RUN mkdir /bot/
COPY bot.js /bot/

WORKDIR /bot/ 

RUN npm i puppeteer@1.10.0
RUN npm i redis

RUN chown -R root:node /bot/ 

USER node

CMD ["node", "bot.js"]