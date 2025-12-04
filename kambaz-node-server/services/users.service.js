import Users from "../modules/users.model.js";

export const findAllUsers = () => Users.find();

export const findUserById = (id) => Users.findById(id);

export const createUser = (user) => Users.create(user);

export const updateUser = (id, user) =>
  Users.findByIdAndUpdate(id, user, { new: true });

export const deleteUser = (id) => Users.findByIdAndDelete(id);
