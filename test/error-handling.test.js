import express from 'express';
import request  from 'supertest';

const app = express();

const errorMiddle = (err, req, res, next) => {
    res.status(500).send(`Terjadi Error: ${err.message}`);
};

app.get('/', (req,res) => {
    // res.send(`Hello Response!`);
    throw new Error("Ups salah nih");
});
app.use(errorMiddle);

test("Test Error Handling", async () => {
    const respon = await request(app)
        .get('/');
    expect(respon.status).toBe(500);
    expect(respon.text).toBe("Terjadi Error: Ups salah nih");
});