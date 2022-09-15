import express from 'express';
import request  from 'supertest';

const logger = (req, res, next) => {
    console.info(`Receive request : ${req.method} ${req.originalUrl}`);
    next();
}

const addPoweredHeader = (req, res, next) => {
    res.set({
        "x-powered-by": "Thoyib Hidayat"
    });
    next();
}

const apiKeyMiddleware = (req, res, next) => {
    if (req.query.apikey) {
        next();
    } else {
        res.status(401).end();
    }
}

const requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
}

const app = express();

app.use(logger);
app.use(apiKeyMiddleware);
app.use(addPoweredHeader);
app.use(requestTime);

app.get('/', (req,res) => {
    res.send(`Hello Response!`);
});

app.get('/thoyib', (req,res) => {
    res.send(`Hello Thoyib`);
});

app.get('/time', (req,res) => {
    res.send(`Hello Thoyib!, today is ${req.requestTime}`);
});

test("Test Response Middleware", async () => {
    const respon = await request(app)
        .get('/').query({apikey:"123"});
    expect(respon.get("x-powered-by")).toBe("Thoyib Hidayat");
    expect(respon.text).toBe("Hello Response!");
});

test("Test Response Middleware 2", async () => {
    const respon = await request(app)
        .get('/thoyib').query({apikey:"123"});
    expect(respon.get("x-powered-by")).toBe("Thoyib Hidayat");
    expect(respon.text).toBe("Hello Thoyib!");
});

test("Test Response Middleware Unautorize", async () => {
    const respon = await request(app)
        .get('/thoyib');
    expect(respon.status).toBe(401);
});

test("Test Response Middleware Time", async () => {
    const respon = await request(app)
        .get('/time').query({apikey:"123"});
    expect(respon.get("x-powered-by")).toBe("Thoyib Hidayat");
    expect(respon.text).toContain("Hello Thoyib");
});