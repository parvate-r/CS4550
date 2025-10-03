"use client";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "./lab2.css";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2: CSS Basics</h2>

      <section id="wd-selectors">
        <h3>Selectors</h3>
        <p>This is styled with an <strong>element selector</strong>.</p>
        <p className="example-class">This is styled with a <strong>class selector</strong>.</p>
        <p id="example-id">This is styled with an <strong>ID selector</strong>.</p>
        <p className="example-class another-class">
          This is styled with <strong>multiple classes</strong>.
        </p>
      </section>

      <section id="wd-colors">
        <h3>Colors and Backgrounds</h3>
        <p className="text-red">This text is red.</p>
        <p className="bg-yellow">This text has a yellow background.</p>
        <p className="bg-image">This has a background image.</p>
      </section>

      <section id="wd-borders">
        <h3>Borders</h3>
        <div className="border-solid">Solid border</div>
        <div className="border-dotted">Dotted border</div>
        <div className="border-dashed">Dashed border</div>
        <div className="border-double">Double border</div>
        <div className="border-groove">Groove border</div>
        <div className="border-ridge">Ridge border</div>
        <div className="border-inset">Inset border</div>
        <div className="border-outset">Outset border</div>
      </section>

      <section id="wd-spacing">
        <h3>Margins and Padding</h3>
        <div className="margin-example">This has margins.</div>
        <div className="padding-example">This has padding.</div>
      </section>

      <section id="wd-rounded">
        <h3>Rounded Corners</h3>
        <div className="rounded">Rounded corners example</div>
      </section>
    </div>
  );
}
