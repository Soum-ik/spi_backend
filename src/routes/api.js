import express from "express";
const router = express.Router();
import * as teacherController from "../controller/teacherController.js";
import * as noticController from "../controller/noticController.js";
import * as eventController from "../controller/eventController.js";
import * as resultController from "../controller/resultController.js";

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

// event api
router.get("/event/get", eventController.get);
router.post("/event/create", eventController.create);
router.delete("/event/delete/:id", eventController.remove);
router.put("/event/update/:id", eventController.update);
router.patch("/event/one/:name", eventController.singleData);

// result api
router.get("/result", resultController.get);

export default router;
