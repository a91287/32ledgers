#!/bin/bash

### BEGIN README ###

# This script builds and push all containers in this project.
# usage: ./run.sh <CONTAINER_REGISTRY_USERNAME> <CONTAINER_REGISTRY_PASSWORD> <CONTAINER_REGISTRY_URL>

### END README ###

### BEGIN VARIABLES ###
CONTAINER_REGISTRY_USERNAME=$1
CONTAINER_REGISTRY_PASSWORD=$2
CONTAINER_REGISTRY_URL=$3

### END VARIABLES ###

### BEGIN FUNCTIONS ###
# Remove all docker containers and images
docker_cleanup(){
    echo "Cleaning up docker"
    docker system prune -f
    docker rmi $(docker images -q)
}

# Build docker images
build_image(){
    echo "Building image: " $1
    docker build . -t $1
}

# Login and push image to container registry
# args:
#   $1 - Container Registry username
#   $2 - Container Registry password
#   $3 - Container Registry url
#   $4 - Image name including tag
push_image(){
    echo "Pushing image: " $4
    docker login --username $1 --password $2 $3
    docker push $4
}

# Execute the main script logic for each application/folder
# args:
#   $1 - subfolder path
#   $2 - image name
main_routine(){
echo "Working Directory: " $1
cd $1
IMAGE_NAME=$2
build_image $IMAGE_NAME
cd -
push_image $CONTAINER_REGISTRY_USERNAME $CONTAINER_REGISTRY_PASSWORD $CONTAINER_REGISTRY_URL $IMAGE_NAME
# Removes the image from local registry to force docker to pull it again.
docker image rm $IMAGE_NAME
}

### END FUNCTIONS ###

### SCRIPT BEGIN ###
docker_cleanup
main_routine "32ledgers" "ghcr.io/a91287/32ledgers-gui:dev"
main_routine "api/ms_user_access_control" "ghcr.io/a91287/ms_user_access_control:dev"


docker compose up
### SCRIPT END ###