import axios from "axios";

// Determine API base URL
const getApiBaseUrl = (): string => {
  // NEXT_PUBLIC_ variables are safe on client-side in Next.js
  if (process.env.NEXT_PUBLIC_REMOTE_SERVER) {
    return process.env.NEXT_PUBLIC_REMOTE_SERVER;
  }

  // Vite compatibility (won't run on Next.js, but harmless)
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof import.meta !== "undefined" && (import.meta as any).env?.VITE_REMOTE_SERVER) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (import.meta as any).env.VITE_REMOTE_SERVER;
    }
  } catch {
    // Ignore errors (import.meta won't exist in Next.js)
  }

  // Default to localhost for local development
  const defaultUrl = "http://localhost:4000";
  
  // Warn if we're in production and using localhost
  if (typeof window !== "undefined" && window.location.hostname !== "localhost") {
    console.warn(
      "⚠️ NEXT_PUBLIC_REMOTE_SERVER not set! Using localhost:4000. " +
      "This will not work in production. Set NEXT_PUBLIC_REMOTE_SERVER in Vercel environment variables."
    );
  }
  
  return defaultUrl;
};

const API = getApiBaseUrl();

// Log API URL in development (helps with debugging)
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  console.log("🔗 API Base URL:", API);
}

const apiClient = axios.create({
  baseURL: API,
  headers: { "Content-Type": "application/json" },
});

// Add response interceptor for better error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Enhanced error logging
    if (error.response) {
      // Server responded with error status
      console.error("API Error:", {
        status: error.response.status,
        statusText: error.response.statusText,
        url: error.config?.url,
        baseURL: error.config?.baseURL,
        data: error.response.data,
      });
    } else if (error.request) {
      // Request made but no response received
      console.error("API Network Error:", {
        message: error.message,
        url: error.config?.url,
        baseURL: error.config?.baseURL,
        hint: "Check if the backend server is running and CORS is configured correctly.",
      });
    } else {
      // Something else happened
      console.error("API Error:", error.message);
    }
    return Promise.reject(error);
  }
);

// ----- Types -----

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

// ----- API Endpoints -----

export const coursesApi = {
  getAll: async (): Promise<Course[]> => {
    const response = await apiClient.get("/api/courses");
    return response.data;
  },
  getById: async (id: string): Promise<Course> => {
    const response = await apiClient.get(`/api/courses/${id}`);
    return response.data;
  },
  create: async (course: Omit<Course, "_id">): Promise<Course> => {
    const response = await apiClient.post("/api/courses", course);
    return response.data;
  },
  update: async (id: string, course: Partial<Course>): Promise<Course> => {
    const response = await apiClient.put(`/api/courses/${id}`, course);
    return response.data;
  },
  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/api/courses/${id}`);
  },
};

export const modulesApi = {
  getAll: async (): Promise<Module[]> => {
    const response = await apiClient.get("/api/modules");
    return response.data;
  },
  getByCourse: async (courseId: string): Promise<Module[]> => {
    const response = await apiClient.get(`/api/modules/by-course/${courseId}`);
    return response.data;
  },
  create: async (module: Omit<Module, "_id">): Promise<Module> => {
    const response = await apiClient.post("/api/modules", module);
    return response.data;
  },
  update: async (id: string, module: Partial<Module>): Promise<Module> => {
    const response = await apiClient.put(`/api/modules/${id}`, module);
    return response.data;
  },
  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/api/modules/${id}`);
  },
};

export const usersApi = {
  getAll: async (): Promise<User[]> => {
    const response = await apiClient.get("/api/users");
    return response.data;
  },
  getById: async (id: string): Promise<User> => {
    const response = await apiClient.get(`/api/users/${id}`);
    return response.data;
  },
  create: async (user: Omit<User, "_id">): Promise<User> => {
    const response = await apiClient.post("/api/users", user);
    return response.data;
  },
  update: async (id: string, user: Partial<User>): Promise<User> => {
    const response = await apiClient.put(`/api/users/${id}`, user);
    return response.data;
  },
  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/api/users/${id}`);
  },
};

export const enrollmentsApi = {
  getAll: async (): Promise<Enrollment[]> => {
    const response = await apiClient.get("/api/enrollments");
    return response.data;
  },
  getByUser: async (userId: string): Promise<Enrollment[]> => {
    const response = await apiClient.get(`/api/enrollments/by-user/${userId}`);
    return response.data;
  },
  getByCourse: async (courseId: string): Promise<Enrollment[]> => {
    const response = await apiClient.get(`/api/enrollments/by-course/${courseId}`);
    return response.data;
  },
  create: async (enrollment: Omit<Enrollment, "_id">): Promise<Enrollment> => {
    const response = await apiClient.post("/api/enrollments", enrollment);
    return response.data;
  },
  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/api/enrollments/${id}`);
  },
};

export default apiClient;
