const connect = require('connect');

const app = connect();

function helloNodeMessage(req, res, next){
    res.setHeader('Content-Type','text/plain');
    res.end('Hello from NodeJS Application')
}

function helloHTMLMessage(req, res, next){
    res.setHeader('Content-Type','text/html');
    res.end('<h1>Hello from NodeJS Application as html</h1>')
}

function helloJSONMessage(req, res, next){
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify({message:"Hello from NodeJS Application as json"}));
}

app.use('/html', helloHTMLMessage);
app.use('/json', helloJSONMessage);
app.use('/', helloNodeMessage);

app.listen(3000);

console.log('Server is running at http://localhost:3000 address');