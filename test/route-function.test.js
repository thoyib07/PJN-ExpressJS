import express from 'express';
import request  from 'supertest';

const app = express();

app.route('/products')
    .get((req, res) => {
        res.send("Get Products");
    })
    .post((req,res) => {
        res.send("Create Products");
    })
    .put((req,res) => {
        res.send("Update Products");
    });

test("Test Route Function", async () => {
    let respon = await request(app)
        .get('/products');
    expect(respon.text).toBe("Get Products");

    respon = await request(app)
        .post('/products');
    expect(respon.text).toBe("Create Products");

    respon = await request(app)
        .put('/products');
    expect(respon.text).toBe("Update Products");
});