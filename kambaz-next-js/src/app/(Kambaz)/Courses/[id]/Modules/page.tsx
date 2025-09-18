export default function Modules({ params }: { params: { id: string } }) {
  return (
    <div id="wd-modules">
      <h2>Modules</h2>
      <div>
        <h3>Module 1: Introduction</h3>
        <ul>
          <li>Lesson 1.1 - Overview</li>
          <li>Lesson 1.2 - Setup</li>
        </ul>
      </div>

      <div>
        <h3>Module 2: HTML & CSS</h3>
        <ul>
          <li>Lesson 2.1 - HTML Basics</li>
          <li>Lesson 2.2 - CSS Basics</li>
        </ul>
      </div>
    </div>
  );
}
