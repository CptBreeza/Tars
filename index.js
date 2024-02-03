const http = require("http");
const createHandler = require("github-webhook-handler");

const handler = createHandler({ path: "/webhook", secret: "tars-secret" });

http.createServer(function(req, res) {
  handler(req, res, function() {
    res.statusCode = 404;
    res.end("no such location");
  });
}).listen(7777);

handler.on("error", function(err) {
  console.error("Error:", err.message);
});

handler.on("pull_request_review_comment", function(event) {
  console.log(event);
});
