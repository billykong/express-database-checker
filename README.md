# Express Database Checker

This is a dummy web service that display whether or not it has successfully connected to a database. I use it to test cloud deployment configuration, e.g. AWS. The serving port is `80` with `http`.


## Usage
1. `$ npm install`
2. `$ npm start`

The database connection information should be provided by environment variables.  
  
For example:
```bash
DATABASE_HOST=localhost
DATABASE_NAME=my_database
DATABASE_USERNAME=billykong
DATABASE_PASSWORD=xxxxxx
DATABASE_DIALECT=postgres # optional: default is postgres
DATABASE_PORT=5432 # optional: default is 5432
DATABASE_TIMEOUT=3000 # optional: default is 3000ms
```

### DockerHub
1. `$ docker pull billykong/express-database-checker`  
2. `$ docker run -p80:80 billykong/express-database-checker`

## To build docker image for this app
`$ docker build -t billykong/express-database-checker .`  
`$ docker push billykong/express-database-checker:latest`

