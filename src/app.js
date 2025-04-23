const express = require("express");

const app = express();
const port = 8000;

// here when use ab?c b is optional, it works even if b not included
app.get('/ab?c', (req, res) => {
    res.send("Hello ab?c");
});

// here we can add multiple c before + sign, if we remove c it doesn't work
app.get('/bc+d', (req, res) => {
    res.send("Hello bc+d");
});

// hefe we can add anything in between *
app.get('/de*fg', (req, res) => {
    res.send("Hello de*fg");
});

// it will work with all context before fly and if we add any other letters after fly it will get rejected
// http://localhost:8000/aaaaaa123333fly
app.get(/.*fly$/, (req, res) => {
    res.send("Hello fly regex routing");
});

// route with dynamic params
app.get('/user/:userId/:name/:password', (req, res) => {
    console.log(req.params);
    res.send({ fname: 'Nagesh', lname: 'Vengal' });
});

app.use('/test/1', (req, res) => {
    res.send("Hello test 1");
});

app.use('/test', (req, res) => {
    res.send('Hello test');
});

// app.use('/', (req, res) => {
//     res.send('Hello /');
// })

app.use('/', (err, req, res, next) => {
    if(err) {
        res.status(500).send('Something went wrong !');
    }
})

app.use((req, res) => {
    res.send('Hello');
});



app.listen(port, () => {
    console.log('Server is running on port ', port);
})