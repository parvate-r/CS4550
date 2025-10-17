"use client";
import NavigationSidebar from "../NavigationSidebar";
import Link from "next/link";
import { Row, Col, Card, Button } from "react-bootstrap";
import "../kambaz.css";
import "./dashboard.css";

const sampleCourses = [
  { _id: "c1", name: "CS4550 React", desc: "Full Stack software developer", img: "/images/reactjs.jpg" },
  { _id: "c2", name: "CS1234 Node", desc: "Node.js fundamentals", img: "/images/stacked.jpg" },
  { _id: "c3", name: "CS2222 Databases", desc: "Databases and SQL", img: "/images/reactjs.jpg" },
  { _id: "c4", name: "CS3333 Frontend", desc: "Advanced frontend", img: "/images/stacked.jpg" },
  { _id: "c5", name: "CS4444 UX", desc: "UX & Design", img: "/images/reactjs.jpg" },
  { _id: "c6", name: "CS5555 DevOps", desc: "Deploy and maintain", img: "/images/stacked.jpg" },
  { _id: "c7", name: "CS6666 Security", desc: "Security essentials", img: "/images/reactjs.jpg" },
];

export default function Dashboard() {
  return (
    <div className="d-flex">
      <NavigationSidebar />
      <div className="wd-main-content-offset container mt-4">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <hr />
        <h2 id="wd-dashboard-published">Published Courses ({sampleCourses.length})</h2>
        <hr />
        <Row xs={1} md={3} lg={4} className="g-4">
          {sampleCourses.map((course) => (
            <Col key={course._id} className="wd-dashboard-course">
              <Card>
                <Link
                  href={`/Kambaz/Courses/${course._id}/Home`}
                  className="text-decoration-none text-dark"
                >
                  <Card.Img variant="top" src={course.img} height={160} />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: 80 }}
                    >
                      {course.desc}
                    </Card.Text>
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
