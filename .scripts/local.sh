#!/bin/bash

function run_dev() {
  echo "Running app development enviornment..."
  docker-compose -f ../server/docker-compose.development.yml up -d
  docker-compose -f ../client/docker-compose.development.yml up -d
}

function clean_dev() {
  echo "Purging app development enviornment..."
  docker-compose -f ../server/docker-compose.development.yml down -v --rmi all
  docker-compose -f ../client/docker-compose.development.yml down -v --rmi all
}

function run_prod() {
  echo "Running app production enviornment..."
  docker-compose -f ../server/docker-compose.production.yml up -d
  docker-compose -f ../client/docker-compose.production.yml up -d
}

function clean_prod() {
  echo "Purging app production enviornment..."
  docker-compose -f ../server/docker-compose.production.yml down -v --rmi all
  docker-compose -f ../client/docker-compose.production.yml down -v --rmi all
}

function test_server() {
  echo "Running server tests..."
  docker-compose -f ../server/docker-compose.test.yml run server-test
}

function test_client() {
  echo "Running client tests..."
  docker-compose -f ../client/docker-compose.test.yml run client-test
}

function seed_db() {
  echo "Seeding database..."
  docker-compose -f ../server/docker-compose.development.yml run server-dev npm run seed-db
}

function wipe_db() {
  echo "Purging database..."
  docker-compose -f ../server/docker-compose.development.yml run server-dev npm run wipe-db
}

########################################################################
# Allows an argument to be passed through terminal, which must
# be the name of a function. Ex: `bash local.sh run_dev`
########################################################################
case $1
in
  run_dev) run_dev ;;
  clean_dev) clean_dev ;;
  run_prod) run_prod ;;
  clean_prod) clean_prod ;;
  test_server) test_server ;;
  test_client) test_client ;;
  seed_db) seed_db ;;
  wipe_db) wipe_db ;;
  *) echo "Not a valid function"
     exit 1 ;;
esac
