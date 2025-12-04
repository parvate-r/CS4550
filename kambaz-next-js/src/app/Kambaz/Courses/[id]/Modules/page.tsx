/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { modulesApi, Module } from "../../../services/api";

export default function ModulesPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingModule, setEditingModule] = useState<Module | null>(null);
  const [formData, setFormData] = useState<Partial<Module>>({
    course: id,
    name: "",
    description: "",
    lessons: [],
  });

  useEffect(() => {
    fetchModules();
  }, [id]);

  const fetchModules = async () => {
    try {
      setLoading(true);
      const data = await modulesApi.getByCourse(id);
      setModules(data);
    } catch (error) {
      console.error("Failed to fetch modules:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingModule(null);
    setFormData({
      course: id,
      name: "",
      description: "",
      lessons: [],
    });
    setShowModal(true);
  };

  const handleEdit = (module: Module) => {
    setEditingModule(module);
    setFormData(module);
    setShowModal(true);
  };

  const handleDelete = async (moduleId: string) => {
    if (!confirm("Are you sure you want to delete this module?")) return;
    try {
      await modulesApi.delete(moduleId);
      await fetchModules();
    } catch (error) {
      console.error("Failed to delete module:", error);
      alert("Failed to delete module");
    }
  };

  const handleSave = async () => {
    try {
      if (editingModule?._id) {
        await modulesApi.update(editingModule._id, formData as Module);
      } else {
        await modulesApi.create(formData as Omit<Module, "_id">);
      }
      setShowModal(false);
      await fetchModules();
    } catch (error) {
      console.error("Failed to save module:", error);
      alert("Failed to save module");
    }
  };

  if (loading) {
    return (
      <div className="container mt-4">
        <p>Loading modules...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Modules</h2>
        <Button variant="success" onClick={handleCreate}>
          + New Module
        </Button>
      </div>
      <hr />

      {modules.length === 0 ? (
        <p className="text-muted">No modules found for this course.</p>
      ) : (
        modules.map((m) => (
          <div key={m._id} className="card mb-3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h5>{m.name}</h5>
                  {m.description && <p className="mb-0">{m.description}</p>}
                  {m.lessons && m.lessons.length > 0 && (
                    <ul className="mt-2">
                      {m.lessons.map((lesson, idx) => (
                        <li key={idx}>{lesson}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="d-flex gap-2">
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => handleEdit(m)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => m._id && handleDelete(m._id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editingModule ? "Edit Module" : "Create New Module"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Module Name</Form.Label>
              <Form.Control
                type="text"
                value={formData.name || ""}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
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
            <Form.Group className="mb-3">
              <Form.Label>Lessons (comma-separated)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Lesson 1, Lesson 2, Lesson 3"
                value={
                  formData.lessons ? formData.lessons.join(", ") : ""
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    lessons: e.target.value
                      .split(",")
                      .map((l) => l.trim())
                      .filter((l) => l.length > 0),
                  })
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
  );
}
