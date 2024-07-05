# Setup Guide

This document provides instructions to deploy and use the URL Shortener application, as well as how to run tests (if added).

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/)

## Steps to Deploy

### 1. Clone the Repository

**for fronend**
git clone https://github.com/ansari0007/url_shortner_client.git
cd url_shortner_client


**for backend**

git clone https://github.com/ansari0007/url_shortner_server.git
cd url_shortner_server


### 2. Install Dependencies

**for both**

npm install
or
npm i

### 3. Set Up Environment Variables

**for backend**

DB_URL='your database url'
PORT=8000
BASE_URL=http://localhost:8000



### 4. Start the Development Servers
**for frontend**

npm run start

**for backend**

index.js

