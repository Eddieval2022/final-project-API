const {Router} = require("express");
<<<<<<< HEAD
const { login, signUp, changePassword, deleteUser, listUser, findAll,  updateUserDetails } = require("./controllers");
=======

const { login, signUp, changePassword, deleteUser, listUser, findAll, addAddress } = require("./controllers");
>>>>>>> cfd6c0affd6fb6cb7ca331098e407280d801a5dc
const {  hashPass, comparePass, tokenCheck, verifyEmail } = require ("../middleware/index.js")

const userRouter = Router();

userRouter.post("/user", verifyEmail, hashPass, signUp); // define a post request on /user endpoint that calls the signUp controller
userRouter.post("/user", hashPass, signUp); // define a post request on /user endpoint that calls the signUp controller

userRouter.post("/login", comparePass, login); // define a get request on /log-in endpoint that calls the logIn controller
userRouter.get("/login", tokenCheck, login); // define a get request on /user endpoint that calls the tokenCheck and login methods

userRouter.put("/change-password", comparePass, hashPass, changePassword); // define a post request on /change-password endpoint that calls the changePassword controller
userRouter.get("/user/:username", listUser);
userRouter.get("/user", findAll);
userRouter.delete("/delete-account", tokenCheck, deleteUser); // define a delete request on /delete-account endpoint that calls the deleteUser controller
userRouter.patch("/user", updateUserDetails);

module.exports = userRouter;
