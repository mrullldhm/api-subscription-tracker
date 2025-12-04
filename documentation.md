
# HTTP, DNS, IPs & Network

#### HTTP
- `The protocol browsers use to communicate with servers using requests and responses.`
#### DNS
- `Converts human-friendly domain names (e.g., google.com) into IP addresses.`
#### IP
- `A unique address identifying a server or device on the internet.`
#### Ports
- `Channels on a machine where services run (e.g., port 80 for HTTP).`
#### Client/Server model
- `Client sends request → server processes → sends response.`

<!-- -------------------------------------------------------------- -->

# API

- `API = Application Programming Interface.`
- `It allows one system to communicate with another using structured rules.`
- `Backend developers build APIs so frontend apps, mobile apps, or third-party services can interact with their server.`

#### REST API
- `Use URLs and HTTP verbs (GET, POST, PUT, DELETE).`
#### GraphQL
- `Flexible queries where clients request exactly the data they need.`
#### gRPC
- `Fast, binary communication used in microservices.`
#### Webhooks
- `Server-to-server push notifications.`
#### WebSocket API
- `Real-time communication (e.g., chat apps).`

<!-- -------------------------------------------------------------- -->

# Backend Language

- J`avaScript/TypeScript (Node.js, Express.js)`

- `Python (FastAPI, Django)`

- `Java (Spring Boot)`

- `Go (Gin, Echo)`

- `Ruby (Rails)`

<!-- -------------------------------------------------------------- -->

# Database

#### SQL
- `MySQL`
- `PostgreSQL`

#### NoSQL
- `MongoDB`
- `Firebase`
- `DynamoDB`

<!-- -------------------------------------------------------------- -->

# Backend Architecture

#### Monolithic Architecture
- `A monolith is when your entire application’s backend is one big project, deployed as one unit.`

#### Microservices Architecture
- `A system split into independent small services, each responsible for one function.`

<!-- -------------------------------------------------------------- -->

# Express
- `npm init -y`
- `npm i express`
- `npm i --save-dev nodemon`
- `npx eslint --init`
- `touch .gitignore`

#### ES Module
```
package.json
  {
    "name": "subdub",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "type": "module",
    "scripts": {
        "start": "node app.js",
        "dev": "nodemon app.js"
    },    
  }
```

<!-- -------------------------------------------------------------- -->

# Express Server
```
app.js
    import express from "express";

    const app = express();
    const port = 3000;

    app.get("/", (req, res) => {
    res.send("Welcome To The Subscription Tracker API");
    });

    app.listen(port, () => {
    console.log(
        `The Subscription Tracker API running on http://localhost:${port}`
    );
    });

    export default app
```

<!-- -------------------------------------------------------------- -->

# Config
#### Environment Variable
- `npm i dotenv`
```
config\env.js
    import { config } from "dotenv";

    config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

    export const { PORT, NODE_ENV } = process.env;
-----------------------------------------------------------------------
.env.production.local
    # DOTE_ENV
    DOTE_ENV='production'
-----------------------------------------------------------------------
.env.development.local
    # PORT
    PORT=5500
-----------------------------------------------------------------------
.gitignore
    node_modules/
    .env
    .env.*.local
    dist/
-----------------------------------------------------------------------
app.js
    import express from "express";
    import { PORT } from "./config/env.js";

    const app = express();

    app.get("/", (req, res) => {
    res.send("Welcome To The Subscription Tracker API");
    });

    app.listen(PORT, () => {
    console.log(
        `The Subscription Tracker API running on http://localhost:${PORT}`
    );
    });

    export default app
```

<!-- -------------------------------------------------------------- -->

# Routes
#### Naming Convention
- `https://restfulapi.net/resource-naming/`

```
routes\auth.routes.js
    import { Router } from "express";

    const authRouter = Router();

    authRouter.post("/sign-up", (req, res) => {
    res.send({ title: "Sign up" });
    });

    authRouter.post("/sign-in", (req, res) => {
    res.send({ title: "Sign in" });
    });

    authRouter.post("/sign-out", (req, res) => {
    res.send({ title: "Sign out" });
    });

    export default authRouter
-----------------------------------------------------------------------
routes\user.routes.js
    import { Router } from "express";

    const userRouter = Router();

    userRouter.get("/", (req, res) => {
    res.send({ title: "READ all users details" });
    });

    userRouter.get("/:id", (req, res) => {
    res.send({ title: "READ users details" });
    });

    userRouter.post("/", (req, res) => {
    res.send({ title: "CREATE users details" });
    });

    userRouter.put("/:id", (req, res) => {
    res.send({ title: "UPDATE users details" });
    });

    userRouter.delete("/:id", (req, res) => {
    res.send({ title: "DELETE users details" });
    });

    export default userRouter;
-----------------------------------------------------------------------
routes\subscription.routes.js
    import express from "express";
    import { PORT } from "./config/env.js";
    import authRouter from "./routes/auth.routes.js";
    import userRouter from "./routes/user.routes.js";
    import subscriptionRouter from "./routes/subscription.routes.js";

    const app = express();

    app.get("/", (req, res) => {
    res.send("Welcome To The Subscription Tracker API");
    });

    app.listen(PORT, () => {
    console.log(
        `The Subscription Tracker API running on http://localhost:${PORT}`
    );
    });

    app.use("/api/v1/auth", authRouter);
    app.use("/api/v1/users", userRouter);
    app.use("/api/v1/subscriptions", subscriptionRouter);

    export default app;
-----------------------------------------------------------------------
app.js
    import express from "express";
    import { PORT } from "./config/env.js";
    import authRouter from "./routes/auth.routes.js";
    import userRouter from "./routes/user.routes.js";
    import subscriptionRouter from "./routes/subscription.routes.js";

    const app = express();

    app.get("/", (req, res) => {
    res.send("Welcome To The Subscription Tracker API");
    });

    app.listen(PORT, () => {
    console.log(
        `The Subscription Tracker API running on http://localhost:${PORT}`
    );
    });

    app.use("/api/v1/auth", authRouter);
    app.use("/api/v1/users", userRouter);
    app.use("/api/v1/subscriptions", subscriptionRouter);

    export default app;
```
<!-- -------------------------------------------------------------- -->

# MongoDB

<!-- -------------------------------------------------------------- -->

# Model

<!-- -------------------------------------------------------------- -->

# Error Handler

<!-- -------------------------------------------------------------- -->

# Authentication

<!-- -------------------------------------------------------------- -->

# Authorization

<!-- -------------------------------------------------------------- -->

# Arcjet

<!-- -------------------------------------------------------------- -->

# Subscription

<!-- -------------------------------------------------------------- -->

# Reminder Workflow

<!-- -------------------------------------------------------------- -->

# Send Emails

<!-- -------------------------------------------------------------- -->

# VPS Hosting & Deployment

<!-- -------------------------------------------------------------- -->
