FROM cypress/factory
WORKDIR /cypress
COPY package.json /cypress
RUN npm install
COPY . .
RUN npx cypress install
CMD ["npm","run","browser:electron"]
