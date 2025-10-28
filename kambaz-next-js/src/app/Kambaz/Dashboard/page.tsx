"use client";
import NavigationSidebar from "../NavigationSidebar";
import Link from "next/link";
import { Row, Col, Card, Button } from "react-bootstrap";
import * as db from "../Database";
import "../kambaz.css";
import "./dashboard.css";

export default function Dashboard() {
  const { courses } = db;

  return (
    <div className="d-flex" id="wd-dashboard">
      <NavigationSidebar />
      <div className="wd-main-content-offset container mt-4">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <hr />
        <h2 id="wd-dashboard-published">
          Published Courses ({courses.length})
        </h2>
        <hr />

        <Row xs={1} md={3} lg={4} className="g-4">
          {courses.map((course) => (
            <Col key={course._id} className="wd-dashboard-course">
              <Card className="course-card h-100 shadow-sm">
                <Link
                  href={`/Kambaz/Courses/${course._id}/Home`}
                  className="text-decoration-none text-dark"
                >
                  <Card.Img
                    variant="top"
                    src={course.image}
                    className="course-img"
                  />
                  <Card.Body>
                    <Card.Title className="text-nowrap overflow-hidden">
                      {course.name}
                    </Card.Title>
                    <Card.Text
                      className="overflow-hidden"
                      style={{ height: 80 }}
                    >
                      {course.description}
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
