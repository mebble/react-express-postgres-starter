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



## Building and Running
