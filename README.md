# 🎟️ Ticketing App 🎫

## 🧮 Microservices in MERN

<br />

[![forthebadge](https://img.shields.io/docker/cloud/automated/thecrossart/Ticketing-App-MicroServicesTS)](https://forthebadge.com)

[![GitHub Actions CI](https://github.com/microsoft/TypeScript/workflows/CI/badge.svg)](https://github.com/microsoft/TypeScript/actions?query=workflow%3ACI)
[![Devops Build Status](https://dev.azure.com/typescript/TypeScript/_apis/build/status/Typescript/node10)](https://dev.azure.com/typescript/TypeScript/_build?definitionId=7)
[![npm version](https://badge.fury.io/js/typescript.svg)](https://www.npmjs.com/package/typescript)
[![Downloads](https://img.shields.io/npm/dm/typescript.svg)](https://www.npmjs.com/package/typescript)

## App Structure

### Overall Function

![Screenshot (52)](https://user-images.githubusercontent.com/63959831/121482245-94264b80-c9ea-11eb-90fd-43800b56bd30.png)

### App Connection

![Screenshot (53)](https://user-images.githubusercontent.com/63959831/121482253-95f00f00-c9ea-11eb-9855-88be53a747a0.png)

### Your Local Machine Function

![Screenshot (55)](https://user-images.githubusercontent.com/63959831/121482256-9688a580-c9ea-11eb-9a2c-cfec8950f80a.png)

# 🛰️ SetUp TypeScript

[TypeScript](https://www.typescriptlang.org/) is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript. Try it out at the [playground](https://www.typescriptlang.org/play/), and stay up to date via [our blog](https://blogs.msdn.microsoft.com/typescript) and [Twitter account](https://twitter.com/typescript).

Find others who are using TypeScript at [our community page](https://www.typescriptlang.org/community/).

## Installing

For the latest stable version:

```bash
npm install -g typescript
```

For our nightly builds:

```bash
npm install -g typescript@next
```

## Documentation

- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Programming handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Homepage](https://www.typescriptlang.org/)

## Building

In order to build the TypeScript compiler, ensure that you have [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/) installed.

Clone a copy of the repo:

```bash
git clone https://github.com/microsoft/TypeScript.git
```

Change to the TypeScript directory:

```bash
cd TypeScript
```

Install [Gulp](https://gulpjs.com/) tools and dev dependencies:

```bash
npm install -g gulp
npm ci
```

## Usage

```bash
node built/local/tsc.js hello.ts
```

## Roadmap

For details on our planned features and future direction please refer to our [roadmap](https://github.com/microsoft/TypeScript/wiki/Roadmap).

# 🚀 How to Run the App with `Skaffold`

This is a showcase for Skaffold with create-react-app.

## Why?

If you want to develop a react app and deploy on kubernetes, you want fast feedback cycles.
Skaffold is a dedicated tool to help with this _inner dev-loop_ and it offers some nifty optimizations around script languages.
This showcase demonstrates how to get this working efficiently.

## How?

These steps explain how this repository was created.
Use this as a guide to get started with new projects.

1.  Run `create-react-app` like so:

        npx create-react-app . --template typescript --use-npm

    For instructions how to work with `create-react-app` go [here](https://create-react-app.dev/docs/getting-started).

1.  Add a `Dockerfile` to instruct the container builder how to construct your container:

    ```Dockerfile
    FROM node:12-alpine

    WORKDIR /app
    EXPOSE 3000
    CMD ["npm", "run", "start"]

    COPY package* ./
    RUN npm ci
    COPY . .
    ```

1.  Add a `.dockerignore` file to ignore unwanted files. This is important so that Skaffold knows what files it may ignore:

    ```.dockerignore
    .git
    node_modules
    **/*.swp
    **/*.tsx~
    **/*.swn
    **/*.swo
    ```

1.  Add a kubernetes manifest for your app

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: create-react-app
    spec:
      selector:
        matchLabels:
          app: create-react-app
      template:
        metadata:
          labels:
            app: create-react-app
        spec:
          containers:
            - name: create-react-app
              image: skaffold-create-react-app
              ports:
                - containerPort: 3000
    ```

1.  Run `skaffold init` and add the following items:

    - Tell Skaffold to copy `.ts` or `.tsx` files into your container instead of rebuilding:

      ```yaml
      build:
        artifacts:
          - image: skaffold-create-react-app
            sync:
              infer:
                - "**/*.ts"
                - "**/*.tsx"
                - "**/*.css"
      ```

      This sync mode works entirely different to docker-compose with a local volume, as it copies the files into the running container.
      The advantage is that this will work no matter how your kubernetes cluster is set up, be it remote or local.

    - Tell Skaffold which port to forward so that you can access your app on localhost:

      ```yaml
      portForward:
        - resourceType: deployment
          resourceName: create-react-app
          port: 3000
      ```

1.  Start developing with

        skaffold dev --port-forward

    This last command assumes that you have set up a kubernetes cluster. If you have not, take a look at [minikube](https://github.com/kubernetes/minikube).

1.  Access your app on `http://localhost:3000`.
    When you make changes, the changed files should be sync'ed into the container and the node watcher should pick up the changes.
    In particular, the container should _not rebuild_.
    If it does nevertheless, run `skaffold dev -v debug` and look out for temporary files which should be added to `.dockerignore`.

> :warning: Note that the container runs `npm run start` which is the dev mode. When going to production, you should run `npm run build` and build a dedicated container.

**Happy hacking! ❤️**
