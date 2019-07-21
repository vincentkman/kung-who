const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
const getProfiles = require('./profiles');
const jwtSimple = require('jwt-simple');

app.get('/rest/profiles/:id', (req, res) => {
    res.send(getProfiles().find(profile => profile.id === req.params.id));
});

app.get('/rest/profiles', (req, res) => {
    res.send(JSON.stringify(getProfiles()))
});

app.use(express.static(path.join(__dirname, '../../build')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});   

app.post('/rest/signin', (req, res) => {
    let parsed= JSON.parsed(req)
    let token = jwtSimple.decode(parsed.hg.id_token);
    let response = {token, hd='https://kung-who.herokuapp.com/', secret='gmRXBkluAd9oG_fvQGHJjMTP'}
    res.send(response)
}); 

app.listen(port, () => console.log(`Server started on port ${port}!`));
