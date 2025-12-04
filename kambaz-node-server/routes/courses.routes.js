import express from "express";
import * as coursesService from "../services/courses.service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await coursesService.findAllCourses());
});

router.get("/:id", async (req, res) => {
  res.json(await coursesService.findCourseById(req.params.id));
});

router.post("/", async (req, res) => {
  res.json(await coursesService.createCourse(req.body));
});

router.put("/:id", async (req, res) => {
  res.json(await coursesService.updateCourse(req.params.id, req.body));
});

router.delete("/:id", async (req, res) => {
  res.json(await coursesService.deleteCourse(req.params.id));
});

export default router;
