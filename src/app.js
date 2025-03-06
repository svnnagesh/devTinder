const express = require("express");

const app = express();
const port = 8000;

app.use('/test', (req, res) => {
    res.send('Hello test');
})

app.use((req, res) => {
    res.send('Hello')
});



app.listen(port, () => {
    console.log('Server is running on port ', port);
})