const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");

const normalizePort = val => {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

const onError = error => {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof add === "string" ? "pipe " + addr : "port" + port
    switch (error.code) {
        case "EACCESS":
            console.log(bind + "requires elevated previleges!");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.log(bind + "is already in use!");
            break;
        default:
            throw error;
    }
};

const onListening = () => {
    const addr = server.address();
    const bind = typeof add === "string" ? "pipe " + addr : "port" + port
    debug ("Listening on " + bind)
};

const port = normalizePort(process.env.PORT || "3000")
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);



