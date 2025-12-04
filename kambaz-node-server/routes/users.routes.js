import express from "express";
import * as usersService from "../services/users.service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await usersService.findAllUsers();
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const user = await usersService.findUserById(req.params.id);
  res.json(user);
});

router.post("/", async (req, res) => {
  const newUser = await usersService.createUser(req.body);
  res.json(newUser);
});

router.put("/:id", async (req, res) => {
  const updated = await usersService.updateUser(req.params.id, req.body);
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  const status = await usersService.deleteUser(req.params.id);
  res.json(status);
});

export default router;
