import express from 'express';
import request  from 'supertest';

const app = express();

app.get('/', (req,res) => {
    res.set({
        "content-type": "text/html"
    })
    res.send(`<html><body>Hello Response!</body></html>`);
});

test("Test Response Body", async () => {
    const respon = await request(app)
        .get('/');
    expect(respon.get('content-Type')).toContain("text/html")
    expect(respon.text).toBe("<html><body>Hello Response!</body></html>");
});