const { Router} = require('express')
const authController = require("../controllers/auth.controller")
const authRouter = Router()
const authMiddleware = require("../middlewares/auth.middleware")
/*
* @route POST /api/auth/register
* @description registered a new user
* *@access Public
*/
authRouter.post("/register",authController.registeredUserController)

authRouter.post("/login",authController.loginUserController)

authRouter.get("/logout",authController.logoutUserController)

authRouter.get("/get-me",authMiddleware.authUser,authController.getMeController)


module.exports = authRouter