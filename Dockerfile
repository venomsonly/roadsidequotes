FROM node:18.4-alpine3.15

COPY ./ /src
RUN rm -rf .DS_Store .git node_modules .next
RUN cd /src && yarn install && yarn build
WORKDIR /src
CMD ["yarn", "start"]
