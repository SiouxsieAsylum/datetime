const express = require("express");
const eventRouter = express.Router();

eventRouter.get("/", (req, res) => {
  res.send("Event Root")
})

eventRouter.get("/:id", (req, res) => {
  res.send(`event ${req.params.id}`)
})


module.exports = eventRouter;
