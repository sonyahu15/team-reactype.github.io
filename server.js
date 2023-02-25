const express = require("express");
const app = express();
const path = require("path");

// -----------------

console.log("** PATH ** --> ", path.resolve(__dirname, "./docs/index.html")); // Console log to Terminal to TEST & confirm correct file path is configured -- ALSO ensure to require in path library above
// ABOVE log yields "/app/docs/index.html" in 'heroku logs' via CLI...
// ...and "/Users/sarahkhuwaja/brett/CS-work/team-reactype.github.io/docs/index.html" for npm start

// -----------------

// w/o express.static -- tutorial and other static assets NOT served from here, only index.html
// app.get("/", (req, res) => {
//   return res.sendFile(path.resolve(__dirname, "./docs/index.html"));
// });

// w/ express.static - NO app.get & res.sendFile() needed w/ this, simply serves all static assets w/in /docs folder
app.use(express.static(path.resolve(__dirname, "./docs")));

// -----------------

// For Heroku --> https://help.heroku.com/P1AVPANS/why-is-my-node-js-app-crashing-with-an-r10-error
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});

// For express
// app.listen(3000);

// -----------------

// RUN w/ 'node server.js' or 'npm start' in CLI
