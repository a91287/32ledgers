## Docker Commands

### Remove a Docker Image

```
docker image rm <IMAGE_NAME>
```

### Build Docker Container
```
docker build . -t <IMAGE_TAG_NAME>
```

### Logon to GiHub Container Registry
```
docker login --username <YOUR GITHUB USERNAME> --password <YOUR GITHUB TOKEN> <CONTAINER_REGISTRY_URL>
```

### Push an image to a container registry
```
docker push <CONTAINER_REGISTRY_URL>/<USERNAME>/<IMAGE_NAME>:<TAG>
```

## Run a docker container

```
docker run -p <CONTAINER_PORT>:<HOST_PORT> <CONTAINER_REGISTRY_ADDR/USERNAME/IMAGE_NAME>
```

## NPM

### Create a React typescript project
```
npx create-react-app <APP_NAME> --template typescript
```
### Install React
```
npm install react@latest react-dom@latest
```

### Install Bootstrap latest version
```
npm install bootstrap react-router-dom
```

### Install React Router DOM
```
npm install @types/react-router-dom
```
