FROM node:21-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn

COPY . .

EXPOSE 3000

RUN yarn build

CMD ["yarn", "preview"]