"use client";
import NavigationSidebar from "./NavigationSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./kambaz.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Kambaz() {
  return (
    <div className="d-flex">
      <NavigationSidebar />
      <div className="container mt-4">
        <h2>Kambaz Dashboard</h2>
        <p>
          Welcome to your course hub! Use the sidebar to access labs, dashboard,
          courses, account, assignments, grades, modules, people, Piazza, Zoom,
          and quizzes.
        </p>

        <Container fluid className="mt-4">
          <Row>
            {/* BACKLOG */}
            <Col md={4} className="p-2">
              <div className="kambaz-column p-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h4 className="mb-0">Backlog</h4>
                  <button className="btn btn-sm btn-outline-secondary">+ Add</button>
                </div>
                <div className="kambaz-task">Design landing page</div>
                <div className="kambaz-task">Collect course images</div>
                <div className="kambaz-task">Write syllabus</div>
              </div>
            </Col>

            {/* IN PROGRESS */}
            <Col md={4} className="p-2">
              <div className="kambaz-column p-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h4 className="mb-0">In Progress</h4>
                  <button className="btn btn-sm btn-outline-secondary">+ Add</button>
                </div>
                <div className="kambaz-task">Implement Dashboard grid</div>
                <div className="kambaz-task">Integrate React Icons</div>
              </div>
            </Col>

            {/* DONE */}
            <Col md={4} className="p-2">
              <div className="kambaz-column p-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h4 className="mb-0">Done</h4>
                  <button className="btn btn-sm btn-outline-secondary">+ Add</button>
                </div>
                <div className="kambaz-task">Project scaffold</div>
                <div className="kambaz-task">Lab 1 pages</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
