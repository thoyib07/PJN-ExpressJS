import express from 'express';
import request  from 'supertest';

const app = express();

app.get('/', (req,res) => {
    res.send(`Hello ${req.query.first} ${req.query.second}!`);
});

test("Test Query Parameter", async () => {
    const respon = await request(app)
        .get('/')
        .query({first: "Thoyib", second: "Hidayat"});
    expect(respon.text).toBe("Hello Thoyib Hidayat!");
});