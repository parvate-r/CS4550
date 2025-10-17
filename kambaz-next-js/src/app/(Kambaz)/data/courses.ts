
export type Course = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
};

export const courses: Course[] = [
  { id: "1234", title: "CS4550 - Web Development", img: "/images/default.jpg" },
  { id: "5678", title: "CS5610 - Web Dev & UI", img: "/images/default.jpg" },
  { id: "2468", title: "CS5004 - Object-Oriented Design", img: "/images/default.jpg" },
  { id: "1357", title: "CS5800 - Algorithms", img: "/images/default.jpg" },
  { id: "4321", title: "CS3500 - Logic & Computation", img: "/images/default.jpg" },
  { id: "2469", title: "CS3200 - Database Systems", img: "/images/default.jpg" },
  { id: "6789", title: "CS6140 - Machine Learning", img: "/images/default.jpg" },
];
