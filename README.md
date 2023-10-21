# General Use API

This API is made to provide simple utilities, mainly to be queried from Resonite.

## Dev setup

    git clone https://github.com/jae1911/general-use-api.git
    cd general-use-api
    yarn
    yarn dev

## Production deployment

    git clone https://github.com/jae1911/general-use-api.git
    cd general-use-api
    docker build -t genapi:latest .

Example of Docker compose file:

    version: 3.9
    services:
        genapi:
            image: genapi:latest
            environment:
              - NODE_ENV=production
              - NODENAME=mynode # OPTIONAL
