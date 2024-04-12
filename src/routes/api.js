import express from "express";
const router = express.Router();
import * as teacherController from "../controller/teacherController.js";

router.get("/teacher/get", teacherController.get);
router.post("/teacher/create", teacherController.create);
router.delete("/teacher/delete/:id", teacherController.remove);
router.put("/teacher/update/:id", teacherController.update);
router.patch("/teacher/one/:name", teacherController.singleData);
export default router;
