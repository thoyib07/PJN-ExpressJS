import express from 'express';
import request  from 'supertest';

const app = express();

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/contoh.txt");
});

test("Test Response Send File", async () => {
    const respon = await request(app)
        .get('/');
    expect(respon.text).toContain("This is a sample text");
});