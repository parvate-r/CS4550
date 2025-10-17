export interface Course {
  id: string;
  title: string;
  number: string;
  semester: string;
  instructor: string;
  image: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: "1234",
    title: "CS4550 - Web Development",
    number: "CS4550",
    semester: "Fall 2025",
    instructor: "Rudra Parvate",
    image: "/images/reactjs.jpg",
    description:
      "Learn the foundations of modern web development, including HTML, CSS, JavaScript, React, and Next.js.",
  },
  {
    id: "5678",
    title: "CS5610 - Web Dev & UI",
    number: "CS5610",
    semester: "Fall 2025",
    instructor: "Dr. Alice Johnson",
    image: "/images/nextjs.jpg",
    description:
      "Advanced web development topics focusing on UI/UX design, frameworks, and full-stack architecture.",
  },
  {
    id: "2468",
    title: "CS5004 - Object-Oriented Design",
    number: "CS5004",
    semester: "Spring 2025",
    instructor: "Prof. Bob Smith",
    image: "/images/oop.jpg",
    description:
      "An introduction to object-oriented programming principles, abstraction, encapsulation, and inheritance.",
  },
  {
    id: "1357",
    title: "CS5800 - Algorithms",
    number: "CS5800",
    semester: "Spring 2025",
    instructor: "Dr. Dana Lee",
    image: "/images/algorithms.jpg",
    description:
      "Explore classic algorithms, complexity analysis, and data structures used in computational problem solving.",
  },
  {
    id: "4321",
    title: "CS3500 - Logic & Computation",
    number: "CS3500",
    semester: "Fall 2025",
    instructor: "Prof. Charlie Nguyen",
    image: "/images/logic.jpg",
    description:
      "Study propositional and predicate logic as they apply to software correctness, proofs, and programming semantics.",
  },
  {
    id: "2469",
    title: "CS3200 - Database Systems",
    number: "CS3200",
    semester: "Fall 2025",
    instructor: "Dr. Emily Zhang",
    image: "/images/databases.jpg",
    description:
      "Introduction to relational databases, SQL, data modeling, and backend integration using Node.js and Express.",
  },
  {
    id: "6789",
    title: "CS6140 - Machine Learning",
    number: "CS6140",
    semester: "Fall 2025",
    instructor: "Dr. Raj Patel",
    image: "/images/ml.jpg",
    description:
      "Covers supervised and unsupervised learning algorithms, data processing, and AI applications in web contexts.",
  },
];
