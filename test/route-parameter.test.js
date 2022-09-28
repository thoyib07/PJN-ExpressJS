import express from 'express';
import request  from 'supertest';

const app = express();

app.get('/product/:idPro', (req,res) => {
    const idProduct = req.params.idPro;
    res.send(`Product: ${idProduct}`);
});

app.get('/categories/:idCat(\\d+)', (req,res) => {
    const idCat = req.params.idCat
    res.send(`Category: ${idCat}`);
});

test("Test Route Parameter", async () => {
    let respon = await request(app)
        .get('/product/thoyib');
    expect(respon.text).toBe("Product: thoyib");

    respon = await request(app)
        .get('/product/salah');
    expect(respon.text).toBe("Product: salah");

    respon = await request(app)
        .get('/categories/123');
    expect(respon.text).toBe("Category: 123");

    respon = await request(app)
        .get('/categories/salah');
    expect(respon.status).toBe(404);
});