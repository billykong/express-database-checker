FROM node:12.16.0

ADD . app/
WORKDIR app/
RUN npm ci

EXPOSE 80

CMD ["npm", "start"]