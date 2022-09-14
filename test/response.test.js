import express from 'express';
import request  from 'supertest';

const app = express();

app.get('/', (req,res) => {
    res.send(`Hello Response!`);
});

test("Test Response", async () => {
    const respon = await request(app)
        .get('/');
    expect(respon.text).toBe("Hello Response!");
});