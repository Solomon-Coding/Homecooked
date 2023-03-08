# Docker Containers To Make Development EZMODE

This directory contains YAML files that are configurations for docker-compose to instantiate
a docker container on your local machine of different software/servers/databases so that you
are not installing them all directly on your machine
---
## Docker Container Data Loss
By default docker containers when spun down and removed will not store stat on your hard drive it
will be gone forever. There are ways to hook up to a local 'volume' not yet covered here
---
## How to Install Docker?

Download and install docker desktop

https://www.docker.com/products/docker-desktop

---
## How to use this project?

In order to use these containers more easily a node project has been created for the purpose of 
scripting. You can use these commands to spin the containers up/down/around?

---
## Helpful Commands

| command            | Activity Name                                                                         |
|--------------------|---------------------------------------------------------------------------------------|
| `npm run mysql:up` | Starts the mysql container - will download image if you don't have it                 |
| `npm run mysql:down` | Turns off the mysql container - will not delete it (but don't rely on it saving data) |
| `npm run mysql` | Login to the mysql shell running in docker |


---
## Installing Utilities
- You can install the mysql client only using brew in MacOs with the command `brew install mysql-client`
- You can install the mysql client only using this [installer](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install-windows-quick.html)

---
## PHP MyAdmin
You can reach a UI to interact with your local(or not) database by opening your browser to http://localhost:8080