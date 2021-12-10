# 🎟️ Ticketing App 🎫

## 🧮 Microservices in MERN

<br />

[![Devops Build Status](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)](https://dev.azure.com/typescript/TypeScript/_build?definitionId=7)

[![GitHub Actions CI](https://github.com/microsoft/TypeScript/workflows/CI/badge.svg)](https://github.com/microsoft/TypeScript/actions?query=workflow%3ACI)
[![npm version](https://badge.fury.io/js/typescript.svg)](https://www.npmjs.com/package/typescript)
[![Downloads](https://img.shields.io/npm/dm/typescript.svg)](https://www.npmjs.com/package/typescript)

## App Structure

### Overall Function

![Screenshot (52)](https://user-images.githubusercontent.com/63959831/121482245-94264b80-c9ea-11eb-90fd-43800b56bd30.png)

### App Connection

![Screenshot (53)](https://user-images.githubusercontent.com/63959831/121482253-95f00f00-c9ea-11eb-9855-88be53a747a0.png)

### NATS Services

![Screenshot 2021-12-09 005613](https://user-images.githubusercontent.com/63959831/145271401-23147e0c-ee7a-44e1-99d2-56ec7122a780.png)


# Ticketing

## ❔ About

Microservices Ticketing Application to sell and buy tickets

## 🛠 Techs

The list of the main techs used in this project.

### Backend

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [NATS Streaming Server](https://docs.nats.io/nats-streaming-concepts/intro)
- [Mongo](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Redis](https://redis.io/)
- [JWT - Json Web Tokens](https://jwt.io/)
- [Stripe for Payments](https://stripe.com/)
- [Ingress Nginx](https://kubernetes.github.io/ingress-nginx/)
- [Docker](https://www.docker.com/)
- [Kubernetes](https://kubernetes.io/)

### Frontend

- [Next.js](https://nextjs.org/)
- [React](https://pt-br.reactjs.org/)

### CI/CD

- [Github](https://github.com/)
- [Github Actions](https://github.com/features/actions)

### Hosting

- [Digital Ocean](https://www.digitalocean.com/products/kubernetes/)

## ⚙ How to Install and Start

To install and start the ticketing app follow the steps below:

### Pre-Requirements Installations

- [Docker Desktop](https://docs.docker.com/get-docker/)
- Enable Kubernetes in the Docker Desktop
- [Install Ingress Nginx](https://kubernetes.github.io/ingress-nginx/deploy/)
- [Install Skaffold](https://skaffold.dev/docs/install/) Optional
- [Create a Stripe Account](https://dashboard.stripe.com/register) Optional
- Add tickets.com to your hosts file pointing to 127.0.0.1 (Mac /etc/hosts and Win c:\windows\system32\drivers\etc\hosts)

### Installation

Clone the Repository:

```
git clone https://github.com/the-cross-art/Ticketing-App-MicroServicesTS
```

### Services

Open the cloned repository na navigate to the root folder

```
cd ./ticketing/
```

#### Kubernets Secrets

```bash
# Create the required secrets
> kubectl create secret generic jwt-secret --from-literal=JWT_KEY=123456
# If you have Stripe Account
> kubectl create secret generic stripe-secret --from-literal STRIPE_KEY=<REPLACE_HERE_YOUR_PRIVATE_STRIPE_KEY>
# If you don't have a Stripe Account
> kubectl create secret generic stripe-secret --from-literal STRIPE_KEY=123456
```

#### Skaffold

```bash
# If Skaffold is installed
> skaffold dev

# If Skaffold is not installed
> kubectl apply -f infra/k8s-dev
> kubectl apply -f infra/k8s
```

#### Open your browser

```
http://ticketing.dev
```

## 🥅 Plans

- Style the frontend
- Implement email service
-

## 📜 License

This project is under MIT License

## Special Thanks

To Stephen Grider for the amazing [Microservices Course](https://www.udemy.com/course/microservices-with-node-js-and-react/)

Made with ❤️ by Imran Nazir
