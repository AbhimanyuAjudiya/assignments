const express = require('express');

const app = express();

app.get('/health-checkup', (req, res) => {
    const kidney = req.query.kidney;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "abc" || password != "abc"){
        res.status(401).send('Unauthorized');
        return
    }
    if(kidney != 1 && kidney != 2){
        res.status(400).send('Wrong input');
        return
    }
    res.status(200).send('You are healthy');
})

app.listen(3000, () => {
    console.log('http://localhost:3000/helth-checkup');
})
