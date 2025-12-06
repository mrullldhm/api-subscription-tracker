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
    # NODE_ENV
    NODE_ENV='production'
-----------------------------------------------------------------------
.env.development.local
    # NODE_ENV
    NODE_ENV='development'

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

    // Routes
    app.use("/api/v1/auth", authRouter);
    app.use("/api/v1/users", userRouter);
    app.use("/api/v1/subscriptions", subscriptionRouter);

    app.listen(PORT, () => {
    console.log(
        `The Subscription Tracker API running on http://localhost:${PORT}`
    );
    });

    export default app;
```

<!-- -------------------------------------------------------------- -->

# MongoDB

#### Local

- `https://www.mongodb.com/`

#### Cloud

- `https://www.mongodb.com/products/platform/atlas-database`

#### MongoDB

- `npm i mongodb`

#### ORM

- `npm i mongoose`

```
database\mongodb.js
    import mongoose from "mongoose";
    import { DB_URI, NODE_ENV } from "../config/env.js";

    if (!DB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.<development/production>.local"
    );
    }

    const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`Connected to database in ${NODE_ENV}`);
    } catch (error) {
        console.error(`Error connecting to the database, ${error}`);

        process.exit(1);
    }
    };

    export default connectToDatabase;
-----------------------------------------------------------------------
app.js
    import express from "express";
    import { PORT } from "./config/env.js";
    import authRouter from "./routes/auth.routes.js";
    import userRouter from "./routes/user.routes.js";
    import subscriptionRouter from "./routes/subscription.routes.js";
    import connectToDatabase from "./database/mongodb.js";

    const app = express();

    app.get("/", (req, res) => {
    res.send("Welcome To The Subscription Tracker API");
    });

    // Routes
    app.use("/api/v1/auth", authRouter);
    app.use("/api/v1/users", userRouter);
    app.use("/api/v1/subscriptions", subscriptionRouter);

    app.listen(PORT, async () => {
    console.log(
        `The Subscription Tracker API running on http://localhost:${PORT}`
    );

    await connectToDatabase();
    });

    export default app;
-----------------------------------------------------------------------
.env.development.local
    # NODE_ENV
    NODE_ENV='development'

    # PORT
    PORT=5500

    # MONGODB
    DB_URI='mongodb+srv://mrullldhm:1457@cluster0.mq25jil.mongodb.net/?appName=Cluster0'
-----------------------------------------------------------------------
config\env.js
    import { config } from "dotenv";

    config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

    export const { PORT, NODE_ENV, DB_URI } = process.env;
```

<!-- -------------------------------------------------------------- -->

# Model

- `A model is a blueprint for how your data should look and behave in the database.`

- `The structure of the data (what fields it has, and their types)`

- `Validation rules (e.g., a name must be a string, age must be a number)`

- `Methods you can use on the data`

```
models\user.model.js
    import mongoose from "mongoose";

    const userSchema = new mongoose.Schema(
    {
        name: {
        type: String,
        require: [true, "User Name is required"],
        trim: true,
        minLength: 2,
        maxLength: 50,
        },
        email: {
        type: String,
        require: [true, "User Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Please fill a valid email address"],
        },
        password: {
        type: String,
        require: [true, "User Password is required"],
        minLength: 6,
        },
    },

    { timestamps: true }
    );

    const User = mongoose.model("User", userSchema);

    export default User;
-----------------------------------------------------------------------
models\subscription.model.js
    import mongoose from "mongoose";
    import User from "./user.model";

    const subscriptionSchema = new mongoose.Schema(
    {
        name: {
        type: String,
        require: [true, "Subscription name is required"],
        trim: true,
        minLength: 2,
        maxLength: 100,
        },
        price: {
        type: Number,
        require: [true, "Subscription price is required"],
        min: [0, "Price must be greater than 0"],
        max: [1000, "Price must be greater than 1000"],
        },
        currency: {
        type: String,
        enum: ["USD", "EUR", "GBP"],
        },
        frequency: {
        type: String,
        enum: ["daily", "weekly", "monthly", "yearly"],
        },
        category: {
        type: String,
        enum: [
            "sports",
            "news",
            "entertainment",
            "lifestyle",
            "technology",
            "finance",
            "politic",
            "other",
        ],
        required: true,
        },
        paymentMethod: {
        type: String,
        required: true,
        trim: true,
        },
        status: {
        type: String,
        enum: ["active", "cancelled", "expired"],
        default: "active",
        },
        startDate: {
        type: Date,
        required: true,
        validate: {
            validator: (value) => value <= new Date(),
            message: "Start date cannot be in the future",
        },
        },
        renewalDate: {
        type: Date,
        validate: {
            validator: function (value) {
            return value > this.startDate;
            },
            message: "Renewal date must be after the start date",
        },
        },
        user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true,
        index: true,
        },
    },

    { timestamps: true }
    );

    // Auto calculate renewal date if missing
    subscriptionSchema.pre("save", function (next) {
    if (!this.renewalDate) {
        const renewalPeriods = {
        daily: 1,
        weekly: 7,
        monthly: 30,
        yearly: 365,
        };

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDatet(
        this.renewalDate.getDate() + renewalPeriods[this.frequency]
        );
    }

    //   Auto update the status if renewal date passed
    if (this.renewalDate < new Date()) {
        this.status = "expired";
    }

    next();
    });

    const Subscription = mongoose.model("Subscription", subscriptionSchema);

    export default Subscription;
```

<!-- -------------------------------------------------------------- -->

# Error Handler

- `Middleware is a function in a web framework (like Express) that runs during the request-response cycle.`
- `Error handler middleware type of middleware that catches errors thrown in routes or other middleware.`

- `npm i cookie-parser`

```
middleware\error.middleware.js
    const errorMiddleware = (err, req, res, next) => {
    try {
        let error = { ...err };
        error.message = err.message;
        console.error(err);

        // Mongoose bad objectId
        if (err.name === "CastError") {
        const message = "Resources not found";
        error = new Error(message);
        error.statuscode = 404;
        }

        // Mongoose duplicate key
        if (err.code === 11000) {
        const message = "Duplicate key values";
        error = new Error(message);
        error.statuscode = 400;
        }

        // Mongoose validation error
        if (err.code === "ValidationError") {
        const message = Object.values(err.errors).map((val) => {
            val.message;
        });
        error = new Error(message.join(", "));
        error.statuscode = 400;
        }

        res
        .status(error.statuscode || 500)
        .json({ success: false, error: error.message || "Server Error" });
    } catch (error) {
        console.error(error);
    }
    };

    export default errorMiddleware;
-----------------------------------------------------------------------
app.js
    import express from "express";
    import cookieParser from "cookie-parser";
    import { PORT } from "./config/env.js";
    import authRouter from "./routes/auth.routes.js";
    import userRouter from "./routes/user.routes.js";
    import subscriptionRouter from "./routes/subscription.routes.js";
    import connectToDatabase from "./database/mongodb.js";
    import errorMiddleware from "./middleware/error.middleware.js";

    const app = express();

    // Built in Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());

    app.get("/", (req, res) => {
    res.send("Welcome To The Subscription Tracker API");
    });

    // Routes
    app.use("/api/v1/auth", authRouter);
    app.use("/api/v1/users", userRouter);
    app.use("/api/v1/subscriptions", subscriptionRouter);

    // Error Handling
    app.use(errorMiddleware);

    app.listen(PORT, async () => {
    console.log(
        `The Subscription Tracker API running on http://localhost:${PORT}`
    );

    await connectToDatabase();
    });

    export default app;
```

<!-- -------------------------------------------------------------- -->

# Authentication

- `npm i jsonwebtoken`
- `npm i bcryptjs`

```
.env.development.local
    # NODE_ENV
    NODE_ENV='development'

    # PORT
    PORT=5500

    # MONGODB
    DB_URI='mongodb+srv://mrullldhm:1457@cluster0.mq25jil.mongodb.net/?appName=Cluster0'

    # JWT AUTH
    JWT_SECRET='secret'
    JWT_EXPIRES_IN='1day'
-----------------------------------------------------------------------
config\env.js
    import { config } from "dotenv";

    config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

    export const { PORT, NODE_ENV, DB_URI, JWT_SECRET, JWT_EXPIRES_IN } =
    process.env;
```

#### Controller

- `Routes decide what endpoint is called`
- `Controllers decide what to do when that endpoint is called`
- `An atomic update/operation means an action that is performed completely or not at all, with no in-between state visible to others.`
- `req.body is an object containning data from the client (POST request)`

```
controllers\auth.controller.js
    import mongoose from "mongoose";
    import User from "../models/user.model.js";
    import bcrypt from "bcryptjs";
    import jwt from "jsonwebtoken";
    import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";

    export const signUp = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        // Logic to create new user
        const { name, email, password } = req.body;

        // Check if a user already exist
        const existingUser = await User.findOne({ email });

        if (existingUser) {
        const error = new Error("User already exist");
        error.statusCode = 409;
        throw error;
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const newUsers = await User.create(
        [{ name, email, password: hashedPassword }],
        { session }
        );

        const token = jwt.sign({ userId: newUsers[0]._id }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
        });

        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
        success: true,
        message: "User created successfully",
        data: {
            token,
            user: newUsers[0],
        },
        });
    } catch (error) {
        await session.abortTransaction();
        session.endSession;
        next(error);
    }
    };

    export const signIn = async (req, res, next) => {
    try {
        // Logic to sign in
        const { email, password } = req.body;

        // Check if a user exist
        const user = await User.findOne({ email });

        if (!user) {
        const error = new Error("User not found");
        error.statusCode = 409;
        throw error;
        }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
        const error = new Error("Invalid Password");
        error.statusCode = 401;
        throw error;
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
        });

        res.status(201).json({
        success: true,
        message: "User sign in successfully",
        data: {
            token,
            user,
        },
        });
    } catch (error) {
        next(error);
    }
    };

    export const signOut = async (req, res, next) => {};
-----------------------------------------------------------------------
routes\auth.routes.js
    import { Router } from "express";
    import { signIn, signOut, signUp } from "../controllers/auth.controller";

    const authRouter = Router();

    authRouter.post("/sign-up", signUp);

    authRouter.post("/sign-in", signIn);

    authRouter.post("/sign-out", signOut);

    export default authRouter;
```

<!-- -------------------------------------------------------------- -->

# Authorization

```
middleware\auth.middleware.js
    import jwt from "jsonwebtoken";
    import {JWT_SECRET} from "../config/env.js"
    import User from "../models/user.model.js";

    const authorize = async (req, res, next) => {
    try {
        let token;

        if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
        ) {
        token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
        }

        const decoded = jwt.verify(token, JWT_SECRET)

        const user = await User.findById(decoded.userId)

        if(!user) {
            return res.status(401).json({message:'Unauthorized'})
        }

        req.user = user

        next ()
    } catch (error) {
        res.status(401).json({message: 'Unauthorized', error: error.message})
    }
    };

    export default authorize
-----------------------------------------------------------------------
controllers\user.controller.js
    import User from "../models/user.model.js";

    export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();

        res.status(200).json({ success: true, data: users });
    } catch (error) {
        next(error);
    }
    };

    export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).select('-password')

        if(!user){
            const error = new Error ('User not found')
            error.statusCode = 404
            throw error
        }

        res.status(200).json({success:true, data: user})
    } catch (error) {
        next(error);
    }
    };
-----------------------------------------------------------------------
routes\user.routes.js
    import { Router } from "express";
    import { getUsers,  getUser} from "../controllers/user.controller.js";
    import authorize from "../middleware/auth.middleware.js";

    const userRouter = Router();

    userRouter.get("/", authorize ,getUsers);

    userRouter.get("/:id", authorize,getUser);

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
```

<!-- -------------------------------------------------------------- -->

# Arcjet

- `npm i @arcjet/node @arcjet/inspect`

```
.env.development.local
    # ARCJET
    ARCJECT_KEY=ajkey_01k27bh63vex6aatmpdtv60609
    ARCJET_ENV=development
-----------------------------------------------------------------------
config\env.js
    import { config } from "dotenv";

    config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

    export const { PORT, NODE_ENV, DB_URI, JWT_SECRET, JWT_EXPIRES_IN, ARCJET_KEY, ARCJET_ENV } =
    process.env;
-----------------------------------------------------------------------
config\arcjet.js
    import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
    import { ARCJET_KEY } from "../config/env";

    const aj = arcjet({
    key: ARCJET_KEY,
    rules: [
        shield({ mode: "LIVE" }),
        detectBot({
        mode: "LIVE",
        allow: [
            "CATEGORY:SEARCH_ENGINE",
        ],
        }),
        tokenBucket({
        mode: "LIVE",

        refillRate: 5,
        interval: 10,
        capacity: 10,
        }),
    ],
    });

    export default aj;
-----------------------------------------------------------------------
middleware\arcjet.middleware.js
    import aj from "../config/arcjet";

    const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req, { requested: 1 });

        if (decision.isDenied) {
        if (decision.reason.isRateLimit()) {
            return res.status(429).json({ error: "Rate limit exceeded" });
        }
        if (decision.reason.isBot()) {
            return res.status(403).json({ error: "Bot detected" });
        }

        return res.status(403).json({ error: "Access Denied" });
        }

        next();
    } catch (error) {
        console.error(`Arcjet middleware error: ${error}`);
        next(error);
    }
    };

    export default arcjetMiddleware
-----------------------------------------------------------------------
app.js
    import express from "express";
    import cookieParser from "cookie-parser";
    import { PORT } from "./config/env.js";
    import authRouter from "./routes/auth.routes.js";
    import userRouter from "./routes/user.routes.js";
    import subscriptionRouter from "./routes/subscription.routes.js";
    import connectToDatabase from "./database/mongodb.js";
    import errorMiddleware from "./middleware/error.middleware.js";
    import arcjetMiddleware from "./middleware/arcjet.middleware.js";

    const app = express();

    // Built-in Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    // Arcjet Middleware
    app.use(arcjetMiddleware);

    app.get("/", (req, res) => {
    res.send("Welcome To The Subscription Tracker API");
    });
```

<!-- -------------------------------------------------------------- -->

# Subscription

```
controllers\subscription.controller.js
    import Subscription from "../models/subscription.model.js";

    export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
        ...req.body,
        user: req.user._id,
        });

        res.status(201).json({ success: true, data: subscription });
    } catch (error) {
        next(error);
    }
    };

    export const getUserSubscription = async (req, res, next) => {
    try {
        if (req.user.id !== req.params.id) {
        const error = new Error("You're not the owner of this account");
        error.status = 401;
        throw error;
        }

        const subscription = await Subscription.find({ user: req.params.id });

        res.status(201).json({ success: true, data: subscription });
    } catch (error) {
        next(error);
    }
    };
-----------------------------------------------------------------------
routes\subscription.routes.js
    import { Router } from "express";
    import authorize from "../middleware/auth.middleware.js";
    import { createSubscription, getUserSubscription } from "../controllers/subscription.controller.js";

    const subscriptionRouter = Router();

    subscriptionRouter.get("/", (req, res) => {
    res.send({ title: "READ all subscriptions" });
    });

    subscriptionRouter.get("/:id", (req, res) => {
    res.send({ title: "READ subscriptions" });
    });

    subscriptionRouter.post("/", authorize, createSubscription);

    subscriptionRouter.put("/:id", (req, res) => {
    res.send({ title: "UPDATE subscriptions" });
    });

    subscriptionRouter.delete("/:id", (req, res) => {
    res.send({ title: "DELETE subscriptions" });
    });

    subscriptionRouter.get("/users/:id", authorize, getUserSubscription);

    subscriptionRouter.put("/:id/cancel", (req, res) => {
    res.send({ title: "CANCEL users subscriptions" });
    });

    subscriptionRouter.get("/upcoming-renewals", (req, res) => {
    res.send({ title: "READ upcoming renewals" });
    });

    export default subscriptionRouter;
-----------------------------------------------------------------------
```

<!-- -------------------------------------------------------------- -->

# Reminder Workflow

- `A workflow is a series of defined actions, tasks, or processes that are executed in a specific order.`

#### Upstash Workflow

- `https://upstash.com/`
- `npm install @upstash/workflow`
- `npx @upstash/qstash-cli dev`

```
config\upstash.js
    import { client as WorkflowClient } from "@upstash/workflow";
    import { QSTASH_TOKEN, QSTASH_URL } from "./env";

    export const workflowClient = new WorkflowClient({
    baseUrl: QSTASH_URL,
    token: QSTASH_TOKEN,
    });
-----------------------------------------------------------------------
.env.production.local
    # NODE_ENV
    NODE_ENV='production'

    # UPSTASH - DASHBOARD
    QSTASH_URL="https://qstash.upstash.io"
    QSTASH_TOKEN="eyJVc2VySUQiOiJmNzcwMmIzYi1mNGUyLTRhMzUtODgyMS1iZGM1ODVmZGRkM2MiLCJQYXNzd29yZCI6ImFjZmQ5MjZhZjZjYjRlZTNhODA3MWYxNWFkMGZlMjk5In0="
    QSTASH_CURRENT_SIGNING_KEY="sig_7PrdVHmwFZga2Cnk1vm3iPGsQaAE"
    QSTASH_NEXT_SIGNING_KEY="sig_5gadnzZq14LDgrxytAEY4VJVcj5H"
-----------------------------------------------------------------------
.env.development.local
    # NODE_ENV
    NODE_ENV='development'

    # PORT
    PORT=5500
    SERVER_URL=http://localhost:5500

    # MONGODB
    DB_URI='mongodb+srv://mrullldhm:1457@cluster0.mq25jil.mongodb.net/?appName=Cluster0'

    # JWT AUTH
    JWT_SECRET='secret'
    JWT_EXPIRES_IN='1day'

    # ARCJET
    ARCJECT_KEY=ajkey_01k27bh63vex6aatmpdtv60609
    ARCJET_ENV=development

    # UPSTASH - npx @upstash/qstash-cli dev
    QSTASH_URL=http://127.0.0.1:8080
    QSTASH_TOKEN=eyJVc2VySUQiOiJkZWZhdWx0VXNlciIsIlBhc3N3b3JkIjoiZGVmYXVsdFBhc3N3b3JkIn0=
-----------------------------------------------------------------------
config\env.js
    import { config } from "dotenv";

    config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

    export const {
    PORT,
    NODE_ENV,
    DB_URI,
    JWT_SECRET,
    JWT_EXPIRES_IN,
    ARCJET_KEY,
    ARCJET_ENV,
    QSTASH_URL,
    QSTASH_TOKEN,
    QSTASH_CURRENT_SIGNING_KEY,
    QSTASH_NEXT_SIGNING_KEY,
    } = process.env;
```

#### dayjs

- `npm i dayjs`

```
controllers\workflow.controller.js
    import Subscription from "../models/subscription.model.js";
    import dayjs from "dayjs";
    import sendReminderEmail from "../utils/send-email.js";

    import { createRequire } from "module";
    const require = createRequire(import.meta.url);
    const { serve } = require("@upstash/workflow/express");

    const REMINDERS = [7, 5, 2, 1];

    export const sendReminders = serve(async (context) => {
    const { subscriptionId } = context.requestPayload;
    const subscription = await fetchSubscription(context, subscriptionId);

    if (!subscription || subscription.status !== "active") return;

    const renewalDate = dayjs(subscription.renewalDate);

    if (renewalDate.isBefore(dayjs())) {
        console.log(
        `Renewal date has passed for subscription ${subscriptionId}. Stopping workflow.`
        );
        return;
    }

    for (const daysBefore of REMINDERS) {
        const reminderDate = renewalDate.subtract(daysBefore, "day");
        if (reminderDate.isAfter(dayjs())) {
        await sleepUntilReminder(
            context,
            `Reminder ${daysBefore} days before`,
            reminderDate
        );
        }

        if (dayjs().isSame(reminderDate, "day")) {
        await triggerReminder(
            context,
            `${daysBefore} days before reminder`,
            subscription
        );
        }
    }
    });

    const fetchSubscription = async (context, subscriptionId) => {
    return await context.run("get subscription", async () => {
        return Subscription.findById(subscriptionId).populate("user", "name email");
    });
    };

    const sleepUntilReminder = async (context, label, date) => {
    console.log(`Sleeping until ${label} reminder at ${date}`);
    await context.sleepUntil(label, date.toDate());
    };

    const triggerReminder = async (context, label, subscription) => {
    return await context.run(label, async () => {
        console.log(`Triggering ${label} reminder`);

        // await sendReminderEmail({
        //   to: subscription.user.email,
        //   type: label,
        //   subscription,
        // });
    });
    };
-----------------------------------------------------------------------
controllers\subscription.controller.js
    import Subscription from "../models/subscription.model.js";
    import { workflowClient } from "../config/upstash.js";
    import { SERVER_URL } from "../config/env.js";

    export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
        ...req.body,
        user: req.user._id,
        });

        // Workflow
        const { workflowRunId } = await workflowClient.trigger({
        url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
        body: {
            subscriptionId: subscription.id,
        },
        headers: {
            "content-type": "application/json",
        },
        retries: 0,
        });

        res
        .status(201)
        .json({ success: true, data: { subscription, workflowRunId } });
    } catch (error) {
        next(error);
    }
    };

    export const getUserSubscription = async (req, res, next) => {
    try {
        if (req.user.id !== req.params.id) {
        const error = new Error("You're not the owner of this account");
        error.status = 401;
        throw error;
        }

        const subscription = await Subscription.find({ user: req.params.id });

        res.status(201).json({ success: true, data: subscription });
    } catch (error) {
        next(error);
    }
    };
-----------------------------------------------------------------------
routes\workflow.routes.js
    import { Router } from "express";
    import { sendReminders } from "../controllers/workflow.controller.js";

    const workflowRouter = Router()

    workflowRouter.post('/subscription/reminder', sendReminders);

    export default workflowRouter
-----------------------------------------------------------------------
app.js
    import express from "express";
    import cookieParser from "cookie-parser";
    import { PORT } from "./config/env.js";
    import authRouter from "./routes/auth.routes.js";
    import userRouter from "./routes/user.routes.js";
    import subscriptionRouter from "./routes/subscription.routes.js";
    import connectToDatabase from "./database/mongodb.js";
    import errorMiddleware from "./middleware/error.middleware.js";
    import workflowRouter from "./routes/workflow.routes.js";
    // import arcjetMiddleware from "./middleware/arcjet.middleware.js";

    const app = express();

    // Built-in Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    // Arcjet Middleware
    // app.use(arcjetMiddleware);

    app.get("/", (req, res) => {
    res.send("Welcome To The Subscription Tracker API");
    });

    // Routes
    app.use("/api/v1/auth", authRouter);
    app.use("/api/v1/users", userRouter);
    app.use("/api/v1/subscriptions", subscriptionRouter);
    app.use("/api/va/workflow", workflowRouter)

    // Error Handller Middleware
    app.use(errorMiddleware);

    app.listen(PORT, async () => {
    console.log(
        `The Subscription Tracker API running on http://localhost:${PORT}`
    );

    await connectToDatabase();
    });

    export default app;
```

<!-- -------------------------------------------------------------- -->

# Send Emails

#### Nodemailer

- `Nodemailer is a popular Node.js library used to send emails from a server or application. I`
- `Used in backend projects to automate email sending, like account verification emails, password resets, notifications, or newsletters.`
- `npm i nodemailer`

```
-----------------------------------------------------------------------
```

<!-- -------------------------------------------------------------- -->

# VPS Hosting & Deployment

```
-----------------------------------------------------------------------
```

<!-- -------------------------------------------------------------- -->
