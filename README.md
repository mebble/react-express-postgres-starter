# react-express-postgres-starter

Boilerplate code for a React + Express + PostgreSQL project

## Project Structure

```sh
$ tree -d -I node_modules
.
├── client
└── server
```

### Client

The client code is bundled using [`Parcel`](https://www.npmjs.com/package/parcel). Currently, version 2 alpha is used so that we can make use of the [proxy feature](https://github.com/parcel-bundler/parcel/pull/3281) that Parcel 2 provides.

### Server

Bundling is done only for the `client` portion of the project. The server code uses Node's module system. `nodemon` is used to watch for file changes in the server during developemt.

### Build Tool

The top-level build scripts should be written cleanly by using `npm-run-all`. The client-side build is mostly performed by Parcel.

## Setup for Development

Install dependencies

```sh
$ npm run install:dependencies
```

### Developing

In one terminal

```sh
$ npm run dev:client
```

In a separate terminal

```sh
$ npm run dev:server
```

### Testing

...

### Building and Running

Only the client needs to be built. Its built files are then served as static files by the server.

```sh
$ npm run build:client
$ npm run start:server
```

This script will clean before building and running the app. Recommended to use in production.

```sh
$ npm run start:prod
```

### Cleaning

This will run the clean script for all parts of the project, i.e. the root, client and server directories.

```sh
$ npm run clean
```
