import Courses from "../modules/courses.model.js";

export const findAllCourses = () => Courses.find();
export const findCourseById = (id) => Courses.findById(id);
export const createCourse = (course) => Courses.create(course);
export const updateCourse = (id, course) =>
  Courses.findByIdAndUpdate(id, course, { new: true });
export const deleteCourse = (id) => Courses.findByIdAndDelete(id);
