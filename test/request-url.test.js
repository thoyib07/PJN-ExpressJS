import express from 'express';
import request  from 'supertest';

const app = express();

app.get('/hello/world', (req,res) => {
    // res.send(`Hello ${req.query.name}!`);
    res.json({
        path: req.path,
        originalUrl: req.originalUrl,
        hostname: req.hostname,
        protocol: req.protocol,
        secure: req.secure,
    });
});

test("Test Request URL", async () => {
    const respon = await request(app)
        .get('/hello/world')
        .query({name: "Thoyib"});

    // expect(respon.text).toBe("Hello Thoyib!");
    expect(respon.body).toEqual({
        path: "/hello/world",
        originalUrl: "/hello/world?name=Thoyib",
        hostname: "127.0.0.1",
        protocol: "http",
        secure: false,
    });
});