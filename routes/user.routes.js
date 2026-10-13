import { Router } from "express";
import userController from "../controller/user.controller.js";


const route = Router();

route.post("/user/create", userController.CreateUser);
route.get("/user/get", userController.GetUser);
route.patch("/user/update/:id", userController.UpdateUser);
route.delete("/user/delete/:id", userController.DeleteUser);



export default route;