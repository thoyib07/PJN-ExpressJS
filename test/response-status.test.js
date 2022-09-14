import express from 'express';
import request  from 'supertest';

const app = express();

app.get('/', (req,res) => {
    if (req.query.name) {
        res.status(200).send(`Hello ${req.query.name}!`);
    } else {
        res.status(400);
        res.end();
    }
});

test("Test Response Status", async () => {
    let respon = await request(app)
        .get('/')
        .query({name:"Thoyib"});
    
    expect(respon.status).toBe(200);
    expect(respon.text).toBe("Hello Thoyib!");

    respon = await request(app).get("/");
    expect(respon.status).toBe(400);
});