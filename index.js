const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");
const cors = require('cors')

const PORT = process.env.PORT || 8082;

// Headers
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,HEAD,OPTIONS,POST,PUT,DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes)

async function start() {
    try {
        await app.listen(PORT, async () => {
            console.log(`running server on port ${PORT}`);
        });
    } catch (e) {
        console.log('running server ERROR :', e)
    }
}

return start();