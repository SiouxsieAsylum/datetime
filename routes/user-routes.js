const express = require("express");
const userController = require('../controllers/user-controllers')
const userRouter = express.Router();

userRouter.get("/", userController.findAllEvents)
userRouter.get("/new", (req,res) => {
  res.render('users/user-new', {user: req.user,
      auth: (req.user) ? true : false
    });
})

userRouter.get("/:id", userController.findHostedEvents)
userRouter.get("/:id/edit", userController.edit)


// userRouter.post('/', userController.create)

userRouter.put('/:id', userController.update)

userRouter.delete('/:id', userController.destroy)

module.exports = userRouter;
