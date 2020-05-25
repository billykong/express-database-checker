# README

This is a dummy web service that display whether or not it has successfully connected to a database.  
  
The database connection information should be provided by environment variables.
```
DATABASE_HOST=localhost
DATABASE_NAME=my_database
DATABASE_USERNAME=billykong
DATABASE_PASSWORD=xxx
DATABASE_DIALECT
DATABASE_PORT
```

## To build docker image for this app
`$ docker build -t billykong/express-database-checker .`
`$ docker push billykong/express-database-checker:latest`


## TODO
1. better use of `Promise.race` in `routes/index.js`
2. Make timeout configurable through environment variable.