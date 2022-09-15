import express from 'express';
import request  from 'supertest';

const app = express();

app.get('/', (req,res) => {
    res.redirect('/to-next-page')
});

test("Test Response Redirect", async () => {
    const respon = await request(app)
        .get('/');
    expect(respon.status).toBe(302);
    expect(respon.get('location')).toBe('/to-next-page');
});