import Modules from "../modules/modules.model.js";

export const findAllModules = () => Modules.find();

export const findModuleById = (id) => Modules.findById(id);

export const findModulesByCourse = (courseId) =>
  Modules.find({ course: courseId });

export const createModule = (module) => Modules.create(module);

export const updateModule = (id, module) =>
  Modules.findByIdAndUpdate(id, module, { new: true });

export const deleteModule = (id) => Modules.findByIdAndDelete(id);
