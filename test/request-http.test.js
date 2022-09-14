import express from 'express';
import request  from 'supertest';

const app = express();

app.get('/', (req,res) => {
    res.send(`Hello ${req.query.name}!`);
});

test("Test Expres", async () => {
    const respon = await request(app).get('/').query({name: "Thoyib"});
    expect(respon.text).toBe("Hello Thoyib!");
});