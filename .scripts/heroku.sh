#!/bin/bash

########################################################################
# Inject variables from `.env` file into script.
########################################################################
if [ -f ../.env ]; then
  export $(cat < ../.env | sed 's/#.*//g' | xargs)
fi

function heroku_login() {
  echo "Logging into Heroku container registry..."
  docker login --username="${HEROKU_USERNAME}" --password="${HEROKU_AUTH_TOKEN}" registry.heroku.com
}

function deploy_server() {
  echo "Building, pushing and releasing server on Heroku..."
  docker build --file=../server/Dockerfile.production --tag=registry.heroku.com/"${HEROKU_SERVER_APP_NAME}"/web ../server
  docker push registry.heroku.com/"${HEROKU_SERVER_APP_NAME}"/web
  bash ./heroku-server-container-release.sh
}

function deploy_client() {
  echo "Building, pushing and releasing client on Heroku..."
  docker build --file=../client/Dockerfile.production --tag=registry.heroku.com/"${HEROKU_CLIENT_APP_NAME}"/web ../client
  docker push registry.heroku.com/"${HEROKU_CLIENT_APP_NAME}"/web
  bash ./heroku-client-container-release.sh
}

function deploy() {
  heroku_login
  deploy_server
  deploy_client
}

########################################################################
# Allows an argument to be passed through terminal, which must
# be the name of a function. Ex: `bash heroku.sh deploy`
########################################################################
case $1
in
  heroku_login) heroku_login ;;
  deploy_server) deploy_server ;;
  deploy_client) deploy_client ;;
  deploy) deploy ;;
  *) echo "Not a valid function"
     exit 1 ;;
esac
