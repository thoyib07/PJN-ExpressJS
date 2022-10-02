import express from 'express';
import request  from 'supertest';

const app = express();

// app.use(express.static(__dirname + "/static"));
app.use("/static",express.static(__dirname + "/static"));

app.get('/', (req,res) => {
    res.send(`Hello Response!`);
});

app.get('/contoh.txt', (req,res) => {
    res.send(`Hello Response!`);
});

test("Test Static File", async () => {
    let respon = await request(app)
        .get('/');
    expect(respon.text).toBe("Hello Response!");
});

test("Test Static File Contoh.txt", async () => {
    let respon = await request(app)
        .get('/contoh.txt');
    expect(respon.text).toContain("Hello Response!");
});

test("Test Static File /static/Contoh.txt", async () => {
    let respon = await request(app)
        .get('/static/contoh.txt');
    expect(respon.text).toContain("This is a sample text");
});