const { spawn } = require("child_process");
const http = require("http");

const ls = spawn("ls", ["-la"]);

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
  // Set a response type of plain text for the response
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send back a response and end the connection
  res.end("Hello World!\n");
});

// Start the server on port 3000
app.listen(3000, "127.0.0.1");
console.log("Node server running on port 3000");

// Shell Commands
ls.stderr.on("data", (data) => {
  console.log(`stderr: ${data}`);
});

ls.on("error", (error) => {
  console.log(`error: ${error.message}`);
});

ls.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
