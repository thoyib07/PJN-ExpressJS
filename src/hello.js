import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.get('/test', (req,res) => {
    res.send('Hello World test!');
});

app.get('/thoyib', (req,res) => {
    res.send('Hello Thoyib!');
});

app.listen(3000,()=>{
    console.info("Server start on 3000");
});