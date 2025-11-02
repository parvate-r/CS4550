"use client";
import NavigationSidebar from "./NavigationSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./kambaz.css";
import { Container, Row, Col } from "react-bootstrap";
import { Provider, useSelector } from "react-redux";
import { store, RootState } from "./store";
import TaskBoardControls from "./components/TaskBoardControls";

function TaskBoard() {
  const board = useSelector((state: RootState) => state.board);

  return (
    <Container fluid className="mt-4">
      <Row>
        
        <Col md={4} className="p-2">
          <div className="kambaz-column p-3">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h4 className="mb-0">Backlog</h4>
            </div>
            {board.backlog.map((task, i) => (
              <div key={i} className="kambaz-task">
                {task}
              </div>
            ))}
          </div>
        </Col>

        
        <Col md={4} className="p-2">
          <div className="kambaz-column p-3">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h4 className="mb-0">In Progress</h4>
            </div>
            {board.inProgress.map((task, i) => (
              <div key={i} className="kambaz-task">
                {task}
              </div>
            ))}
          </div>
        </Col>

        
        <Col md={4} className="p-2">
          <div className="kambaz-column p-3">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h4 className="mb-0">Done</h4>
            </div>
            {board.done.map((task, i) => (
              <div key={i} className="kambaz-task">
                {task}
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default function Kambaz() {
  return (
    <Provider store={store}>
      <div className="d-flex">
        <NavigationSidebar />
        <div className="container mt-4">
          <h2>Kambaz Dashboard</h2>
          <p>
            Welcome to your course hub! Use the sidebar to access labs, dashboard,
            courses, account, assignments, grades, modules, people, Piazza, Zoom,
            and quizzes.
          </p>

          {/* Redux-powered Controls */}
          <TaskBoardControls />

          {/* Redux-powered Board */}
          <TaskBoard />
        </div>
      </div>
    </Provider>
  );
}
