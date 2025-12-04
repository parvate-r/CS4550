import express from "express";
import * as enrollmentsService from "../services/enrollments.service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await enrollmentsService.findAllEnrollments());
});

router.get("/user/:userId", async (req, res) => {
  res.json(await enrollmentsService.findEnrollmentsByUser(req.params.userId));
});

router.get("/course/:courseId", async (req, res) => {
  res.json(await enrollmentsService.findEnrollmentsByCourse(req.params.courseId));
});

router.post("/", async (req, res) => {
  res.json(await enrollmentsService.createEnrollment(req.body));
});

router.delete("/:id", async (req, res) => {
  res.json(await enrollmentsService.deleteEnrollment(req.params.id));
});

export default router;
