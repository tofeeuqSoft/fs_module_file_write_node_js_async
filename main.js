let fs= require('fs');
let http= require('http');

let server=http.createServer(function (req, res) {

    if (req.url = "/") {

        fs.writeFile('index.txt', 'hello world', function (error) {
            if (error) {
                res.writeHead(200, {'Content-type': 'text/html'});
                res.write('file write fail');
                res.end();
            } else {
                res.writeHead(200, {'Content-type': 'text/html'});
                res.write('file write success');
                res.end();
            }
        });

    }
});
server.listen(5050);
console.log("server run..");