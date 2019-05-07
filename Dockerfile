FROM node:10.11.0

# install dependencies
WORKDIR /opt/app
COPY package.json package-lock.json* ./
RUN npm cache clean --force && npm install

# copy app source to image _after_ npm install so that
# application code changes don't bust the docker cache of npm install step
COPY . /opt/app
 RUN cp .env.example .env
# set application PORT and expose docker PORT, 80 is what Elastic Beanstalk expects
ENV PORT 3030
EXPOSE 3030

CMD [ "npm", "run", "start" ]