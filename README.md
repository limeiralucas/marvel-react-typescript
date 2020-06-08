# Marvel Typescript React

## How to run (with docker-compose)

1. Make sure you have [Docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/) installed.

2. Create a file named .env at the project's root following the model described at the file `.env-template` and fill it with your Marvel's API credentials.
   If you don't know how to get the credentials, see [Marvel's API Documentation](https://developer.marvel.com/documentation/getting_started).

3. Run the project

```
docker-compose up
```

After that, you should be able to access the project running at [127.0.0.1:3000](http://127.0.0.1:3000)

## How to run (without docker-compose)

Make sure you have [Node](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/getting-started) installed.

First, configure the environment variable with your Marvel's API credentials:

```
REACT_APP_MARVEL_API_KEY=<your api key>
REACT_APP_MARVEL_API_HASH=<your api md5 hash>
REACT_APP_MARVEL_API_TS=<timestamp used to generate hash>
```

If you don't know how to get the credentials, see [Marvel's API Documentation](https://developer.marvel.com/documentation/getting_started).

With the environment variables set, at the project's root, install all dependencies:

```
yarn install
```

And run the project

```
yarn start
```

After that, you should be able to access the project running at [127.0.0.1:3000](http://127.0.0.1:3000)
