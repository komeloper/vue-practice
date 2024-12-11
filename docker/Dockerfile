FROM node:22-bookworm-slim

ENV NODE_ENV=development

RUN set -ex && \
    apt-get update && apt-get install -y perl tzdata && \
    mkdir -p /usr/src/app && \
    chown -R node:root /usr/src/app && chmod -R g+rwX /usr/src/app

WORKDIR /usr/src/app

COPY myproject/package.json .
COPY docker/entrypoint.sh /

USER node

EXPOSE 3000 

ENTRYPOINT ["/entrypoint.sh"]