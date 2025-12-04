"use client";
import { useState, useEffect } from "react";
import NavigationSidebar from "../NavigationSidebar";
import Link from "next/link";
import { Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import { coursesApi, Course } from "../services/api";
import "../kambaz.css";
import "./dashboard.css";

export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [formData, setFormData] = useState<Partial<Course>>({
    name: "",
    number: "",
    term: "",
    startDate: "",
    endDate: "",
    image: "/images/reactjs.jpg",
    description: "",
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await coursesApi.getAll();
      setCourses(data);
    } catch (error: any) {
      console.error("Failed to fetch courses:", error);
      const errorMessage = error?.response?.status === 404
        ? "Backend server not found. Please check your NEXT_PUBLIC_REMOTE_SERVER environment variable."
        : error?.message || "Failed to load courses. Please check your backend connection.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingCourse(null);
    setFormData({
      name: "",
      number: "",
      term: "",
      startDate: "",
      endDate: "",
      image: "/images/reactjs.jpg",
      description: "",
    });
    setShowModal(true);
  };

  const handleEdit = (course: Course) => {
    setEditingCourse(course);
    setFormData(course);
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this course?")) return;
    try {
      await coursesApi.delete(id);
      await fetchCourses();
    } catch (error) {
      console.error("Failed to delete course:", error);
      alert("Failed to delete course");
    }
  };

  const handleSave = async () => {
    try {
      if (editingCourse?._id) {
        await coursesApi.update(editingCourse._id, formData as Course);
      } else {
        await coursesApi.create(formData as Omit<Course, "_id">);
      }
      setShowModal(false);
      await fetchCourses();
    } catch (error) {
      console.error("Failed to save course:", error);
      alert("Failed to save course");
    }
  };

  if (loading) {
    return (
      <div className="d-flex" id="wd-dashboard">
        <NavigationSidebar />
        <div className="wd-main-content-offset container mt-4">
          <p>Loading courses...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex" id="wd-dashboard">
        <NavigationSidebar />
        <div className="wd-main-content-offset container mt-4">
          <div className="alert alert-danger">
            <h4>Error Loading Courses</h4>
            <p>{error}</p>
            <p className="mb-0">
              <strong>Debugging tips:</strong>
              <ul className="mt-2">
                <li>Check that NEXT_PUBLIC_REMOTE_SERVER is set in Vercel environment variables</li>
                <li>Verify your backend server is running on Render</li>
                <li>Check browser console for detailed error messages</li>
                <li>Ensure CORS is configured correctly on the backend</li>
              </ul>
            </p>
            <Button variant="primary" onClick={fetchCourses} className="mt-3">
              Retry
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex" id="wd-dashboard">
      <NavigationSidebar />
      <div className="wd-main-content-offset container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 id="wd-dashboard-title">Dashboard</h1>
          <Button variant="success" onClick={handleCreate}>
            + New Course
          </Button>
        </div>
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
                <Card.Footer className="d-flex gap-2">
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault();
                      handleEdit(course);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault();
                      if (course._id) handleDelete(course._id);
                    }}
                  >
                    Delete
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              {editingCourse ? "Edit Course" : "Create New Course"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Course Name</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.name || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Course Number</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.number || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, number: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Term</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.term || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, term: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  value={formData.startDate || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  value={formData.endDate || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, endDate: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.image || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={formData.description || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
