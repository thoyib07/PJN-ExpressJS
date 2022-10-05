import express from 'express';
import request  from 'supertest';

const app = express();

app.get('/', (req,res) => {
    res.send(`Hello Response!`);
});

app.use((req, res, next)=>{
    res.status(404).send("404 Not Found Nih!")
});

test("Test Response", async () => {
    const respon = await request(app)
        .get('/');
    expect(respon.text).toBe("Hello Response!");
});

test("Test Response Not Found", async () => {
    const respon = await request(app)
        .get('/404');
    expect(respon.text).toBe("404 Not Found Nih!");
});