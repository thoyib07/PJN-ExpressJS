import express from 'express';
import request  from 'supertest';
import expressFileUpload from 'express-fileupload';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(expressFileUpload());

app.post('/json', (req,res) => {
    const name = req.body.name;

    res.json({
        hello: `Hello ${name}`
    });
});

app.post('/form', (req,res) => {
    const name = req.body.name;

    res.json({
        hello: `Hello ${name}`
    });
});

app.post('/file', async (req, res) => {
    const textFile = req.files.article;
    await textFile.mv(__dirname+"/upload/"+textFile.name);
    res.send(`Hello ${req.body.name} you uploaded ${textFile.name}`)
});

test('Test Request File Upload', async () => {
    const respon = await request(app)
        .post('/file')
        .set("Content-Type","multipart/form-data")
        .field({name : "Thoyib"})
        .attach('article',__dirname+"/static/contoh.txt");

    expect(respon.text).toBe("Hello Thoyib you uploaded contoh.txt");
});

test("Test Request JSON", async () => {
    const respon = await request(app)
        .post('/json')
        .set("Content-Type","application/json")
        .send({name: "Thoyib"});

    expect(respon.body).toEqual({
        hello: `Hello Thoyib`
    });
});

test("Test Request Form", async () => {
    const respon = await request(app)
        .post('/form')
        .set("Content-Type","application/x-www-form-urlencoded")
        .send("name=Thoyib");

    expect(respon.body).toEqual({
        hello: `Hello Thoyib`
    });
});