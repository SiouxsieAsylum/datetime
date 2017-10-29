const express = require("express");
const userRouter = express.Router();

userRouter.get("/", userController.index)
userRouter.get("/:id", userController.show)
userRouter.get("/:id/edit", (req,res) => {
  res.render('user/user-edit');
})
userRouter.get("/new", (req,res) => {
  res.render('user/user-new');
})

userRouter.post('/', userController.create)

userRouter.put('/:id', userController.update)

userRouter.delete('/:id', userController.destroy)

module.exports = profileRouter;
