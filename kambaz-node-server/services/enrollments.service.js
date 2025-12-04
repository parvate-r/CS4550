import Enrollments from "../modules/enrollments.model.js";

export const findAllEnrollments = () => Enrollments.find();

export const findEnrollmentsByUser = (userId) =>
  Enrollments.find({ user: userId });

export const findEnrollmentsByCourse = (courseId) =>
  Enrollments.find({ course: courseId });

export const createEnrollment = (enrollment) =>
  Enrollments.create(enrollment);

export const deleteEnrollment = (id) =>
  Enrollments.findByIdAndDelete(id);
