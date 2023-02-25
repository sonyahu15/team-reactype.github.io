const express = require("express");
const app = express();
const path = require("path");

// -----------------

console.log(path.resolve(__dirname, "./docs/index.html")); // Console log to Terminal to TEST & confirm correct file path is configured -- ALSO ensure to require in path library above

// -----------------

// w/o express.static -- tutorial and other static assets NOT served from here, only index.html
// app.get("/", (req, res) => {
//   return res.sendFile(path.resolve(__dirname, "./docs/index.html"));
// });

// w/ express.static - NO app.get & res.sendFile() needed w/ this, simply serves all static assets w/in /docs folder
app.use(express.static(path.resolve(__dirname, "./docs")));

// -----------------

app.listen(3000);

// RUN w/ 'node server.js' or 'npm start' in CLI
