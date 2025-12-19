const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/tasks") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        success: true,
        tasks: [
          { id: 1, title: "Create GET API" },
          { id: 2, title: "Submit Kalvium assignment" }
        ]
      })
    );
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
