import express from 'express';
import request  from 'supertest';

const app = express();

app.get('/', (req,res) => {
    res.set({
        "X-Powered-By": "Thoyib Hidayat",
        "x-Author" : "Thoyib"
    });
    res.send(`Hello Response!`);
});

test("Test Response Header", async () => {
    const respon = await request(app)
        .get('/');
    expect(respon.text).toBe("Hello Response!");
    expect(respon.get('x-powered-by')).toBe("Thoyib Hidayat");
    expect(respon.get('x-author')).toBe("Thoyib");
});