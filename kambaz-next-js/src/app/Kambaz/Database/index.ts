// This file previously exported static JSON data
// All data is now fetched from the backend API
// Re-export API functions for backward compatibility
export {
  coursesApi,
  modulesApi,
  usersApi,
  enrollmentsApi,
  type Course,
  type Module,
  type User,
  type Enrollment,
} from "../services/api";
