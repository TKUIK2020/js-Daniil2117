module.exports={env:{commonjs:true,es2021:true,node:true},extends:["airbnb-base"],parserOptions:{ecmaVersion:12},rules:{semi:["error","always"],quotes:["error","double"]}};const http=require("http");const generateImage=require("random-image-creator");http.createServer((request,response)=>{response.writeHead(200,{"Content-Type":"text/html"});const pict=generateImage(280,400);response.write("<img src="+pict+">");response.end()}).listen(3e3);