

## Project setup

Clone repository 

```bash
 git clone https://github.com/vazperale/OnlineShop.git
```

install dependencies

```bash
 npm install
```

create .env file in root path

```bash
  DB_HOST=
  DB_PORT=
  DB_USERNAME=
  DB_PASSWORD=
  DB_NAME=
```

launch Docker container for the database,with values of the .env file

```bash
$ docker-compose --env-file .env up -d
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
