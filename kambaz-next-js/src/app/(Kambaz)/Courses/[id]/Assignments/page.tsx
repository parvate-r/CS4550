export default async function Assignments({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <div id="wd-assignments">
      <h2>Assignments for Course {id}</h2>
      <ul>
        <li>Assignment 1 - Due May 13</li>
        <li>Assignment 2 - Due May 20</li>
      </ul>

      <h3>Quizzes</h3>
      <ul>
        <li>Quiz 1 - HTML</li>
        <li>Quiz 2 - CSS</li>
      </ul>

      <h3>Exams</h3>
      <ul>
        <li>Midterm Exam</li>
        <li>Final Exam</li>
      </ul>

      <h3>Project</h3>
      <ul>
        <li>Final Group Project</li>
      </ul>
    </div>
  );
}
