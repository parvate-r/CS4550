import axios from "axios";

// Get the API base URL from environment variables
// Supports both Next.js (NEXT_PUBLIC_REMOTE_SERVER) and Vite (VITE_REMOTE_SERVER) patterns
// In Next.js, process.env is replaced at build time, so we can access it directly
const getApiBaseUrl = (): string => {
  // Check for Next.js environment variable (NEXT_PUBLIC_ prefix required for client-side)
  // @ts-ignore - process.env is available at build time in Next.js
  if (process.env.NEXT_PUBLIC_REMOTE_SERVER) {
    // @ts-ignore
    return process.env.NEXT_PUBLIC_REMOTE_SERVER;
  }
  
  // For Vite compatibility, try to access import.meta.env
  // Note: This won't work in Next.js, but included for compatibility
  try {
    // @ts-ignore - Vite style (not available in Next.js)
    if (typeof import.meta !== "undefined" && import.meta.env?.VITE_REMOTE_SERVER) {
      // @ts-ignore
      return import.meta.env.VITE_REMOTE_SERVER;
    }
  } catch (e) {
    // import.meta not available (expected in Next.js)
  }
  
  // Fallback to localhost
  return "http://localhost:4000";
};

// Use the API base URL
// Set NEXT_PUBLIC_REMOTE_SERVER in .env.local for Next.js
// Or set VITE_REMOTE_SERVER if using Vite
const API = getApiBaseUrl();

// Create axios instance with base URL
const apiClient = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
});

// Types
export interface Course {
  _id?: string;
  name: string;
  number: string;
  term: string;
  startDate: string;
  endDate: string;
  image: string;
  description: string;
}

export interface Module {
  _id?: string;
  course: string;
  name: string;
  description?: string;
  lessons?: string[];
}

export interface User {
  _id?: string;
  username: string;
  fullName?: string;
  firstName?: string;
  lastName?: string;
  role: string;
}

export interface Enrollment {
  _id?: string;
  user: string;
  course: string;
}

// Courses API
export const coursesApi = {
  getAll: async (): Promise<Course[]> => {
    const response = await apiClient.get<Course[]>("/api/courses");
    return response.data;
  },
  getById: async (id: string): Promise<Course> => {
    const response = await apiClient.get<Course>(`/api/courses/${id}`);
    return response.data;
  },
  create: async (course: Omit<Course, "_id">): Promise<Course> => {
    const response = await apiClient.post<Course>("/api/courses", course);
    return response.data;
  },
  update: async (id: string, course: Partial<Course>): Promise<Course> => {
    const response = await apiClient.put<Course>(`/api/courses/${id}`, course);
    return response.data;
  },
  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/api/courses/${id}`);
  },
};

// Modules API
export const modulesApi = {
  getAll: async (): Promise<Module[]> => {
    const response = await apiClient.get<Module[]>("/api/modules");
    return response.data;
  },
  getByCourse: async (courseId: string): Promise<Module[]> => {
    const response = await apiClient.get<Module[]>(`/api/modules/by-course/${courseId}`);
    return response.data;
  },
  create: async (module: Omit<Module, "_id">): Promise<Module> => {
    const response = await apiClient.post<Module>("/api/modules", module);
    return response.data;
  },
  update: async (id: string, module: Partial<Module>): Promise<Module> => {
    const response = await apiClient.put<Module>(`/api/modules/${id}`, module);
    return response.data;
  },
  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/api/modules/${id}`);
  },
};

// Users API
export const usersApi = {
  getAll: async (): Promise<User[]> => {
    const response = await apiClient.get<User[]>("/api/users");
    return response.data;
  },
  getById: async (id: string): Promise<User> => {
    const response = await apiClient.get<User>(`/api/users/${id}`);
    return response.data;
  },
  create: async (user: Omit<User, "_id">): Promise<User> => {
    const response = await apiClient.post<User>("/api/users", user);
    return response.data;
  },
  update: async (id: string, user: Partial<User>): Promise<User> => {
    const response = await apiClient.put<User>(`/api/users/${id}`, user);
    return response.data;
  },
  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/api/users/${id}`);
  },
};

// Enrollments API
export const enrollmentsApi = {
  getAll: async (): Promise<Enrollment[]> => {
    const response = await apiClient.get<Enrollment[]>("/api/enrollments");
    return response.data;
  },
  getByUser: async (userId: string): Promise<Enrollment[]> => {
    const response = await apiClient.get<Enrollment[]>(`/api/enrollments/by-user/${userId}`);
    return response.data;
  },
  getByCourse: async (courseId: string): Promise<Enrollment[]> => {
    const response = await apiClient.get<Enrollment[]>(`/api/enrollments/by-course/${courseId}`);
    return response.data;
  },
  create: async (enrollment: Omit<Enrollment, "_id">): Promise<Enrollment> => {
    const response = await apiClient.post<Enrollment>("/api/enrollments", enrollment);
    return response.data;
  },
  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/api/enrollments/${id}`);
  },
};

export default apiClient;

