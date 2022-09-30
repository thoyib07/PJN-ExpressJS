import express from 'express';
import request  from 'supertest';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser("qwerty123"));
app.use(express.json());

app.get('/', (req,res) => {
    const name = req.signedCookies["name"]
    res.send(`Hello ${name}!`);
});

app.post('/login',(req,res) => {
    const name = req.body.name;
    res.cookie("Login",name, {path:"/", signed:true});
    res.send(`Hello ${name}!`);
})

test("Test Cookie Read", async () => {
    const respon = await request(app)
        .get('/')
        .set('Cookie',"name=s%3AThoyib.tQ23JI8eZc6We2tOY8j3ytC9LDa94xpYjxhhtjfjKYw;");
    expect(respon.text).toBe("Hello Thoyib!");
});

test("Test Cookie Write", async () => {
    const respon = await request(app)
        .post('/login')
        .send({name:"Thoyib"});
    console.info(respon.get('Set-Cookie').toString());
    expect(respon.get("Set-Cookie").toString()).toContain("Thoyib");
    expect(respon.text).toBe("Hello Thoyib!");
});