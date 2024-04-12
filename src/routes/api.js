import express from "express";
const router = express.Router();
import * as teacherController from "../controller/teacherController.js";
import * as noticController from "../controller/noticController.js"; 

// Teacher api
router.get("/teacher/get", teacherController.get);
router.post("/teacher/create", teacherController.create);
router.delete("/teacher/delete/:id", teacherController.remove);
router.put("/teacher/update/:id", teacherController.update);
router.patch("/teacher/one/:name", teacherController.singleData);

// Notic api
router.get("/notic/get", noticController.get);
router.post("/notic/create", noticController.create);
router.delete("/notic/delete/:id", noticController.remove);
router.put("/notic/update/:id", noticController.update);
router.patch("/notic/one/:name", noticController.singleData);

export default router;
