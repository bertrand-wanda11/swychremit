FROM node:lts-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine AS production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

RUN echo 'server { \
    listen PORT_PLACEHOLDER; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf.template

RUN echo '#!/bin/sh' > /docker-entrypoint.d/40-set-port.sh \
    && echo 'set -e' >> /docker-entrypoint.d/40-set-port.sh \
    && echo 'sed "s/PORT_PLACEHOLDER/${PORT:-8080}/g" /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf' >> /docker-entrypoint.d/40-set-port.sh \
    && chmod +x /docker-entrypoint.d/40-set-port.sh

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
