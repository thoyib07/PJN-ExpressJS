import express from 'express';
import request  from 'supertest';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());
app.use(express.json());

app.get('/', (req,res) => {
    const name = req.cookies["name"]
    res.send(`Hello ${name}!`);
});

app.post('/login',(req,res) => {
    const name = req.body.name;
    res.cookie("Login",name, {path:"/"});
    res.send(`Hello ${name}!`);
})

test("Test Cookie Read", async () => {
    const respon = await request(app)
        .get('/')
        .set('Cookie',"name=Thoyib;");
    expect(respon.text).toBe("Hello Thoyib!");
});

test("Test Cookie Write", async () => {
    const respon = await request(app)
        .post('/login')
        .send({name:"Thoyib"});
    expect(respon.get("Set-Cookie").toString()).toBe("Login=Thoyib; Path=/");
    expect(respon.text).toBe("Hello Thoyib!");
});