var siteRoot = __dirname;
var server = new (require("web-twins/server.js"))(siteRoot);

server.start("localhost", 8080);
