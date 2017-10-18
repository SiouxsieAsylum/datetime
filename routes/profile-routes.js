const express = require("express");
const profileRouter = express.Router();

profileRouter.get("/", (req, res) => {
  res.send("Profile Root")
})

profileRouter.get("/:id", (req, res) => {
  res.send(`Profile ${req.params.id}`)
})

module.exports = profileRouter;
