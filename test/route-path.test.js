import express from 'express';
import request  from 'supertest';

const app = express();

app.get('/product/*.json', (req,res) => {
    res.send(req.originalUrl);
});

app.get('/categories/*(\\d+).json', (req,res) => {
    res.send(req.originalUrl);
});

test("Test Route Path", async () => {
    let respon = await request(app)
        .get('/product/thoyib.json');
    expect(respon.text).toBe("/product/thoyib.json");

    respon = await request(app)
        .get('/product/salah.json');
    expect(respon.text).toBe("/product/salah.json");

    respon = await request(app)
        .get('/categories/123.json');
    expect(respon.text).toBe("/categories/123.json");
    respon = await request(app)

        .get('/categories/salah.json');
    expect(respon.text).toBe(404);
});