FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g pnpm
RUN pnpm install

COPY --chown=node:node . .

RUN pnpm run build

CMD [ "pnpm", "run", "dev" ]