# Flask/React Web Application Boilerplate

This repository contains a boilerplate server/client application. The server component is built in Python using the [Flask](http://flask.pocoo.org/) framework, and the client component is built in Javascript using [React](https://reactjs.org/) and [React Router](https://reacttraining.com/react-router/, and is compiled using [Webpack](https://webpack.js.org/).

At present, the application is only configured to run in a Development environment. The current configuration should not be used for a Production deployment.

### Project

[placeholder]

### Todo

[placeholder]

### Requirements
This application runs in [Docker](https://www.docker.com/) and is configured using [Docker Compose](https://docs.docker.com/compose/). Please ensure that Docker is installed and is running, and that `docker-compose` is available on your path.

Notes on installing Docker can be found at [https://docs.docker.com/install/](https://docs.docker.com/install/). Notes on installing Docker Compose can be found at [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

### Getting Started

Once requirements are installed, get started by running:
```
./run.sh init
./run.sh up
```

Open [http://localhost:8080](http://localhost:8080) in your browser of choice to visit the application. The backend can be accessed directly at [http://localhost:5000](http://localhost:5000).

### Commands

Interaction with the application environment is conducted through the `./run.sh` script. The script offers the following commands:

`./run.sh dc { command }`
Passes { command } to Docker Compose.

`./run.sh init`
Initialized and bootstraps the application development environment.

`./run.sh up`
Starts the application development environment.

`./run.sh server { command }`
Passes { command } to Server container.

`./run.sh client { command }`
Passes { command } to Client container.

`./run.sh clean`
Removes containers and volumes related to environment.


### Useful Incantations

##### Installing new NPM Package to Client
`./run.sh client npm install { pkg_name }`

##### Installing new Pip Package to Server
`./run.sh server pip install { pkg_name }`

##### Freeze Server Requirements
`./run.sh server pip freeze > server/requirements.txt`
