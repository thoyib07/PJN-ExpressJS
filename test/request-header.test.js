import express from 'express';
import request  from 'supertest';

const app = express();

app.get('/', (req,res) => {
    const type = req.get("accept");
    res.send(`Hello ${type}!`);
});

test("Test Request Header", async () => {
    const respon = await request(app)
        .get("/")
        .set("Accept","text/plain")
        .query({name: "Thoyib"});
    expect(respon.text).toBe("Hello text/plain!");
});