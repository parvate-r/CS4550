/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { usersApi, enrollmentsApi, User, Enrollment } from "../../../services/api";

export default function PeoplePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const [enrolledUsers, setEnrolledUsers] = useState<User[]>([]);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState("");

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [usersData, enrollmentsData] = await Promise.all([
        usersApi.getAll(),
        enrollmentsApi.getByCourse(id),
      ]);

      setAllUsers(usersData);
      setEnrollments(enrollmentsData);

      // Get enrolled user IDs
      const enrolledUserIds = enrollmentsData.map((e) => e.user);
      const enrolled = usersData.filter((u) =>
        u._id && enrolledUserIds.includes(u._id)
      );
      setEnrolledUsers(enrolled);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEnroll = async () => {
    if (!selectedUserId) return;
    try {
      await enrollmentsApi.create({
        user: selectedUserId,
        course: id,
      });
      setShowEnrollModal(false);
      setSelectedUserId("");
      await fetchData();
    } catch (error) {
      console.error("Failed to enroll user:", error);
      alert("Failed to enroll user");
    }
  };

  const handleUnenroll = async (enrollmentId: string) => {
    if (!confirm("Are you sure you want to unenroll this user?")) return;
    try {
      await enrollmentsApi.delete(enrollmentId);
      await fetchData();
    } catch (error) {
      console.error("Failed to unenroll user:", error);
      alert("Failed to unenroll user");
    }
  };

  const getEnrollmentId = (userId: string): string | undefined => {
    return enrollments.find((e) => e.user === userId)?._id;
  };

  const getDisplayName = (user: User): string => {
    if (user.fullName) return user.fullName;
    if (user.firstName || user.lastName) {
      return `${user.firstName || ""} ${user.lastName || ""}`.trim();
    }
    return user.username;
  };

  if (loading) {
    return (
      <div className="container mt-4">
        <p>Loading people...</p>
      </div>
    );
  }

  // Get users not yet enrolled
  const enrolledUserIds = enrollments.map((e) => e.user);
  const availableUsers = allUsers.filter(
    (u) => u._id && !enrolledUserIds.includes(u._id)
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>People</h2>
        <Button variant="success" onClick={() => setShowEnrollModal(true)}>
          + Enroll User
        </Button>
      </div>
      <hr />

      {enrolledUsers.length === 0 ? (
        <p className="text-muted">No users enrolled in this course.</p>
      ) : (
        <ul className="list-group">
          {enrolledUsers.map((u) => {
            const enrollmentId = u._id ? getEnrollmentId(u._id) : undefined;
            return (
              <li key={u._id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>
                  {getDisplayName(u)} — {u.role || "Student"}
                </span>
                {enrollmentId && (
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleUnenroll(enrollmentId)}
                  >
                    Unenroll
                  </Button>
                )}
              </li>
            );
          })}
        </ul>
      )}

      <Modal show={showEnrollModal} onHide={() => setShowEnrollModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enroll User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Select User</Form.Label>
              <Form.Select
                value={selectedUserId}
                onChange={(e) => setSelectedUserId(e.target.value)}
              >
                <option value="">Choose a user...</option>
                {availableUsers.map((u) => (
                  <option key={u._id} value={u._id}>
                    {getDisplayName(u)} ({u.username}) — {u.role || "Student"}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEnrollModal(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleEnroll}
            disabled={!selectedUserId}
          >
            Enroll
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
