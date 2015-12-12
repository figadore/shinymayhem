# Project name

Project description

## Developing
First, ensure package.json is using `nodemon` instead of `node` or `forever`

### Docker
* `docker build -t ncd-backend ./`
* `docker run --it -rm -v $(pwd):/var/www -p 3000:80 ncd-backend` #runs on host port 3000

### Custom Node.js installation
Run `npm install`, then `npm start` in the root of the repository

## Deploying
For production, ensure package.json is using `node` or `forever`

### Docker
* `docker build -t project ./`
* `docker run -d -p 80:80 project`

### Kubernetes
TODO
