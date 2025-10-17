"use client";
import "./index.css";
import Link from "next/link";
import { useEffect } from "react";
import {
  Container,
  Alert,
  Button,
  Card,
  Nav,
  NavItem,
  NavLink,
} from "react-bootstrap";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import ReactIconsSampler from "./ReactIcons";

export default function Lab2() {
  // ✅ Dynamically load Bootstrap JS (browser only)
  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const bootstrap = await import("bootstrap");
        const tooltipTriggerList = document.querySelectorAll(
          '[data-bs-toggle="tooltip"]'
        );
        tooltipTriggerList.forEach((el) => new bootstrap.Tooltip(el));
      }
    })();
  }, []);

  return (
    <Container id="wd-lab2" className="my-4">
      <h1>Lab 2 – Cascading Style Sheets and React Bootstrap</h1>

      {/* ===========================================================
          CHAPTER 2.1 – CASCADING STYLE SHEETS
      =========================================================== */}

      {/* 2.1.1 Styling HTML Tags with the Style Attribute */}
      <section id="wd-2-1-1" className="mb-4">
        <h2>2.1.1 – Styling with the STYLE attribute</h2>
        <p style={{ backgroundColor: "blue", color: "white", padding: "8px" }}>
          Inline CSS styling example.
        </p>
      </section>

      {/* 2.1.2 Importing CSS Documents */}
      <section id="wd-2-1-2" className="mb-4">
        <h2>2.1.2 – Importing CSS Files</h2>
        <p>This page imports <code>index.css</code> for global styles.</p>
      </section>

      {/* 2.1.3 ID Selectors */}
      <section id="wd-2-1-3" className="mb-4">
        <h2>2.1.3 – ID Selectors</h2>
        <p id="wd-id-selector-1">ID Selector 1 applied</p>
        <p id="wd-id-selector-2">ID Selector 2 applied</p>
      </section>

      {/* 2.1.4 Class Selectors */}
      <section id="wd-2-1-4" className="mb-4">
        <h2>2.1.4 – Class Selectors</h2>
        <p className="wd-class-selector">Paragraph using class selector</p>
        <h4 className="wd-class-selector">Heading using same class</h4>
      </section>

      {/* 2.1.5 Selecting Based on Document Structure */}
      <section id="wd-2-1-5" className="mb-4">
        <h2>2.1.5 – Document Structure Selectors</h2>
        <div className="wd-selector-1">
          <div className="wd-selector-2">
            <p className="wd-selector-3">
              This paragraph is targeted by a nested selector.{" "}
              <span className="wd-selector-4">
                Span targeted by child selector
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* 2.1.6 Foreground Colors */}
      <section id="wd-2-1-6" className="mb-4">
        <h2>2.1.6 – Foreground Colors</h2>
        <p className="wd-fg-color-red">
          Red text with <span className="wd-fg-color-green">green span</span>.
        </p>
      </section>

      {/* 2.1.7 Background Colors */}
      <section id="wd-2-1-7" className="mb-4">
        <h2>2.1.7 – Background Colors</h2>
        <p className="wd-bg-color-blue wd-fg-color-white">
          Blue background white text
        </p>
      </section>

      {/* 2.1.8 Borders */}
      <section id="wd-2-1-8" className="mb-4">
        <h2>2.1.8 – Borders</h2>
        <p className="wd-border-thick wd-border-blue wd-border-solid wd-padding-fat">
          Solid blue border
        </p>
      </section>

      {/* 2.1.9 Margins & Padding */}
      <section id="wd-2-1-9" className="mb-4">
        <h2>2.1.9 – Margins and Padding</h2>
        <div className="wd-margin-example wd-padding-fat">
          Example of margin and padding
        </div>
      </section>

      {/* 2.1.10 Rounded Corners */}
      <section id="wd-2-1-10" className="mb-4">
        <h2>2.1.10 – Rounded Corners</h2>
        <p className="wd-rounded-corners-all-around wd-border-blue wd-border-solid wd-padding-fat">
          Rounded corners all around
        </p>
      </section>

      {/* 2.1.11 Dimensions */}
      <section id="wd-2-1-11" className="mb-4">
        <h2>2.1.11 – Dimensions</h2>
        <div className="d-flex gap-3">
          <div className="wd-dimension-portrait wd-bg-color-yellow text-center">
            Portrait
          </div>
          <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white text-center">
            Landscape
          </div>
          <div className="wd-dimension-square wd-bg-color-red wd-fg-color-white text-center">
            Square
          </div>
        </div>
      </section>

      {/* 2.1.12 Relative Position */}
      <section id="wd-2-1-12" className="mb-4">
        <h2>2.1.12 – Relative Position</h2>
        <div className="wd-bg-color-gray p-3">
          <div className="wd-pos-relative-nudge-down-right wd-bg-color-yellow wd-dimension-portrait">
            Nudge down-right
          </div>
        </div>
      </section>

      {/* 2.1.13 Absolute Position */}
      <section id="wd-2-1-13" className="mb-4 position-relative">
        <h2>2.1.13 – Absolute Position</h2>
        <div className="wd-pos-relative" style={{ minHeight: "220px" }}>
          <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">
            Portrait
          </div>
          <div className="wd-pos-absolute-50-50 wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
            Landscape
          </div>
          <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">
            Square
          </div>
        </div>
      </section>

      {/* 2.1.14 Fixed Position */}
      <section id="wd-2-1-14" className="mb-4">
        <h2>2.1.14 – Fixed Position</h2>
        <div className="wd-pos-fixed wd-dimension-square wd-bg-color-blue wd-fg-color-white">
          Fixed box
        </div>
      </section>

      {/* 2.1.15 Z-Index */}
      <section id="wd-2-1-15" className="mb-4 position-relative" style={{ minHeight: "180px" }}>
        <h2>2.1.15 – Z-Index</h2>
        <div className="wd-pos-relative">
          <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">Back</div>
          <div className="wd-zindex-bring-to-front wd-pos-absolute-50-50 wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
            Front
          </div>
        </div>
      </section>

      {/* 2.1.16 Floating Images & Content */}
      <section id="wd-2-1-16" className="mb-4">
        <h2>2.1.16 – Floating Images and Content</h2>
        <img src="/images/reactjs.jpg" alt="react" className="wd-float-right wd-dimension-square me-3" />
        <p>Paragraph wrapping around a floated image.</p>
        <div style={{ clear: "both" }} />
      </section>

      {/* 2.1.17 Grid Layout */}
      <section id="wd-2-1-17" className="mb-4">
        <h2>2.1.17 – Grid Layout</h2>
        <div className="wd-grid-demo">
          <div className="wd-grid-item wd-bg-color-yellow">1</div>
          <div className="wd-grid-item wd-bg-color-blue wd-fg-color-white">2</div>
          <div className="wd-grid-item wd-bg-color-red wd-fg-color-white">3</div>
          <div className="wd-grid-item wd-bg-color-green wd-fg-color-white">4</div>
        </div>
      </section>

      {/* 2.1.18 Flex Layout */}
      <section id="wd-2-1-18" className="mb-4">
        <h2>2.1.18 – Flex Layout</h2>
        <div className="wd-flex-row-container wd-border-solid p-2">
          <div className="wd-bg-color-yellow wd-width-75px p-2">Col 1</div>
          <div className="wd-bg-color-blue p-2 wd-fg-color-white">Col 2</div>
          <div className="wd-bg-color-red wd-flex-grow-1 p-2 wd-fg-color-white">Col 3 (grows)</div>
        </div>
      </section>

      {/* 2.1.19 Transitions */}
      <section id="wd-2-1-19" className="mb-4">
        <h2>2.1.19 – Transitions</h2>
        <button className="wd-transition-demo">Hover me (transition)</button>
      </section>

      {/* 2.1.20 Animations */}
      <section id="wd-2-1-20" className="mb-5">
        <h2>2.1.20 – Animations</h2>
        <div className="wd-animation-bounce wd-dimension-square wd-bg-color-blue wd-fg-color-white text-center d-flex align-items-center justify-content-center">
          Bounce
        </div>
      </section>

      {/* ===========================================================
          CHAPTER 2.2 – React Icons
      =========================================================== */}
      <section id="wd-2-2-icons" className="mb-4">
        <h2>2.2 – Decorating Documents with React Icons</h2>
        <div className="d-flex gap-2 align-items-center mb-3">
          <AiOutlineDashboard className="fs-3" />
          <FaCalendar className="fs-3" />
          <FaEnvelopeOpenText className="fs-3" />
          <FaRegClock className="fs-3" />
        </div>
        <ReactIconsSampler />
      </section>

      {/* ===========================================================
          CHAPTER 2.3 – React Bootstrap
      =========================================================== */}

      {/* 2.3.1 Importing React Bootstrap */}
      <section id="wd-2-3-1" className="mb-4">
        <h2>2.3.1 – Importing React Bootstrap</h2>
        <p>React Bootstrap components are imported from <code>react-bootstrap</code>.</p>
      </section>

      {/* 2.3.2 Containers */}
      <section id="wd-2-3-2" className="mb-4">
        <h2>2.3.2 – Containers</h2>
        <Alert variant="info">This page is wrapped in a Bootstrap Container.</Alert>
      </section>

      {/* 2.3.3 Alerts */}
      <section id="wd-2-3-3" className="mb-4">
        <h2>2.3.3 – Alerts</h2>
        <Alert variant="success">Success!</Alert>
        <Alert variant="danger">Danger!</Alert>
        <Alert variant="warning">Warning!</Alert>
      </section>

      {/* 2.3.4 Buttons */}
      <section id="wd-2-3-4" className="mb-4">
        <h2>2.3.4 – Buttons</h2>
        <Button variant="primary" className="me-2">Primary</Button>
        <Button variant="secondary" className="me-2">Secondary</Button>
        <Button variant="success" className="me-2">Success</Button>
        <Button variant="danger">Danger</Button>
      </section>

      {/* 2.3.5 Cards */}
      <section id="wd-2-3-5" className="mb-4">
        <h2>2.3.5 – Cards</h2>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/images/stacked.jpg" />
          <Card.Body>
            <Card.Title>Bootstrap Card</Card.Title>
            <Card.Text>Example card with image and button.</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </section>

      {/* 2.3.6 Navigation */}
      <section id="wd-2-3-6" className="mb-4">
        <h2>2.3.6 – Navigation</h2>
        <Nav variant="pills" className="mb-3">
          <NavItem><NavLink href="#/Labs" as={Link}>Labs</NavLink></NavItem>
          <NavItem><NavLink href="#/Labs/Lab1" as={Link}>Lab 1</NavLink></NavItem>
          <NavItem><NavLink href="#/Labs/Lab2" as={Link}>Lab 2</NavLink></NavItem>
        </Nav>
      </section>

      {/* 2.3.7 Layout & Spacing */}
      <section id="wd-2-3-7" className="mb-4">
        <h2>2.3.7 – Layout and Spacing</h2>
        <div className="p-3 mb-2 bg-light border">
          Padding 3 + Margin Bottom 2 + Light Background
        </div>
      </section>

      {/* 2.3.8 Typography */}
      <section id="wd-2-3-8" className="mb-4">
        <h2>2.3.8 – Typography</h2>
        <p className="fs-1 fw-bold">Large and bold text</p>
        <p className="text-muted fst-italic">Muted italic text</p>
      </section>

      {/* 2.3.9 Images */}
      <section id="wd-2-3-9" className="mb-4">
        <h2>2.3.9 – Images and Thumbnails</h2>
        <img src="/images/stacked.jpg" alt="sample" className="img-thumbnail me-3" width="150" />
        <img src="/images/reactjs.jpg" alt="react" className="rounded-circle" width="150" />
      </section>

      {/* 2.3.10 Tables */}
      <section id="wd-2-3-10" className="mb-4">
        <h2>2.3.10 – Tables</h2>
        <table className="table table-striped table-bordered">
          <thead><tr><th>#</th><th>Name</th><th>Email</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Alice</td><td>alice@example.com</td></tr>
            <tr><td>2</td><td>Bob</td><td>bob@example.com</td></tr>
          </tbody>
        </table>
      </section>

      {/* 2.3.11 Forms */}
      <section id="wd-2-3-11" className="mb-4">
        <h2>2.3.11 – Forms</h2>
        <form>
          <input type="text" className="form-control mb-2" placeholder="Enter your name" />
          <input type="email" className="form-control mb-2" placeholder="Enter your email" />
          <Button variant="primary" type="submit">Submit</Button>
        </form>
      </section>

      {/* 2.3.12 Form Groups & Labels */}
      <section id="wd-2-3-12" className="mb-4">
        <h2>2.3.12 – Form Groups and Labels</h2>
        <div className="mb-3">
          <label htmlFor="exampleEmail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleEmail" placeholder="name@example.com" />
        </div>
      </section>

      {/* 2.3.13 Input Groups */}
      <section id="wd-2-3-13" className="mb-4">
        <h2>2.3.13 – Input Groups</h2>
        <div className="input-group mb-3">
          <span className="input-group-text">@</span>
          <input type="text" className="form-control" placeholder="username" />
        </div>
      </section>

      {/* 2.3.14 Checkboxes & Radios */}
      <section id="wd-2-3-14" className="mb-4">
        <h2>2.3.14 – Checkboxes and Radios</h2>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="check1" />
          <label className="form-check-label" htmlFor="check1">Subscribe to newsletter</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadio" id="radio1" />
          <label className="form-check-label" htmlFor="radio1">Option A</label>
        </div>
      </section>

      {/* 2.3.15 Dropdowns */}
      <section id="wd-2-3-15" className="mb-4">
        <h2>2.3.15 – Dropdowns</h2>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Choose Option
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Option 1</a></li>
            <li><a className="dropdown-item" href="#">Option 2</a></li>
          </ul>
        </div>
      </section>

      {/* 2.3.16 Modals */}
      <section id="wd-2-3-16" className="mb-4">
        <h2>2.3.16 – Modals</h2>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#demoModal">
          Launch Modal
        </button>
        <div className="modal fade" id="demoModal" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Example Modal</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">Hello from a Bootstrap modal!</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.3.17 Tooltips */}
      <section id="wd-2-3-17" className="mb-4">
        <h2>2.3.17 – Tooltips</h2>
        <Button variant="info" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
          Hover for tooltip
        </Button>
      </section>

      {/* 2.3.18 Putting It All Together */}
      <section id="wd-2-3-18" className="mb-5">
        <h2>2.3.18 – Putting It All Together</h2>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/images/stacked.jpg" />
          <Card.Body>
            <Card.Title>Bootstrap Integration Example</Card.Title>
            <Card.Text>This combines Navs, Buttons, Cards, and Images.</Card.Text>
            <Button variant="primary">Action</Button>
          </Card.Body>
        </Card>
      </section>
    </Container>
  );
}
