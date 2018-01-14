var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var moment = require("moment");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var stylus = require("stylus");

var api = require("./routes/api");
// mongoose setup
require('./db/db');


var app = express();

require("log-timestamp")(function() {
  return "[" + moment().format("ddd, D MMM YYYY hh:mm:ss Z") + "] - %s";
});

// uncomment after placing your favicon in /public
app.use(express.static(__dirname + "/public/html"));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));

/* ===================================================== */
/*                        HTML Pages                     */
/* ===================================================== */
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/html/index.html"));
});

/* ===================================================== */
/*                        ENDPOINTS                      */
/* ===================================================== */
app.post("/api/registration", api.createRegistration);
app.put("/api/registration/:id", api.storeRegistration);
app.delete("/api/registration/:id", api.deleteRegistration);
app.get("/api/registration/:id", api.loadRegistration);
app.get("/api/registration", api.loadAllRegistrations);

/* ===================================================== */
/*                     EXPRESS HANDLER                   */
/* ===================================================== */
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  res.sendFile(path.join(__dirname + "/public/html/404.html"));
  // next(err)
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500).send(err);
});

module.exports = app;
