import express from "express";
import * as modulesService from "../services/modules.service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await modulesService.findAllModules());
});

router.get("/course/:courseId", async (req, res) => {
  res.json(await modulesService.findModulesByCourse(req.params.courseId));
});

router.get("/:id", async (req, res) => {
  res.json(await modulesService.findModuleById(req.params.id));
});

router.post("/", async (req, res) => {
  res.json(await modulesService.createModule(req.body));
});

router.put("/:id", async (req, res) => {
  res.json(await modulesService.updateModule(req.params.id, req.body));
});

router.delete("/:id", async (req, res) => {
  res.json(await modulesService.deleteModule(req.params.id));
});

export default router;
