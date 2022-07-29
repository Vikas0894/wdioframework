FROM jfafn.jfrog.io/cards-container/node:14-alpine
RUN apk update
RUN addgroup -S app && adduser -S -G app app

#
RUN apk add curl ca-certificates
COPY ca-certificates/*.crt /usr/local/share/ca-certificates/
RUN chmod 644 /usr/local/share/ca-certificates/*.crt
RUN update-ca-certificates
ENV NODE_OPTIONS --use-openssl-ca

