import express from 'express';
import request  from 'supertest';
import mustacheExpress from 'mustache-express';

const app = express();
app.set("views",__dirname + "/views");
app.set("view engine","html");
app.engine("html",mustacheExpress());

app.get('/', (req,res) => {
    res.render('index',{
        title: "Hello World",
        say: "Ini lagi test"
    });
});

test("Test Template Engine Mustache", async () => {
    const respon = await request(app)
        .get('/');
    console.info(respon.text);
    expect(respon.text).toContain("Hello World");
    expect(respon.text).toContain("Ini lagi test");
});