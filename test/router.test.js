import express from 'express';
import request  from 'supertest';

const app = express();

const router = express.Router();
router.use((req, res, next) => {
    console.info(`Recive request: ${req.originalUrl}`);
    next();
});
router.get('/feature/a',(req, res) => {
    res.send("Feature A");
})

test("Test Route Disable", async () => {
    let respon = await request(app)
        .get('/feature/a');
    expect(respon.status).toBe(404);
});

test("Test Router Enable", async () => { 
    app.use(router);

    const response = await request(app).get("/feature/a");
    expect(response.text).toBe("Feature A");
});