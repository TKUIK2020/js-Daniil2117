const http = require("http");
const generateImage = require("random-image-creator");

http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  const pict = generateImage(280, 400);
  response.write("<img src="+pict+">");
  response.end();
}).listen(3000);
